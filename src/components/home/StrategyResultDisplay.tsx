"use client";

import { useState } from "react";
import { Check, Copy, ChevronRight, Lightbulb, Wrench, Search } from "lucide-react";
import { SearchStrategy } from "@/lib/generator";

export default function StrategyResultDisplay({ strategy }: { strategy: SearchStrategy | null }) {
  const [copiedQuery, setCopiedQuery] = useState<string | null>(null);

  if (!strategy) {
    return (
      <div className="flex h-64 flex-col items-center justify-center rounded-3xl border border-dashed border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900">
        <Search className="h-8 w-8 text-zinc-400 mb-4" />
        <p className="text-zinc-500 font-medium dark:text-zinc-400">
          Enter a topic and generate to see your image search strategy.
        </p>
      </div>
    );
  }

  const handleCopy = (query: string) => {
    navigator.clipboard.writeText(query);
    setCopiedQuery(query);
    setTimeout(() => setCopiedQuery(null), 1500);
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Recommended Technique */}
      <section className="rounded-3xl border border-zinc-100 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
        <h3 className="flex items-center gap-2 text-lg font-bold text-zinc-900 dark:text-zinc-50 mb-4">
          <Lightbulb className="h-5 w-5 text-primary" />
          Recommended Technique
        </h3>
        <div className="rounded-2xl bg-red-50 p-5 dark:bg-red-950/20">
          <h4 className="font-bold text-red-900 dark:text-red-100">{strategy.technique.name}</h4>
          <p className="mt-2 text-sm font-medium text-red-800/80 dark:text-red-200/80 leading-relaxed">
            {strategy.technique.explanation}
          </p>
        </div>
      </section>

      {/* Copy-Paste Queries */}
      <section className="rounded-3xl border border-zinc-100 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
        <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 mb-4">
          Copy-Paste Queries
        </h3>
        <div className="flex flex-wrap gap-3">
          {strategy.queries.map((query, index) => (
            <button
              key={index}
              onClick={() => handleCopy(query)}
              className="group flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 hover:border-primary hover:bg-red-50 transition-colors dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-primary dark:hover:bg-red-950/20"
            >
              <span className="font-mono text-sm text-zinc-700 dark:text-zinc-300 group-hover:text-primary">{query}</span>
              {copiedQuery === query ? (
                <Check className="h-4 w-4 text-green-500" />
              ) : (
                <Copy className="h-4 w-4 text-zinc-400 group-hover:text-primary" />
              )}
            </button>
          ))}
        </div>
      </section>

      {/* Step-by-step Workflow */}
      <section className="rounded-3xl border border-zinc-100 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
        <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 mb-6">
          Step-by-Step Workflow
        </h3>
        <div className="space-y-4 relative before:absolute before:inset-y-0 before:left-3.5 before:w-[2px] before:bg-zinc-100 dark:before:bg-zinc-800">
          {strategy.workflow.map((step, index) => (
            <div key={index} className="relative flex items-start gap-4">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white border-2 border-primary text-xs font-bold text-primary z-10 dark:bg-zinc-950">
                {index + 1}
              </div>
              <p className="pt-0.5 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                {step}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Recommended Tools */}
      <section className="rounded-3xl border border-zinc-100 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
        <h3 className="flex items-center gap-2 text-lg font-bold text-zinc-900 dark:text-zinc-50 mb-4">
          <Wrench className="h-5 w-5 text-zinc-700 dark:text-zinc-300" />
          Recommended Tools
        </h3>
        <div className="grid gap-4 sm:grid-cols-2">
          {strategy.tools.map((tool, index) => (
            <div key={index} className="rounded-2xl border border-zinc-100 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900">
              <h4 className="font-bold text-zinc-900 dark:text-zinc-50 flex items-center gap-1">
                {tool.name} <ChevronRight className="h-4 w-4 text-zinc-400" />
              </h4>
              <p className="mt-1 text-xs font-medium text-zinc-500">Best for: {tool.bestFor}</p>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">{tool.useWhen}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* Platform Tips */}
      {strategy.platformTips && (
        <section className="rounded-3xl bg-zinc-900 p-6 shadow-sm dark:bg-zinc-800">
          <h3 className="text-lg font-bold text-white mb-2">
            Platform Tip
          </h3>
          <p className="text-sm font-medium text-zinc-300 leading-relaxed">
            {strategy.platformTips}
          </p>
        </section>
      )}

    </div>
  );
}
