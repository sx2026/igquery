"use client";

import { useState } from "react";
import { generateStrategy, SearchParams, SearchStrategy } from "@/lib/generator";
import StrategyResultDisplay from "./StrategyResultDisplay";
import { Loader2, Sparkles } from "lucide-react";

// Default demo strategy shown to users on first load
const DEMO_STRATEGY: SearchStrategy = {
  technique: {
    name: "Reverse image search + context keyword search",
    explanation: "You are trying to find where an image first appeared. Start with exact or near-duplicate matching via TinEye, then use visible clues (watermarks, text, logos) combined with keyword operators to dig deeper.",
  },
  tools: [
    { name: "TinEye", bestFor: "Source & duplicate history", useWhen: "Sort by 'Oldest' to find the earliest indexed copy of this image." },
    { name: "Google Lens", bestFor: "Find image source", useWhen: "Click 'Find image source' and scan for high-authority domains like news orgs or portfolio sites." },
    { name: "Yandex Images", bestFor: "Obscure sources", useWhen: "If Google and TinEye both fail, Yandex often finds sources from non-English networks." },
  ],
  workflow: [
    "Upload the image to TinEye.com and sort results by 'Oldest'.",
    "Run the same image through Google Lens → click 'Find image source'.",
    "Search any visible watermarks, text, or logos as keywords in Google.",
    "Compare publication dates across results to identify the earliest credible source.",
    "If still stuck, try Yandex Images for international coverage.",
  ],
  queries: [
    '"fashion photo" source',
    '"fashion photo" original image',
    '"fashion photo" photographer',
    '"fashion photo" first appeared',
    'site:500px.com "fashion photo"',
    'site:behance.net "fashion photo"',
  ],
  platformTips: "TinEye is purpose-built for source tracing. Always sort by 'Oldest' — the first result is often the original upload. For images with no TinEye results, try Yandex Images which crawls networks Google misses.",
  termExpansion: {
    core: ["fashion photo", "fashion photo ideas", "fashion photo examples"],
    modifiers: ["original", "photographer", "first upload", "source"],
    platforms: ["TinEye", "Google Lens", "Yandex", "Bing Visual"],
  },
};

export default function SearchStrategyGenerator() {
  const [params, setParams] = useState<SearchParams>({
    seed: "",
    goal: "Any",
    mode: "Any",
    platform: "Any",
    location: "",
    contentType: "Any",
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [strategy, setStrategy] = useState<SearchStrategy | null>(DEMO_STRATEGY);
  const [hasGenerated, setHasGenerated] = useState(false);

  const handleGenerate = async () => {
    if (!params.seed.trim()) return;
    
    setIsLoading(true);
    
    // Simulate slight delay for UI feedback
    await new Promise((resolve) => setTimeout(resolve, 600));
    
    const result = generateStrategy(params);
    setStrategy(result);
    setIsLoading(false);
    setHasGenerated(true);

    // Scroll to results slightly
    setTimeout(() => {
      document.getElementById("results-area")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <div id="generator" className="mx-auto max-w-5xl px-4 sm:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Form */}
        <div className="lg:col-span-5 rounded-[2rem] bg-white p-6 shadow-lg ring-2 ring-primary/15 border border-primary/20 dark:bg-zinc-950 sticky top-24">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-extrabold text-zinc-900 dark:text-zinc-50">
              Search Strategy Generator
            </h2>
          </div>
          <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400 mb-6">
            Get: search strategy · platform tips · copy-paste queries · step-by-step workflow
          </p>
          
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-bold text-zinc-700 dark:text-zinc-300 mb-1.5">
                What are you trying to find? <span className="text-primary">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. find the original source of a fashion photo"
                className="w-full rounded-2xl border-2 border-zinc-200 bg-zinc-50 px-4 py-3 text-sm font-medium focus:border-primary focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:focus:border-primary dark:focus:bg-zinc-950 transition-colors"
                value={params.seed}
                onChange={(e) => setParams({ ...params, seed: e.target.value })}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleGenerate();
                }}
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-zinc-700 dark:text-zinc-300 mb-1.5">
                Search Goal
              </label>
              <select
                className="w-full rounded-2xl border-2 border-zinc-200 bg-zinc-50 px-4 py-3 text-sm font-medium focus:border-primary focus:bg-white focus:outline-none appearance-none dark:border-zinc-800 dark:bg-zinc-900 transition-colors"
                value={params.goal}
                onChange={(e) => setParams({ ...params, goal: e.target.value })}
              >
                <option value="Any">Any</option>
                <option value="Find original image source">Find original image source</option>
                <option value="Find similar images">Find similar images</option>
                <option value="Find product from image">Find product from image</option>
                <option value="Verify an image">Verify an image</option>
                <option value="Find visual inspiration">Find visual inspiration</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-zinc-700 dark:text-zinc-300 mb-1.5">
                  Target Platform
                </label>
                <select
                  className="w-full rounded-2xl border-2 border-zinc-200 bg-zinc-50 px-4 py-3 text-sm font-medium focus:border-primary focus:bg-white focus:outline-none appearance-none dark:border-zinc-800 dark:bg-zinc-900 transition-colors"
                  value={params.platform}
                  onChange={(e) => setParams({ ...params, platform: e.target.value })}
                >
                  <option value="Any">Any Platform</option>
                  <option value="Google Images">Google Images</option>
                  <option value="Google Lens">Google Lens</option>
                  <option value="TinEye">TinEye</option>
                  <option value="Pinterest">Pinterest</option>
                  <option value="Instagram">Instagram</option>
                  <option value="Reddit">Reddit</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-zinc-700 dark:text-zinc-300 mb-1.5">
                  Location (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Tokyo"
                  className="w-full rounded-2xl border-2 border-zinc-200 bg-zinc-50 px-4 py-3 text-sm font-medium focus:border-primary focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 transition-colors"
                  value={params.location}
                  onChange={(e) => setParams({ ...params, location: e.target.value })}
                />
              </div>
            </div>

            <button
              onClick={handleGenerate}
              disabled={!params.seed.trim() || isLoading}
              className="mt-4 w-full flex items-center justify-center rounded-full bg-primary py-4 text-base font-bold text-white transition-all hover:bg-red-600 active:scale-[0.98] disabled:opacity-50 disabled:hover:scale-100 shadow-md shadow-primary/25"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Building Strategy...
                </>
              ) : (
                "Generate Search Strategy"
              )}
            </button>
          </div>
        </div>

        {/* Right Column: Results */}
        <div id="results-area" className="lg:col-span-7 pt-4 lg:pt-0">
          {!hasGenerated && (
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-zinc-400 text-center dark:text-zinc-600">
              ↓ Example output — enter your topic above to generate yours
            </p>
          )}
          <StrategyResultDisplay strategy={strategy} />
        </div>

      </div>
    </div>
  );
}

