import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Instagram Search Queries Help | Examples, Tips, and Practical Search Guidance",
  description: "Need Instagram search queries help? Learn how to improve Instagram searches with practical examples, stronger modifiers, and ready-to-use search query ideas for creators, brands, and local discovery.",
  alternates: {
    canonical: "https://igquery.com/instagram-search-queries-help",
  },
};

export default function IGSearchQueriesHelpPage() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I get help with Instagram search queries?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can improve your searches by making them more specific. Add modifiers like creator, review, reels, affordable, or a location."
        }
      },
      {
        "@type": "Question",
        "name": "Why are my Instagram searches too broad?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Because single-keyword searches usually do not communicate enough intent. Instagram often returns generic content when the query lacks context."
        }
      },
      {
        "@type": "Question",
        "name": "What are good Instagram search query examples?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Examples include skincare creators, clean girl makeup inspo, matcha cafe tokyo, and viral skincare reels."
        }
      },
      {
        "@type": "Question",
        "name": "Can this help me find creators or competitors?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Better Instagram search queries can help you find creators, brands, studios, and niche accounts more efficiently."
        }
      },
      {
        "@type": "Question",
        "name": "Is IGQuery a live Instagram data tool?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. It does not fetch live Instagram data. It helps you generate stronger search phrases that you can use directly in Instagram search."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need an IGQuery account to use these formulas?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. These formulas and the basic generator tool are available to everyone without registration."
        }
      },
      {
        "@type": "Question",
        "name": "Will these queries help find private accounts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. These queries only surface content from public creators and businesses on Instagram."
        }
      }
    ]
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />

      <main className="flex-grow">
        <article className="container mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:py-24">
          <header className="mb-12 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-6xl dark:text-zinc-50 leading-[1.15]">
              Instagram Search Queries Help
            </h1>
            <p className="mt-6 text-xl text-zinc-600 dark:text-zinc-400">
              Practical tips and ready-to-use formulas for better Instagram searches.
            </p>
          </header>

          <div className="prose prose-lg prose-indigo mx-auto dark:prose-invert">
            <section className="mb-12">
              <p className="lead">
                Need help writing better Instagram search queries? If your current searches feel too broad, repetitive, or noisy, the fix is usually simple: make your Instagram search queries more specific. This guide explains how to do that with practical examples and easy query patterns you can copy and use right away.
              </p>
              <p>
                For a more structured framework on why these modifiers work, read our <Link href="/instagram-search-queries-optimization">Instagram search queries optimization methods</Link>.
              </p>
            </section>

            <section className="mb-12">
              <h2>Why You Might Need Instagram Search Queries Help</h2>
              <p>A lot of Instagram users struggle with the same issue: they know the topic they want, but they do not know how to search for it effectively.</p>
              <div className="bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30 p-4 rounded-xl mb-6">
                <p className="font-bold text-red-700 dark:text-red-400 mb-2 text-sm">Common Broad Searches (Low Success Rate):</p>
                <div className="flex flex-wrap gap-2 text-xs font-mono">
                  <span className="bg-white dark:bg-zinc-800 px-2 py-1 rounded">skincare</span>
                  <span className="bg-white dark:bg-zinc-800 px-2 py-1 rounded">pilates</span>
                  <span className="bg-white dark:bg-zinc-800 px-2 py-1 rounded">coffee shop</span>
                </div>
              </div>
              <p>These searches are too broad on their own. They often return generic content instead of the niche results you actually want. Instagram search queries help is really about learning how to turn vague ideas into clearer search phrases.</p>
            </section>

            <section className="mb-12">
              <h2>Copy-Ready Query Formulas</h2>
              <p>Use these simple patterns to instantly improve your results. Just replace "topic" with your keyword.</p>
              <div className="space-y-4 not-prose mb-8">
                <div className="bg-zinc-50 dark:bg-zinc-900 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Formula</span>
                    <span className="text-xs text-indigo-600 font-bold">Best for Creators</span>
                  </div>
                  <div className="text-lg font-mono mb-1">topic + creator</div>
                  <div className="text-sm text-zinc-500">Example: <code>minimalist decor creator</code></div>
                </div>
                <div className="bg-zinc-50 dark:bg-zinc-900 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Formula</span>
                    <span className="text-xs text-indigo-600 font-bold">Best for Reviews</span>
                  </div>
                  <div className="text-lg font-mono mb-1">topic + review</div>
                  <div className="text-sm text-zinc-500">Example: <code>skincare product review</code></div>
                </div>
                <div className="bg-zinc-50 dark:bg-zinc-900 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Formula</span>
                    <span className="text-xs text-indigo-600 font-bold">Best for Aesthetics</span>
                  </div>
                  <div className="text-lg font-mono mb-1">topic + aesthetic</div>
                  <div className="text-sm text-zinc-500">Example: <code>morning routine aesthetic</code></div>
                </div>
                <div className="bg-zinc-50 dark:bg-zinc-900 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Formula</span>
                    <span className="text-xs text-indigo-600 font-bold">Best for Local Discovery</span>
                  </div>
                  <div className="text-lg font-mono mb-1">topic + city</div>
                  <div className="text-sm text-zinc-500">Example: <code>vintage store london</code></div>
                </div>
                <div className="bg-zinc-50 dark:bg-zinc-900 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Formula</span>
                    <span className="text-xs text-indigo-600 font-bold">Best for Trends</span>
                  </div>
                  <div className="text-lg font-mono mb-1">topic + trending / viral</div>
                  <div className="text-sm text-zinc-500">Example: <code>viral skincare reels</code></div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2>Ready-to-Use Instagram Search Query Examples</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 not-prose mb-8">
                <div>
                  <h3 className="text-lg font-bold mb-3">If you want creator discovery</h3>
                  <ul className="space-y-1 text-sm text-zinc-600 dark:text-zinc-400 italic">
                    <li>• <code>skincare creators</code></li>
                    <li>• <code>pilates instructor</code></li>
                    <li>• <code>street photography accounts</code></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-3">If you want content inspiration</h3>
                  <ul className="space-y-1 text-sm text-zinc-600 dark:text-zinc-400 italic">
                    <li>• <code>clean girl makeup inspo</code></li>
                    <li>• <code>minimalist decor reels</code></li>
                    <li>• <code>morning routine aesthetic</code></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-3">If you want competitor research</h3>
                  <ul className="space-y-1 text-sm text-zinc-600 dark:text-zinc-400 italic">
                    <li>• <code>skincare brand review</code></li>
                    <li>• <code>korean skincare brand</code></li>
                    <li>• <code>pilates studio branding</code></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-3">If you want local discovery</h3>
                  <ul className="space-y-1 text-sm text-zinc-600 dark:text-zinc-400 italic">
                    <li>• <code>matcha cafe tokyo</code></li>
                    <li>• <code>vintage watches paris</code></li>
                    <li>• <code>pilates studio singapore</code></li>
                  </ul>
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-lg font-bold mb-3">If you want trend discovery</h3>
                  <ul className="space-y-1 text-sm text-zinc-600 dark:text-zinc-400 italic">
                    <li>• <code>viral skincare reels</code></li>
                    <li>• <code>trending clean girl makeup</code></li>
                    <li>• <code>2026 aesthetic routine</code></li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2>Best Modifiers to Use in Instagram Search Queries</h2>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 not-prose">
                <div className="border border-zinc-200 dark:border-zinc-800 p-4 rounded-xl">
                  <h4 className="font-bold text-sm mb-2">People</h4>
                  <p className="text-xs text-zinc-500">creator, influencer, account, studio</p>
                </div>
                <div className="border border-zinc-200 dark:border-zinc-800 p-4 rounded-xl">
                  <h4 className="font-bold text-sm mb-2">Inspiration</h4>
                  <p className="text-xs text-zinc-500">inspo, aesthetic, routine, ideas</p>
                </div>
                <div className="border border-zinc-200 dark:border-zinc-800 p-4 rounded-xl">
                  <h4 className="font-bold text-sm mb-2">Research</h4>
                  <p className="text-xs text-zinc-500">review, brand, launch, products</p>
                </div>
                <div className="border border-zinc-200 dark:border-zinc-800 p-4 rounded-xl">
                  <h4 className="font-bold text-sm mb-2">Local</h4>
                  <p className="text-xs text-zinc-500">tokyo, london, paris, neighborhood</p>
                </div>
                <div className="border border-zinc-200 dark:border-zinc-800 p-4 rounded-xl">
                  <h4 className="font-bold text-sm mb-2">Recency</h4>
                  <p className="text-xs text-zinc-500">trending, viral, 2026, today</p>
                </div>
              </div>
            </section>

            <div className="bg-orange-600 rounded-2xl p-8 my-16 text-center text-white not-prose shadow-xl shadow-orange-500/20">
              <h2 className="text-2xl font-bold mb-4">Use IGQuery to Generate Better Instagram Search Queries</h2>
              <p className="text-orange-100 mb-8 max-w-2xl mx-auto">
                Stop manually guessing modifiers. Turn any seed keyword into structured, optimized search phrases in seconds.
              </p>
              <Link 
                href="/"
                className="inline-block bg-white text-orange-600 px-8 py-4 rounded-xl font-bold transition-transform hover:scale-105"
              >
                Try the free tool
              </Link>
            </div>

            <section className="mb-12">
              <h2>FAQ</h2>
              <div className="divide-y divide-zinc-200 dark:divide-zinc-800">
                {faqData.mainEntity.map((item, i) => (
                  <div key={i} className="py-6">
                    <h3 className="text-xl font-bold mb-3 mt-0">{item.name}</h3>
                    <p className="text-zinc-600 dark:text-zinc-400 mb-0">{item.acceptedAnswer.text}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="pt-12 border-t border-zinc-200 dark:border-zinc-800">
              <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-6">Internal Links</h2>
              <div className="flex flex-wrap gap-4">
                <Link href="/instagram-search-query-optimization" className="text-indigo-600 dark:text-indigo-400 hover:underline text-sm">
                  Instagram Search Query Optimization
                </Link>
                <span className="text-zinc-300">|</span>
                <Link href="/instagram-search-queries-optimization" className="text-indigo-600 dark:text-indigo-400 hover:underline text-sm">
                  Instagram Search Queries Optimization
                </Link>
                <span className="text-zinc-300">|</span>
                <Link href="/" className="text-indigo-600 dark:text-indigo-400 hover:underline text-sm">
                  Homepage Tool
                </Link>
              </div>
            </section>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
