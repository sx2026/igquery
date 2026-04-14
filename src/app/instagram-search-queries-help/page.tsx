import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Instagram Search Queries Help & Examples",
  description: "Get help with Instagram search queries. See practical examples of how to formulate queries for creators, competitors, and inspiration.",
};

export default function IGSearchQueriesHelpPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-grow">
        <article className="container mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:py-24">
          <header className="mb-12 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-6xl dark:text-zinc-50 leading-[1.15]">
              Instagram Search Queries Help
            </h1>
            <p className="mt-6 text-xl text-zinc-600 dark:text-zinc-400">
              Stuck getting bad results? See how to optimize your queries with these practical examples.
            </p>
          </header>

          <div className="prose prose-lg prose-indigo mx-auto dark:prose-invert">
            <h2>Need Help with Instagram Search Queries?</h2>
            <p>
              If your searches on Instagram are returning irrelevant memes or mass-appeal viral videos instead of exactly what you want, you are not alone. Our platform is dedicated to providing <strong>Instagram search queries help</strong> to fix exactly this problem. Below are use-case examples demonstrating how applying query optimization changes everything.
            </p>

            <h3>Use Case 1: Finding Local Businesses</h3>
            <ul>
              <li><strong>Bad Query:</strong> "cafe"</li>
              <li><strong>Optimized Queries:</strong> "quiet cafe tokyo review", "matcha spot tokyo", "hidden cafe tokyo reel"</li>
              <li><strong>Why it helps:</strong> Location bounds the search, and words like "review" or "spot" filter out generic coffee photography.</li>
            </ul>

            <h3>Use Case 2: Competitor Research</h3>
            <ul>
              <li><strong>Bad Query:</strong> "skincare"</li>
              <li><strong>Optimized Queries:</strong> "korean skincare brand", "skincare startup", "skincare packaging design"</li>
              <li><strong>Why it helps:</strong> It shifts the focus from consumer content to business and industry-focused content.</li>
            </ul>

            <h3>Use Case 3: Creator Discovery</h3>
            <ul>
              <li><strong>Bad Query:</strong> "workout"</li>
              <li><strong>Optimized Queries:</strong> "pilates instructor london", "fitness creator routine", "home workout influencer"</li>
              <li><strong>Why it helps:</strong> Modifiers like "instructor", "creator", or "influencer" drastically increase the chance of surfacing profiles rather than individual random viral posts.</li>
            </ul>

            <div className="rounded-2xl bg-indigo-50 p-8 my-8 dark:bg-indigo-500/10">
              <h3 className="text-indigo-800 dark:text-indigo-300 mt-0">Generate Your Own Queries</h3>
              <p className="mb-0 text-indigo-900/80 dark:text-indigo-200/80">
                Type any topic into our tool, select your specific goal, and watch the AI instantly provide you with optimized queries tailored to your needs.
              </p>
              <div className="mt-6">
                <Link 
                  href="/"
                  className="rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white transition-all hover:bg-indigo-700 inline-block"
                >
                  Start Generating Queries
                </Link>
              </div>
            </div>

            <h2>Further Reading</h2>
            <p>
              Dive into our <Link href="/instagram-search-query-optimization">Query Optimization Concepts</Link> or understand the <Link href="/instagram-search-queries-optimization">Methodology</Link> behind how we classify searches.
            </p>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
