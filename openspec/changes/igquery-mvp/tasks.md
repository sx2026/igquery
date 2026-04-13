## 1. Project Setup
- [ ] 1.1 Initialize Next.js App Router project with TypeScript and Tailwind CSS.
- [ ] 1.2 Install necessary dependencies: `framer-motion` for animations, `lucide-react` for icons, and `i18next` if needed later.
- [ ] 1.3 Setup Tailwind config with `zinc` and `indigo` primary colors.
- [ ] 1.4 Setup environment variables `AIML_API_KEY` and `RECAPTCHA_SECRET_KEY`.

## 2. Frontend Layout & UI Components
- [ ] 2.1 Develop the responsive Header navigation (Logo, How it works, Examples, FAQ links).
- [ ] 2.2 Develop the Hero section (H1, Subtitle) styled with clean Typography and a subtle background effect.
- [ ] 2.3 Develop the AI Query Builder Card (Seed keyword text input + 3 lightweight selects).
- [ ] 2.4 Develop the Quick Sample Chips ("vintage watches", etc.) with hardcoded dynamic right-side/bottom preview switching.
- [ ] 2.5 Develop the "How it Works" 3-step section.
- [ ] 2.6 Develop the "Examples" use-case section.
- [ ] 2.7 Develop the SEO FAQ area and bottom footer.

## 3. Backend Implementation (Next.js API)
- [ ] 3.1 Create `/api/optimize/route.ts` API handler.
- [ ] 3.2 Implement simple IP Rate Limiting checking.
- [ ] 3.3 Implement Google reCAPTCHA v3 verification logic.
- [ ] 3.4 Build strict System Prompt & JSON Schema for the `igquery.com` requirements.
- [ ] 3.5 Integrate `fetch` call to `https://api.aimlapi.com/v1/responses` using `openai/gpt-5-4`.
- [ ] 3.6 Parse strictly into the 4 defined Query groups and handle parsing errors gracefully.

## 4. Full Integration
- [ ] 4.1 Update the AI Query Builder to perform real `POST` calls to `/api/optimize`.
- [ ] 4.2 Integrate Google reCAPTCHA v3 script tag and token generation on form submit.
- [ ] 4.3 Add loading states (Skeleton UI or Spinner on the submit button).
- [ ] 4.4 Add success states (Staggered Framer Motion reveal for the 4 sets of real query results).
- [ ] 4.5 Implement the specific `[Copy]` and `[Copy All]` clipboard functionalities.
- [ ] 4.6 Verify error toasts (e.g., 429 Too Many Requests, 500 Internal Error) are presented elegantly.
