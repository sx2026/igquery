"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

export interface QueryItem {
  label: string;
  query: string;
  description?: string;
}

interface QueryCopyCardProps {
  queries: QueryItem[];
  title?: string;
}

export default function QueryCopyCard({ queries, title }: QueryCopyCardProps) {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (query: string) => {
    navigator.clipboard.writeText(query);
    setCopied(query);
    setTimeout(() => setCopied(null), 1800);
  };

  return (
    <div className="not-prose my-8">
      {title && (
        <h3 className="mb-5 text-lg font-bold text-zinc-900 dark:text-zinc-50">{title}</h3>
      )}
      <div className="flex flex-col gap-3">
        {queries.map((item, idx) => (
          <div
            key={idx}
            className="group flex items-center gap-4 rounded-2xl border border-zinc-100 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/60 transition-colors hover:border-primary/30"
          >
            <div className="flex-1 min-w-0">
              <p className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-1">
                {item.label}
              </p>
              <code className="block truncate font-mono text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                {item.query}
              </code>
              {item.description && (
                <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-500">{item.description}</p>
              )}
            </div>
            <button
              onClick={() => handleCopy(item.query)}
              aria-label={`Copy query: ${item.query}`}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-500 transition-all hover:border-primary hover:text-primary hover:shadow-sm active:scale-95 dark:border-zinc-700 dark:bg-zinc-800 dark:hover:border-primary dark:hover:text-primary"
            >
              {copied === item.query ? (
                <Check className="h-4 w-4 text-emerald-500" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
