## Why

Users who search Instagram directly often use vague keywords (e.g., "vintage watches") and receive overly broad or irrelevant results. There is a need for an external tool that transforms these simple ideas into highly specific, scenario-based search queries (for content inspiration, creator discovery, competitor research, and local searching) to get better results from Instagram's native search engine. In addition, there is a business goal to capture search intent via SEO for "instagram search query optimization". This MVP is created to test this value proposition quickly.

## What Changes

This introduces the `igquery-mvp`, an extreme-minimalist, AI-powered tool built entirely on Next.js App Router. It takes a single seed keyword, optional goal/location/content type, and utilizes the AIML API (OpenAI GPT-5-4) to generate 4 groups of specific search queries (Core, Long-tail, Goal-based, Recency-Oriented). The UI is highly optimized as a "Search-native" hub with 5 critical screens emphasizing rapid understanding, immediate utility (via interactive chips & demos), and defense against abuse via Google reCAPTCHA v3.

## Capabilities

### New Capabilities
- `query-optimization`: Core tool UI and Logic to translate user seeds and filters into 4 sets of specialized query terms using AI (AIML API). 
- `anti-abuse-protection`: Invisible mechanisms (Google reCAPTCHA v3 + IP Rate Limiting) validating frontend requests before incurring LLM API costs.
- `seo-landing-pages`: Static SEO informational layouts added precisely below the tool interface to capture organic traffic without diluting the primary UX.

### Modified Capabilities
- 

## Impact

This is a totally new application. It establishes the baseline Next.js App Router application structure, frontend visual identity (Tailwind Zinc + Indigo, Framer Motion), and standardized integration patterns for external LLMs (AIML).
