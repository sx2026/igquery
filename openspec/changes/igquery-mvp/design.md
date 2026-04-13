# Architecture

The system will use a Next.js App Router full-stack architecture.

- **Frontend (Client Components):** 
  - Responsive, centered layout using Tailwind CSS ("Zinc" & "Indigo" theme).
  - Framer Motion for clean micro-animations (chips input, loading states).
  - Next.js Server Actions or API Routes to communicate securely with the backend.
  - Invisible Google reCAPTCHA v3 integrated on form submission.

- **Backend (Server API - Next.js):**
  - Next.js API Routes (Route Handlers) serving as the middleware.
  - Verification of reCAPTCHA v3 tokens.
  - Basic IP Rate Limiting (in-memory or via Vercel KV if deployed there).
  - Interaction with AIML API (`https://api.aimlapi.com/v1/responses`) using standard `fetch` with `openai/gpt-5-4` model.
  - Strongly typed JSON parsing mapping to the 4 query types defined in the PRD.

# Data Flow

1. User interacts with "one-click chips" to populate the form and trigger hardcoded instant UI demonstration.
2. User enters custom "Seed Keyword" + optional filters and clicks "Optimize Queries".
3. Frontend triggers Google reCAPTCHA v3 invisible challenge, receives token.
4. Client `POST`s the `seed`, `goal`, `location`, `type` and `recaptcha_token` to `/api/optimize`.
5. Server logic:
   - IP Rate Limiting check (< 30 req/day per IP).
   - Validates reCAPTCHA token using Google's verification endpoint.
   - Formats a Prompt (inserting JSON schema validation parameters).
6. Server calls `https://api.aimlapi.com/v1/responses` passing the prompt.
7. AIML returns GPT-5-4 output. Server parses it as JSON.
8. JSON is returned to Client UI, which triggers `Staggered Reveal` framer motion to show queries.

# Edge Cases & Error Handling

- Form validation: Reject empty Seed Keyword.
- AIML API failures/Rate limits: Gracefully catch 5xx/429 errors and display a unified error toast: "Something went wrong. Please try again."
- Invalid JSON output from LLM: The Server API should attempt to parse it and fallback to a default error if it throws.
