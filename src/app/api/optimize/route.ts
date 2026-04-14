import { NextRequest, NextResponse } from "next/server";
import { callAIMLModel, extractAIMLText } from "@/lib/aimlClient.mjs";
import { buildOptimizePrompt } from "@/lib/optimizePrompt.mjs";

export const runtime = "nodejs";
const OPTIMIZE_MODEL = "anthropic/claude-haiku-4.5";

// Simple in-memory rate limiting for MVP
// In production, use Redis or a similar store
const rateLimitMap = new Map<string, { count: number; lastReset: number }>();
const LIMIT = 8;
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
  const requestStartedAt = performance.now();

  try {
    const ip = req.headers.get("x-forwarded-for") || "unknown";
    
    // 1. Rate Limiting
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again tomorrow." },
        { status: 429 }
      );
    }

    const requestBodyStartedAt = performance.now();
    const { seed, goal, location, type, recaptchaToken } = await req.json();
    const requestBodyDuration = performance.now() - requestBodyStartedAt;

    // 2. reCAPTCHA Verification
    const recaptchaStartedAt = performance.now();
    const isHuman = await verifyRecaptcha(recaptchaToken);
    const recaptchaDuration = performance.now() - recaptchaStartedAt;
    if (!isHuman) {
      console.info("[optimize] request blocked", {
        seed,
        parseMs: Number(requestBodyDuration.toFixed(1)),
        recaptchaMs: Number(recaptchaDuration.toFixed(1)),
        totalMs: Number((performance.now() - requestStartedAt).toFixed(1)),
      });
      return NextResponse.json({ error: "Anti-abuse verification failed." }, { status: 403 });
    }

    // 3. Prompt Construction
    const isAnyGoal = goal === "Any" || !goal;
    const currentGoalDesc = isAnyGoal 
      ? "A balanced set of queries across common search goals." 
      : `Tailored for ${goal}.`;

    const systemPrompt = buildOptimizePrompt({ seed, goal, location, type });

    // 4. LLM API Call with Retry Logic
    const apiKey = process.env.AIML_API_KEY;
    if (!apiKey || apiKey.includes("PLACEHOLDER")) {
      return NextResponse.json(
        { error: "API configuration missing. Please fill AIML_API_KEY in .env.local" },
        { status: 500 }
      );
    }

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 20000);

    try {
      const llmStartedAt = performance.now();
      const llmResponse = await callAIMLModel({
        apiKey,
        model: OPTIMIZE_MODEL,
        prompt: systemPrompt,
        signal: controller.signal,
      });
      const llmDuration = performance.now() - llmStartedAt;

      clearTimeout(timeoutId);

      if (!llmResponse.ok) {
        const errorText = await llmResponse.text();
        throw new Error(`LLM API failed (Status: ${llmResponse.status}): ${errorText || llmResponse.statusText || "Unknown Error"}`);
      }

      const llmResult = await llmResponse.json();
      const rawJson = JSON.parse(extractAIMLText(llmResult));

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
            title: isAnyGoal ? "Intent Mix Queries" : "Intent-Based Queries",
            description: currentGoalDesc,
            queries: rawJson.intent_mix || rawJson.goal_based || []
          },
          {
            type: "recency",
            title: "Recency-Oriented Queries",
            description: "Fresh signals for current trends.",
            queries: rawJson.recency || []
          }
        ],
        related_searches: rawJson.related_searches || []
      };

      console.info("[optimize] request completed", {
        seed,
        model: OPTIMIZE_MODEL,
        parseMs: Number(requestBodyDuration.toFixed(1)),
        recaptchaMs: Number(recaptchaDuration.toFixed(1)),
        llmMs: Number(llmDuration.toFixed(1)),
        totalMs: Number((performance.now() - requestStartedAt).toFixed(1)),
      });

      return NextResponse.json(adaptedResult);
    } catch (err: unknown) {
      if (err instanceof Error && err.name === "AbortError") {
        throw new Error("Request timed out after 20 seconds");
      }

      throw err;
    } finally {
      clearTimeout(timeoutId);
    }

  } catch (error: unknown) {
    console.error("API Error:", error);
    console.info("[optimize] request failed", {
      model: OPTIMIZE_MODEL,
      totalMs: Number((performance.now() - requestStartedAt).toFixed(1)),
    });
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
