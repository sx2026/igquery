import { NextRequest, NextResponse } from "next/server";

// Simple in-memory rate limiting for MVP
// In production, use Redis or a similar store
const rateLimitMap = new Map<string, { count: number; lastReset: number }>();
const LIMIT = 30;
const WINDOW = 24 * 60 * 60 * 1000; // 24 hours

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const data = rateLimitMap.get(ip);

  if (!data || now - data.lastReset > WINDOW) {
    rateLimitMap.set(ip, { count: 1, lastReset: now });
    return true;
  }

  if (data.count >= LIMIT) {
    return false;
  }

  data.count += 1;
  return true;
}

async function verifyRecaptcha(token: string) {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret || secret.includes("PLACEHOLDER")) {
    console.warn("reCAPTCHA secret key is not set. Skipping verification (dev mode).");
    return true;
  }

  const response = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`,
    { method: "POST" }
  );

  const data = await response.json();
  return data.success && data.score >= 0.5;
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.ip || req.headers.get("x-forwarded-for") || "unknown";
    
    // 1. Rate Limiting
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again tomorrow." },
        { status: 429 }
      );
    }

    const { seed, goal, location, type, recaptchaToken } = await req.json();

    // 2. reCAPTCHA Verification
    const isHuman = await verifyRecaptcha(recaptchaToken);
    if (!isHuman) {
      return NextResponse.json({ error: "Anti-abuse verification failed." }, { status: 403 });
    }

    // 3. Prompt Construction
    const isAnyGoal = goal === "Any" || !goal;
    const currentGoalTitle = isAnyGoal ? "Intent Mix Queries" : "Goal-based Queries";
    const currentGoalDesc = isAnyGoal 
      ? "A balanced set of queries across common search goals." 
      : `Tailored for ${goal}.`;

    const systemPrompt = `
      You are an expert Instagram Search Query Optimizer who thinks like a growth marketer, a power user, and a real Instagram searcher.

Your task is to transform a Seed Keyword into 4 distinct groups of highly usable Instagram search queries.

Return valid JSON only.
Do not include markdown, comments, explanations, or code fences.

Input parameters:
- Seed Keyword: ${seed}
- Search Goal: ${goal || 'Any'}
- Location: ${location || 'N/A'}
- Content Type: ${type || 'Any'}

Global requirements:
- All queries must look like something a real human would realistically type into Instagram search.
- Prefer short, natural, usable phrases.
- Avoid robotic, awkward, or overly SEO-like phrasing.
- Avoid meaningless word stacking.
- Avoid near-duplicates across groups.
- Avoid plural/singular-only variations unless they genuinely reflect distinct search behavior.
- Keep each group meaningfully different in function and intent.
- Use 2-5 words per query total unless a month/year anchor makes 6 words unavoidable.
- Prefer clarity and usability over cleverness.
- Prefer queries that a real user would actually copy and use.
- When in doubt, choose the more natural and more searchable phrase.

Group purity rules:
- Core Queries must stay broad and foundational.
- Long-tail Queries must increase specificity, not switch into use-case intent.
- Goal-based Queries must reflect use-case intent, not just add random modifiers.
- Recency-Oriented Queries must reflect freshness, not shopping, creator, or local intent unless that expression is truly natural.

Location usage rules:
- Use Location only when the query would plausibly be searched with a place name by a real user.
- Do not append Location mechanically.
- At most 1-2 queries across all groups should include Location unless the Search Goal is explicitly local.

Content Type usage rules:
- Use Content Type only when it feels native to Instagram search behavior.
- Do not force the content type into every group.
- Prefer using Content Type in Goal-based or Recency-Oriented queries when appropriate.

Time relevance rules:
- If using a year or month/year anchor, prefer the current year or current month/year context.
- Never output past years unless the Seed Keyword itself is explicitly historical and the past year is essential to realistic search behavior.
- Prefer relative freshness phrases like "latest", "this week", "current", or "now" when they sound more natural than a fixed year.
- Avoid stale or outdated anchors.

Avoid query patterns like:
- awkward stacking: "local vintage watch creator"
- weak templating: "trending [seed] creator"
- unnatural freshness: "vintage new releases"
- low-value near-duplicates
- generic filler variants that do not meaningfully change search behavior

