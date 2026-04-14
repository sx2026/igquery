import { Search, Target, CheckCircle2, MapPin, Hash, Users, Activity, BookOpen } from "lucide-react";
import Link from "next/link";

export default function LandingSections() {
  return (
    <div className="space-y-24 py-16">
      {/* What is Instagram search query optimization */}
      <section id="what-is-optimization" className="container mx-auto px-4 sm:px-6">
        <div className="rounded-3xl bg-zinc-900 px-6 py-12 dark:bg-zinc-900/40 sm:p-16">
          <div className="mx-auto max-w-4xl text-left">
            <h2 className="text-3xl font-bold tracking-tight text-white mb-8 sm:text-4xl text-center">
              Why You Need Instagram Search Query Optimization
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-xl font-bold text-indigo-400 mb-3">The Problem: Broad Queries Are Noisy</h3>
                <p className="text-zinc-300 leading-relaxed">
                  Most people type single, broad words like <strong>"minimalist decor"</strong> or <strong>"skincare"</strong> into Instagram. The result? A flood of generic, viral, and often irrelevant content pushed out by the algorithm.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-indigo-400 mb-3">The Reason: Instagram Needs Intent</h3>
                <p className="text-zinc-300 leading-relaxed">
                  Instagram's native search engine struggles to guess your actual intent. Without specific modifiers, it defaults to mass-appeal posts rather than surfacing the niche experts, local businesses, or specific inspiration you actually want.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-indigo-400 mb-3">The Solution: Strategic Optimization</h3>
                <p className="text-zinc-300 leading-relaxed">
                  <strong>Instagram search query optimization</strong> structures your keywords strategically. By appending specific modifiers, targeting creative formats (like Reels), pinpointing locations, or adding recency signals, you take control of the algorithm.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-indigo-400 mb-3">The Result: Unlocking Better Content</h3>
                <p className="text-zinc-300 leading-relaxed">
                  Optimized queries bypass the noise. You are suddenly able to discover hidden gem creators, perform deep competitor and market research, find hyper-local venues, and uncover fresh aesthetic inspiration instantly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="container mx-auto px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
            How it Works
          </h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400">
            Three simple steps to smarter Instagram search
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {[
            {
              step: "01",
              title: "Start with a topic or niche",
              desc: "Enter any keyword, interest, or industry you want to explore.",
              icon: Search,
            },
            {
              step: "02",
              title: "Choose what you want to find",
              desc: "Select your goal, whether it's creators, inspiration, or competitors.",
              icon: Target,
            },
            {
              step: "03",
              title: "Get optimized queries for Instagram",
              desc: "Receive structured groups of queries built specifically for search success.",
              icon: CheckCircle2,
            },
          ].map((item) => (
            <div
              key={item.title}
              className="relative rounded-2xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900/50"
            >
              <span className="absolute top-4 right-6 select-none text-5xl font-black text-zinc-300 dark:text-zinc-700">
                {item.step}
              </span>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-zinc-900 dark:text-zinc-50">{item.title}</h3>
              <p className="text-zinc-600 dark:text-zinc-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Examples / Use Cases Section */}
      <section id="examples" className="bg-zinc-50 py-24 dark:bg-zinc-900/40">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
              Queries for every use case
            </h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400">
              Stop guessing. Start using queries that actually reveal what you&apos;re looking for.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Creator Discovery",
                desc: "Find the leading voices and rising creators in your niche.",
                icon: Users,
                sample: "vintage watch creator",
              },
              {
                title: "Local Discovery",
                desc: "Discover businesses and local trends in specific cities.",
                icon: MapPin,
                sample: "minimalist café tokyo",
              },
              {
                title: "Content Inspiration",
                desc: "Explore what's trending and how others approach topics.",
                icon: Activity,
                sample: "pilates studio reels inspo",
              },
              {
                title: "Competitor Research",
                desc: "Analyze how similar brands are positioning themselves.",
                icon: Hash,
                sample: "handcrafted jewelry brand",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-zinc-200 transition-all hover:shadow-md dark:bg-zinc-900 dark:ring-zinc-800"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-100 text-zinc-600 transition-colors group-hover:bg-indigo-600 group-hover:text-white dark:bg-zinc-800 dark:text-zinc-400">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="mb-1 font-bold text-zinc-900 dark:text-zinc-50">{item.title}</h3>
                <p className="mb-4 text-sm text-zinc-600 dark:text-zinc-400">{item.desc}</p>
                <div className="flex items-center gap-2 rounded-lg bg-zinc-100 p-2.5 text-xs font-mono text-zinc-700 dark:bg-zinc-950 dark:text-zinc-300">
                  <span className="shrink-0 font-bold text-indigo-700 dark:text-indigo-300">Example Query:</span>
                  <span className="truncate">{item.sample}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learn More SEO Hub Links */}
      <section id="learn-more" className="container mx-auto px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Learn More About Search Optimization
          </h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400">
            Deep dive into the strategies, examples, and methodology of optimizing your Instagram searches.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <Link href="/instagram-search-query-optimization" className="group flex flex-col rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:border-indigo-500 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-indigo-500">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
              <BookOpen className="h-5 w-5" />
            </div>
            <h3 className="mb-2 font-bold text-zinc-900 dark:text-zinc-50 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 text-lg">
              What is Instagram Search Query Optimization?
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-auto">
              Understand the core concepts of why broad searches fail and how optimization instantly improves discovery.
            </p>
          </Link>
          
          <Link href="/instagram-search-queries-optimization" className="group flex flex-col rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:border-indigo-500 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-indigo-500">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
              <BookOpen className="h-5 w-5" />
            </div>
            <h3 className="mb-2 font-bold text-zinc-900 dark:text-zinc-50 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 text-lg">
              Methodology & Strategy
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-auto">
              Learn the framework behind Core, Long-tail, Intent, and Recency queries. Perfect your daily search strategy.
            </p>
          </Link>

          <Link href="/instagram-search-queries-help" className="group flex flex-col rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:border-indigo-500 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-indigo-500">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
              <BookOpen className="h-5 w-5" />
            </div>
            <h3 className="mb-2 font-bold text-zinc-900 dark:text-zinc-50 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 text-lg">
              Practical Examples & Help
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-auto">
              Get hands-on help and copy-paste examples for finding creators, local businesses, or analyzing competitors.
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
}
