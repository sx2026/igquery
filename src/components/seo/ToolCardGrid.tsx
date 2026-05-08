"use client";

export interface ToolCard {
  icon: string;
  name: string;
  tagline: string;
  strengths: string[];
  weakness: string;
  bestFor: string;
  accentColor?: string;
}

interface ToolCardGridProps {
  tools: ToolCard[];
}

export default function ToolCardGrid({ tools }: ToolCardGridProps) {
  return (
    <div className="not-prose my-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {tools.map((tool) => (
        <div
          key={tool.name}
          className="group flex flex-col gap-3 rounded-2xl border border-zinc-100 bg-white p-5 shadow-sm transition-all hover:shadow-md hover:border-zinc-200 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700"
        >
          <div className="flex items-center gap-3">
            <span className="text-3xl">{tool.icon}</span>
            <div>
              <h3 className="font-bold text-zinc-900 dark:text-zinc-50 leading-tight">{tool.name}</h3>
              <p className="text-xs font-semibold text-primary">{tool.tagline}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {tool.strengths.map((s) => (
              <span
                key={s}
                className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-bold text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400"
              >
                ✓ {s}
              </span>
            ))}
          </div>

          <div className="mt-auto pt-2 border-t border-zinc-100 dark:border-zinc-800">
            <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
              <span className="font-bold text-zinc-700 dark:text-zinc-300">Best for: </span>
              {tool.bestFor}
            </p>
            <p className="mt-1 text-xs text-zinc-400 dark:text-zinc-600">
              <span className="font-bold">Limitation: </span>{tool.weakness}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