Group output requirements:

1. Core Queries
- Output exactly 3 queries.
- Requirement: 2-3 words only.
- Logic: The most stable, broad, foundational search phrases for the topic.
- These should be the safest starting points.
- Do NOT include intent modifiers like: inspo, ideas, reels, creator, influencer, shop, store, local, latest, this week.

2. Long-tail Queries
- Output exactly 4 queries.
- Requirement: 3-5 words.
- Logic: More specific searches based on niche, era, style, audience, budget, use case, or subcategory.
- These should narrow the topic by specificity, not mainly by business or creator intent.
- Avoid making these feel like creator-discovery, local-business, or shopping queries unless clearly justified.

3. Goal-based Queries
- Output exactly 4 queries.
- These should be the most usable queries for the selected search goal.
- The queries should feel actionably different from Core and Long-tail groups.
- Do not merely add a surface modifier; reflect how a real user would search for that goal on Instagram.
- If Search Goal is a specific value, all 4 queries must clearly reflect that exact goal.
- If Search Goal is "Any", output exactly:
  - 1 inspiration-oriented query
  - 1 creator-discovery query
  - 1 shopping/business-oriented query
  - 1 local-discovery query
- For Search Goal = "Any", the 4 queries should represent different common intents, but each must still sound like a realistic Instagram search.
- Do not force a local or business query if the Seed Keyword does not naturally support it.
- When needed, prefer broader but still distinct intent variations over awkward niche combinations.
- Description target: ${currentGoalDesc}

4. Recency-Oriented Queries
- Output exactly 3 queries.
- These should help users explore newer, more current, or more recently framed content angles.
- Use freshness signals only when they sound natural for the seed.
- Prefer natural modifiers such as: latest, this week, current, now, trend, finds, reels.
- Use month/year anchors only when they feel natural and current.
- Avoid outdated anchors or stale years.
- Use niche-specific freshness words like "pickup" or "market update" only if they genuinely fit the topic.
- Avoid semantic conflicts.

Output JSON schema:
{
  "groups": [
    {
      "type": "core",
      "title": "Core Queries",
      "description": "Broad but foundational search phrases.",
      "queries": []
    },
    {
      "type": "long_tail",
      "title": "Long-tail Queries",
      "description": "Deep dive into specific niches.",
      "queries": []
    },
    {
      "type": "goal_based",
      "title": "${currentGoalTitle}",
      "description": "${currentGoalDesc}",
      "queries": []
    },
    {
      "type": "recency",
      "title": "Recency-Oriented Queries",
      "description": "Fresh signals for current trends.",
      "queries": []
    }
  ]
}
    `;

    // 4. LLM API Call with Retry Logic
    const apiKey = process.env.AIML_API_KEY;
    if (!apiKey || apiKey.includes("PLACEHOLDER")) {
      return NextResponse.json(
        { error: "API configuration missing. Please fill AIML_API_KEY in .env.local" },
        { status: 500 }
      );
    }

    let lastError: any = null;
    let attempts = 0;
    const MAX_ATTEMPTS = 3;

    while (attempts < MAX_ATTEMPTS) {
      try {
        attempts++;
        const llmResponse = await fetch("https://api.aimlapi.com/v1/chat/completions", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "openai/gpt-5-mini-2025-08-07",
            messages: [
              { role: "system", content: "You output only valid JSON." },
              { role: "user", content: systemPrompt }
            ],
            response_format: { type: "json_object" }
          }),
        });

        if (!llmResponse.ok) {
          const errorText = await llmResponse.text();
          throw new Error(`LLM API failed (Status: ${llmResponse.status}): ${errorText || llmResponse.statusText || 'Unknown Error'}`);
        }

        const llmResult = await llmResponse.json();
        const content = llmResult.choices[0].message.content;
        return NextResponse.json(JSON.parse(content));

      } catch (err: any) {
        lastError = err;
        console.warn(`Attempt ${attempts} failed:`, err.message);
        if (attempts < MAX_ATTEMPTS) {
          // Exponential backoff: 500ms, 1000ms
          await new Promise(resolve => setTimeout(resolve, Math.pow(2, attempts - 1) * 500));
        }
      }
    }

    throw lastError || new Error("Max retry attempts reached");

  } catch (error: unknown) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
