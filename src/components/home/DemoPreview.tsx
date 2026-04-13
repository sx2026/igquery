import { Search, Target } from "lucide-react";

export default function DemoPreview() {
  const coreQueries = ["vintage watches", "vintage watch style", "vintage watch reels"];
  const longTailQueries = ["affordable vintage watches", "vintage watches Tokyo", "vintage watches for men"];

  return (
    <div className="mx-auto mt-12 max-w-xl overflow-hidden rounded-2xl border border-zinc-200 bg-white/50 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/30">
      <div className="bg-zinc-100/50 px-4 py-3 dark:bg-zinc-800/50">
        <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-zinc-500">
          <span>Demo Result Preview</span>
          <div className="text-right">
            <span className="text-indigo-500 block">Static Example</span>
            <span className="block text-[9px] font-medium lowercase text-zinc-500">See what a generated result looks like</span>
          </div>
        </div>
      </div>
      
      <div className="p-5 space-y-6">
        <div className="flex flex-wrap gap-4 text-xs">
          <div className="flex items-center gap-1.5 rounded-full bg-zinc-100 px-2.5 py-1 dark:bg-zinc-800">
            <Search className="h-3 w-3 text-zinc-400" />
            <span className="text-zinc-600 dark:text-zinc-300">Input: <span className="font-semibold text-zinc-900 dark:text-zinc-100">vintage watches</span></span>
          </div>
          <div className="flex items-center gap-1.5 rounded-full bg-zinc-100 px-2.5 py-1 dark:bg-zinc-800">
            <Target className="h-3 w-3 text-zinc-400" />
            <span className="text-zinc-600 dark:text-zinc-300">Goal: <span className="font-semibold text-zinc-900 dark:text-zinc-100">Creator Discovery</span></span>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-zinc-500">Core Queries</p>
            <div className="flex flex-wrap gap-2">
              {coreQueries.map((q) => (
                <span key={q} className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-400">
                  {q}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-zinc-500">Long-tail Queries</p>
            <div className="flex flex-wrap gap-2">
              {longTailQueries.map((q) => (
                <span key={q} className="rounded-full border border-indigo-100 bg-indigo-50/50 px-3 py-1 text-xs font-medium text-indigo-600 dark:border-indigo-900/30 dark:bg-indigo-900/20 dark:text-indigo-400">
                  {q}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
