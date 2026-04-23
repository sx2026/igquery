import React from "react";
import { Plus, Minus } from "lucide-react";

interface FaqItem {
  question: string;
  answer?: string;
  aNode?: React.ReactNode;
}

const FAQS: FaqItem[] = [
  {
    question: "What is Instagram search query optimization?",
    answer: "Instagram search query optimization is the practice of strategically structuring your searches to find highly specific, relevant content instead of generic posts. By using modifiers, niche terms, and specific intents, you can bypass Instagram's broad algorithmic results to discover precisely what you need."
  },
  {
    question: "How can I improve my Instagram search queries?",
    answer: "To improve your Instagram search queries, move beyond single words. Add context like locations, content formats (e.g., 'reels', 'ideas'), audience intents (e.g., 'for beginners', 'budget'), or recency signals (e.g., 'this week', the current year). This signals exactly what you're looking for to Instagram's search engine."
  },
  {
    question: "Can this tool help with Instagram search queries optimization?",
    answer: "Yes! IGQuery is specifically built to automate the optimization process. When you enter a basic seed keyword, our AI generates multiple structured groups of advanced queries (Core, Long-tail, Intent-based, and Recency-oriented) that are ready to be used on Instagram."
  },
  {
    question: "How do I get help with Instagram search queries?",
    answer: "If you're stuck getting generic search results, you can use our tool to instantly generate better search terms. You can also explore our guidance pages for tips, methodology, and specialized examples covering different topics like creator discovery or competitor research."
  },
  {
    question: "What is the difference between hashtags and Instagram search queries?",
    answer: "Hashtags are specific tags creators add to their posts (like #minimalistdecor). Search queries are the phrases you type into the search bar. Modern Instagram relies heavily on keyword-based semantic search, meaning a well-structured query can often find highly relevant content even if the creator didn't use specific hashtags."
  },
  {
    question: "Can I use this tool for creator discovery?",
    answer: "Absolutely. By selecting 'Creator Discovery' as your search goal, the tool optimizes your queries to include terms that typically surface influencer profiles, content creators, and professional portfolios rather than just random lifestyle posts."
  },
  {
    question: "How does it help with competitor research?",
    answer: "For competitor research, we optimize your queries to locate brands, studios, product launches, and business accounts operating within your niche, allowing you to easily survey how competitors are presenting themselves on the platform."
  },
  {
    question: "Is this effective for local discovery?",
    answer: "Yes, local discovery is one of the most popular uses for search query optimization. By combining a topic with a location and specific modifier (e.g., 'matcha cafe new york review'), you're much more likely to find localized, authentic recommendations."
  },
  {
    question: "Can I use Instagram search query optimization for competitor research?",
    answer: "Yes. Simply switch the 'Search Goal' to Competitor Research. Your seed keyword will be appended with specific business modifiers like 'brand', 'startup', or 'launch', helping you analyze how related brands position themselves visually."
  },
  {
    question: "Can brands use optimized Instagram search queries for market research?",
    answer: "Absolutely. By analyzing optimized long-tail queries and intent-based searches, brands can quickly find their target audience's pain points, trending aesthetic formats, and common product alternatives directly from real user content."
  },
  {
    question: "What are examples of strong Instagram search modifiers?",
    answer: "Strong modifiers add intent. For content inspiration: 'aesthetic', 'routine', 'before after'. For creators: 'influencer', 'instructor', 'creator'. For intent to buy: 'review', 'shopping haul', 'affordable'."
  },
  {
    question: "Do you fetch live Instagram data directly?",
    answer: "No, IGQuery operates as an optimization engine, not a scraper. It structures and enhances the text of your queries. You simply copy the optimized queries and paste them directly into your Instagram app to see the native results safely."
  },
  {
    question: "Can I also use IGQuery to view Instagram stories anonymously or track someone's recent follows?",
    aNode: (
      <>
        IGQuery is specialized in deep profile analytics and search. If you are looking to view Instagram stories, reels, and posts completely anonymously without leaving a trace, we highly recommend our sister tool,{" "}
        <a
          href="https://www.igrecent.com/"
          title="IGRecent - Anonymous Instagram Story & Post Viewer"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 hover:underline dark:text-indigo-400 font-medium"
        >
          IGRecent
        </a>
        . Alternatively, if your goal is to track a specific user's new followers or see who they recently followed,{" "}
        <a
          href="https://www.recentfollowed.net/"
          title="RecentFollowed - Track Who Someone Recently Followed on Instagram"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 hover:underline dark:text-indigo-400 font-medium"
        >
          RecentFollowed
        </a>{" "}
        is built exactly for that purpose. For anonymous TikTok video viewing, you can check out{" "}
        <a
          href="https://www.ttanonviewer.com/"
          title="TTAnonViewer - Anonymous TikTok Video Viewer"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 hover:underline dark:text-indigo-400 font-medium"
        >
          TTAnonViewer
        </a>
        .
      </>
    ),
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
              <div className="border-t border-zinc-100 p-6 text-zinc-600 dark:border-zinc-800 dark:text-zinc-400 leading-relaxed">
                {faq.aNode ?? faq.answer}
              </div>
            </details>
          );
        })}
      </div>
    </section>
  );
}
