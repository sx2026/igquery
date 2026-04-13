import { Plus, Minus } from "lucide-react";

const FAQS = [
  {
    question: "What is an Instagram search query?",
    answer: "An Instagram search query is the specific combination of keywords you type into the Instagram search bar. While most people use single words, professional queries include modifiers like 'inspo', 'creator', or location tags to reveal more specific and high-quality results."
  },
  {
    question: "How does this tool improve my search?",
    answer: "IGQuery uses AI to expand your initial seed keyword into four specialized categories: Core, Long-tail, Intent-based, and Recency-oriented. This expansion helps you discover niche content and accounts that aren't surfaced by broad, generic searches."
  },
  {
    question: "Can I use these queries for hashtags as well?",
    answer: "You can reuse some of these queries for hashtag inspiration, but this tool is primarily designed for search optimization rather than hashtag generation. It helps surface content that isn't always easily reachable through hashtags alone."
  },
  {
    question: "Do you fetch live Instagram data?",
    answer: "No. IGQuery does not fetch live Instagram results directly. It helps you generate better search queries that you can use on Instagram yourself to find precisely what you're looking for."
  }
];

export default function FAQ() {
  return (
    <section id="faq" className="container mx-auto max-w-3xl px-4 py-24 sm:px-6">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="space-y-4">
        {FAQS.map((faq, idx) => {
          return (
            <details
              key={faq.question}
              open={idx === 0}
              className="group rounded-2xl border border-zinc-200 bg-white overflow-hidden transition-all open:shadow-sm dark:border-zinc-800 dark:bg-zinc-900/50"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between p-6 text-left outline-none [&::-webkit-details-marker]:hidden">
                <span className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">{faq.question}</span>
                <span className="relative ml-4 h-5 w-5 shrink-0">
                  <Plus className="absolute inset-0 h-5 w-5 text-zinc-400 transition-opacity group-open:opacity-0" />
                  <Minus className="absolute inset-0 h-5 w-5 text-indigo-500 opacity-0 transition-opacity group-open:opacity-100" />
                </span>
              </summary>
              <div className="border-t border-zinc-100 p-6 text-zinc-600 dark:border-zinc-800 dark:text-zinc-400">
                {faq.answer}
              </div>
            </details>
          );
        })}
      </div>
    </section>
  );
}
