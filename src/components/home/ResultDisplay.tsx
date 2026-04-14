"use client";

import { motion, useAnimation } from "framer-motion";
import { Copy, Check, Share2, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { trackEvent } from "@/lib/analytics";

interface QueryGroup {
  type: string;
  title: string;
  description: string;
  queries: string[];
}

interface ResultDisplayProps {
  groups: QueryGroup[];
  relatedSearches?: string[];
  onRelatedSearch?: (term: string) => void;
}

export default function ResultDisplay({ groups, relatedSearches, onRelatedSearch }: ResultDisplayProps) {
  const [copiedIndex, setCopiedIndex] = useState<string | null>(null);
  const highlightControls = useAnimation();

  useEffect(() => {
    if (groups && groups.length > 0) {
      highlightControls.start({
        outlineColor: ["rgba(99, 102, 241, 0)", "rgba(99, 102, 241, 0.4)", "rgba(99, 102, 241, 0)"],
        outlineWidth: ["2px", "2px", "2px"],
        outlineStyle: "solid",
        transition: { duration: 1.2, ease: "easeOut" }
      });
    }
  }, [groups, highlightControls]);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(id);
    toast.success("Copied to clipboard!");
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const copyAll = (queries: string[], id: string) => {
    navigator.clipboard.writeText(queries.join("\n"));
    setCopiedIndex(id);
    toast.success("All queries copied!");
    setTimeout(() => setCopiedIndex(null), 2000);
    trackEvent("copy_group_clicked", { group_id: id });
  };

  const handleRelatedClick = (term: string) => {
    trackEvent("related_search_clicked", {
      related_term: term,
      triggered_new_search: true
    });
    if (onRelatedSearch) {
      onRelatedSearch(term);
    }
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 gap-6 md:grid-cols-2 mt-8 px-4 rounded-3xl"
    >
      {groups.map((group, groupIdx) => (
        <motion.div
          key={group.type}
          variants={item}
          animate={highlightControls}
          className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
        >
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50">{group.title}</h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-500">{group.description}</p>
            </div>
            <button
              onClick={() => copyAll(group.queries, `all-${groupIdx}`)}
              className="flex items-center gap-1.5 rounded-lg bg-zinc-100 px-3 py-1.5 text-xs font-semibold text-zinc-600 transition-colors hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
            >
              {copiedIndex === `all-${groupIdx}` ? (
                <Check className="h-3.5 w-3.5 text-green-500" />
              ) : (
                <Share2 className="h-3.5 w-3.5" />
              )}
              Copy All
            </button>
          </div>

          <div className="space-y-2">
            {group.queries.map((query, queryIdx) => (
              <div
                key={queryIdx}
                className="group flex items-center justify-between rounded-xl bg-zinc-50 px-4 py-3 transition-colors hover:bg-zinc-100 dark:bg-zinc-950 dark:hover:bg-zinc-800"
              >
                <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  {query}
                </span>
                <button
                  onClick={() => copyToClipboard(query, `${groupIdx}-${queryIdx}`)}
                  className="rounded-lg p-1.5 text-zinc-400 opacity-0 transition-all hover:bg-white hover:text-indigo-600 group-hover:opacity-100 dark:hover:bg-zinc-900"
                >
                  {copiedIndex === `${groupIdx}-${queryIdx}` ? (
                    <Check className="h-4 w-4 text-green-500" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
              </div>
            ))}
          </div>
        </motion.div>
      ))}

      {/* Explore Related Searches (if available) */}
      {relatedSearches && relatedSearches.length > 0 && (
        <motion.div
          variants={item}
          className="col-span-1 md:col-span-2 mt-4 rounded-2xl border border-indigo-100 bg-indigo-50/50 p-6 dark:border-indigo-500/20 dark:bg-indigo-500/5 text-center sm:text-left"
        >
          <div className="mb-4 flex items-center justify-center sm:justify-start gap-2">
            <Sparkles className="h-5 w-5 text-indigo-500" />
            <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50">Explore Related Searches</h3>
          </div>
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">
            {relatedSearches.map((term, idx) => (
              <button
                key={idx}
                onClick={() => handleRelatedClick(term)}
                className="rounded-full bg-white px-4 py-2 text-sm font-medium text-indigo-600 shadow-sm ring-1 ring-zinc-200 transition-all hover:bg-indigo-600 hover:text-white hover:ring-indigo-600 active:scale-95 dark:bg-zinc-800 dark:text-indigo-300 dark:ring-zinc-700 dark:hover:bg-indigo-500 dark:hover:text-white"
              >
                {term}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
