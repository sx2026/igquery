"use client";

import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggleIndex = (idx: number) => {
    setOpenIndices((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <section id="faq" className="container mx-auto max-w-3xl px-4 py-24 sm:px-6">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="space-y-4">
        {FAQS.map((faq, idx) => {
          const isOpen = openIndices.includes(idx);
          return (
            <div 
              key={idx} 
              className="rounded-2xl border border-zinc-200 bg-white overflow-hidden transition-all dark:border-zinc-800 dark:bg-zinc-900/50"
            >
              <button
                onClick={() => toggleIndex(idx)}
                className="flex w-full items-center justify-between p-6 text-left outline-none"
              >
                <span className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">{faq.question}</span>
                {isOpen ? (
                  <Minus className="h-5 w-5 text-indigo-500" />
                ) : (
                  <Plus className="h-5 w-5 text-zinc-400" />
                )}
              </button>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="border-t border-zinc-100 p-6 text-zinc-600 dark:border-zinc-800 dark:text-zinc-400">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
