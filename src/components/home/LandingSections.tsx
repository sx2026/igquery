"use client";

import { motion } from "framer-motion";
import { Search, Target, CheckCircle2, MapPin, Hash, Users, Activity } from "lucide-react";

export default function LandingSections() {
  return (
    <div className="space-y-24 py-16">
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
          ].map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative rounded-2xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900/50"
            >
              <span className="text-5xl font-black text-zinc-100 dark:text-zinc-800/50 absolute top-4 right-6 select-none">
                {item.step}
              </span>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-zinc-900 dark:text-zinc-50">{item.title}</h3>
              <p className="text-zinc-600 dark:text-zinc-400">{item.desc}</p>
            </motion.div>
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
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-zinc-200 transition-all hover:shadow-md dark:bg-zinc-900 dark:ring-zinc-800"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-100 text-zinc-600 transition-colors group-hover:bg-indigo-600 group-hover:text-white dark:bg-zinc-800 dark:text-zinc-400">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="mb-1 font-bold text-zinc-900 dark:text-zinc-50">{item.title}</h3>
                <p className="mb-4 text-sm text-zinc-600 dark:text-zinc-400">{item.desc}</p>
                <div className="flex items-center gap-2 rounded-lg bg-zinc-50 p-2.5 text-xs font-mono text-zinc-500 dark:bg-zinc-950 dark:text-zinc-500">
                  <span className="font-bold text-indigo-500 shrink-0">Example Query:</span>
                  <span className="truncate">{item.sample}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
