"use client";

const SAMPLES = [
  "vintage watches",
  "minimalist decor",
  "pilates studio",
  "wedding makeup",
  "coffee shops Paris",
  "gaming setup",
  "street photography"
];

interface SampleChipsProps {
  onSelect?: (val: string) => void;
}

export default function SampleChips({ onSelect }: SampleChipsProps) {
  return (
    <div className="mx-auto max-w-2xl px-4 py-4">
      <div className="flex flex-col items-center gap-3">
        <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
          Not sure where to start? Try one of these
        </span>
        <div className="flex flex-wrap justify-center gap-2">
          {SAMPLES.map((sample) => (
            <button
              key={sample}
              onClick={() => onSelect?.(sample)}
              className="rounded-full border border-zinc-200 bg-white px-4 py-1.5 text-sm font-medium text-zinc-700 transition-all hover:border-indigo-500 hover:text-indigo-700 hover:shadow-md hover:shadow-indigo-500/10 active:scale-95 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:border-indigo-400 dark:hover:text-indigo-300"
            >
              {sample}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
