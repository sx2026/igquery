const CHAT_COMPLETIONS_MODELS = new Set([
  "google/gemini-3-flash-preview",
  "anthropic/claude-haiku-4.5",
]);

export function usesChatCompletions(model) {
  return CHAT_COMPLETIONS_MODELS.has(model);
}

function stripMarkdownCodeFence(text) {
  const trimmed = text.trim();
  const fencedMatch = trimmed.match(/^```(?:json)?\s*([\s\S]*?)\s*```$/i);

  if (fencedMatch) {
    return fencedMatch[1].trim();
  }

  return trimmed;
}

export function extractAIMLText(payload) {
  if (!payload || typeof payload !== "object") {
    throw new Error("LLM response payload is empty");
  }

  if (typeof payload.output_text === "string" && payload.output_text.trim()) {
    return stripMarkdownCodeFence(payload.output_text);
  }

  const responsePayload = payload;
  const responseText = responsePayload.output
    ?.flatMap((item) => item.content ?? [])
    .filter((item) => item.type === "output_text" && typeof item.text === "string")
    .map((item) => item.text ?? "")
    .join("");

  if (responseText && responseText.trim()) {
    return stripMarkdownCodeFence(responseText);
  }

  const chatPayload = payload;
  const chatText = chatPayload.choices
    ?.map((choice) => choice?.message?.content ?? "")
    .filter((content) => typeof content === "string" && content.trim())
    .join("\n");

  if (chatText && chatText.trim()) {
    return stripMarkdownCodeFence(chatText);
  }

  throw new Error("No text content returned from LLM");
}

export async function callAIMLModel({ apiKey, model, prompt, signal }) {
  if (usesChatCompletions(model)) {
    return fetch("https://api.aimlapi.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model,
        messages: [
          {
            role: "system",
            content: "You output only valid JSON.",
          },
          {
            role: "user",
            content: prompt,
          },
        ],
        max_tokens: 15000,
      }),
      signal,
    });
  }

  return fetch("https://api.aimlapi.com/v1/responses", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model,
      instructions: "You output only valid JSON.",
      input: prompt,
    }),
    signal,
  });
}
