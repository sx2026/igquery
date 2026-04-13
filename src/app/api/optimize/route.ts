import { NextRequest, NextResponse } from "next/server";

// Simple in-memory rate limiting for MVP
// In production, use Redis or a similar store
const rateLimitMap = new Map<string, { count: number; lastReset: number }>();
const LIMIT = 24;
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
    const ip = req.headers.get("x-forwarded-for") || "unknown";
    
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
      You are an expert Instagram Search Query Optimizer who thinks like a real Instagram user, not an SEO tool.

Your task is to transform a Seed Keyword into 4 groups of highly usable Instagram search queries.

Return valid JSON only.
Do not include markdown, comments, explanations, or code fences.

Input parameters:

* Seed Keyword: ${seed}
* Search Goal: ${goal || 'Any'}
* Location: ${location || 'N/A'}
* Content Type: ${type || 'Any'}

---

GLOBAL RULES:

* All queries MUST feel like something a real person would naturally type into Instagram search.
* Avoid robotic, keyword-stuffed, or SEO-style phrasing.
* Each query should feel independently typed, not generated from a template.
* Avoid repeating obvious patterns like: "inspo", "creators", "brands", "near me" across all groups.
* Prefer short, natural, slightly messy human phrasing over clean keyword structures.
* Avoid plural/singular-only variations unless meaningfully different.
* Avoid filler words or generic expansions.

---

INSTAGRAM-NATIVE LANGUAGE (VERY IMPORTANT):

Prefer real Instagram search behavior, such as:

* routine, vlog, before after, results, review
* what I use, favorites, daily, night routine
* aesthetic, cozy, minimal, clean girl
* haul, setup, transformation
* "for acne", "for beginners", "small space", etc.

Think:
→ What would someone type when casually browsing Instagram, not doing research on Google?

---

GROUP REQUIREMENTS:

1. Core Queries

* 2–4 broad, natural entry queries
* Should feel like common IG search starting points
* Avoid awkward truncations

2. Long-tail Queries

* 3–5 specific, niche, or scenario-based queries
* Include real-life use cases (e.g., for beginners, small space, acne, budget, etc.)
* Should feel like intent-rich but still casual

3. Intent Mix Queries

* 4 queries covering different intents:

  * inspiration / browsing
  * people / creators
  * products / tools / brands
  * local / discovery (ONLY if it feels natural for the topic)
* Do NOT force all four if unnatural (especially "near me")

4. Recency-Oriented Queries

* 2–3 queries reflecting freshness or trends
* Prefer natural recency signals:

  * "this week", "recent", "viral", "trending", "2025"
* Avoid generic or robotic words like "latest" unless it feels natural

---

FINAL QUALITY CHECK:

Before returning:

* Ask yourself: would a real human actually type this into Instagram?
* Remove anything that feels like SEO or a generated pattern
* Ensure variety across queries (no structural repetition)

---

OUTPUT FORMAT:

{
"core": [...],
"long_tail": [...],
"intent_mix": [...],
"recency": [...]
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
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 60000); // 60s timeout

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
            // Note: gpt-4o doesn't always strictly respect response_format if prompt is too complex,
            // but we keep it for consistency.
            response_format: { type: "json_object" }
          }),
          signal: controller.signal,
        });

        clearTimeout(timeoutId);

        if (!llmResponse.ok) {
          const errorText = await llmResponse.text();
          throw new Error(`LLM API failed (Status: ${llmResponse.status}): ${errorText || llmResponse.statusText || 'Unknown Error'}`);
        }

        const llmResult = await llmResponse.json();
        const content = llmResult.choices[0].message.content;
        const rawJson = JSON.parse(content);

        // 5. Schema Adaptation Layer
        // Transform the user's new flat schema back to the UI-expected groups array
        const adaptedResult = {
          groups: [
            {
              type: "core",
              title: "Core Queries",
              description: "Broad but foundational search phrases.",
              queries: rawJson.core || []
            },
            {
              type: "long_tail",
              title: "Long-tail Queries",
              description: "Deep dive into specific niches.",
              queries: rawJson.long_tail || []
            },
            {
              type: "intent_mix",
              title: isAnyGoal ? "Intent Mix Queries" : "Goal-based Queries",
              description: currentGoalDesc,
              queries: rawJson.intent_mix || rawJson.goal_based || []
            },
            {
              type: "recency",
              title: "Recency-Oriented Queries",
              description: "Fresh signals for current trends.",
              queries: rawJson.recency || []
            }
          ]
        };

        return NextResponse.json(adaptedResult);

      } catch (err: any) {
        clearTimeout(timeoutId);
        lastError = err;
        
        const errorMessage = err.name === 'AbortError' 
          ? `Request timed out after 60 seconds (Attempt ${attempts})`
          : err.message;
          
        console.warn(`Attempt ${attempts} failed:`, errorMessage);

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
