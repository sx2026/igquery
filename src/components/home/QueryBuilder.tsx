"use client";

import { Search, MapPin, Target, Layout, Rocket, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useCallback, useEffect } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { toast } from "sonner";

const GOAL_OPTIONS = [
  "Any",
  "Content Inspiration",
  "Creator Discovery",
  "Competitor Research",
  "Local Discovery",
  "Buyer Intent",
];

const TYPE_OPTIONS = ["Any", "Reels", "Posts", "Accounts", "Places"];

interface QueryGroup {
  type: string;
  title: string;
  description: string;
  queries: string[];
}

interface QueryBuilderProps {
  onResult: (data: { groups: QueryGroup[] }) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  initialSeed?: string;
}

export default function QueryBuilder({ onResult, loading, setLoading, initialSeed }: QueryBuilderProps) {
  const [formData, setFormData] = useState({
    seed: "",
    goal: "Any",
    location: "",
    type: "Any",
  });

  const { executeRecaptcha } = useGoogleReCaptcha();

  useEffect(() => {
    if (initialSeed) {
      setFormData((prev) => ({ ...prev, seed: initialSeed }));
    }
  }, [initialSeed]);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!executeRecaptcha) {
      toast.error("reCAPTCHA not yet available.");
      return;
    }

    setLoading(true);

    try {
      const token = await executeRecaptcha("optimize_queries");
      
      const response = await fetch("/api/optimize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, recaptchaToken: token }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to optimize queries");
      }

      onResult(data);
      toast.success("Queries optimized successfully!");
      
      // Smooth scroll to results
      setTimeout(() => {
        document.getElementById("results")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);

    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : "An unknown error occurred";
      toast.error(message);
    } finally {
      setLoading(false);
    }
  }, [executeRecaptcha, formData, onResult, setLoading]);

  return (
    <section id="query-builder" className="scroll-mt-24 px-4 py-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mx-auto max-w-2xl rounded-2xl border border-zinc-200 bg-white p-6 shadow-xl shadow-zinc-200/50 dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-none"
      >
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Seed Keyword */}
        <div className="space-y-2">
            <label htmlFor="seed" className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
              <Search className="h-4 w-4 text-indigo-500" />
              Seed Keyword / Topic
            </label>
            <input
              id="seed"
              type="text"
              value={formData.seed}
              onChange={(e) => setFormData({ ...formData, seed: e.target.value })}
              placeholder="Enter a topic, niche, or keyword"
              className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-5 py-4.5 text-lg text-zinc-900 placeholder:text-zinc-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all dark:border-zinc-700 dark:bg-zinc-800/50 dark:text-zinc-50"
              required
            />
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {/* Search Goal */}
            <div className="space-y-2">
              <label htmlFor="goal" className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                <Target className="h-4 w-4 text-indigo-500" />
                Search Goal
              </label>
              <select
                id="goal"
                value={formData.goal}
                onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-zinc-900 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all dark:border-zinc-700 dark:bg-zinc-800/50 dark:text-zinc-50 appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20stroke%3D%22%236b7280%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.5%22%20d%3D%22m6%208%204%204%204-4%22%2F%3E%3C%2Fsvg%3E')] bg-[position:right_1rem_center] bg-[length:1.25rem_1.25rem] bg-no-repeat"
              >
                {GOAL_OPTIONS.map((goal) => (
                  <option key={goal} value={goal}>{goal}</option>
                ))}
              </select>
            </div>

            {/* Location */}
            <div className="space-y-2">
              <label htmlFor="location" className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                <MapPin className="h-4 w-4 text-indigo-500" />
                Location (Optional)
              </label>
              <input
                id="location"
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                placeholder="e.g., Tokyo"
                className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-zinc-900 placeholder:text-zinc-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all dark:border-zinc-700 dark:bg-zinc-800/50 dark:text-zinc-50"
              />
            </div>

            {/* Content Type */}
            <div className="space-y-2 sm:col-span-2">
              <label htmlFor="type" className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                <Layout className="h-4 w-4 text-indigo-500" />
                Content Type
              </label>
              <select
                id="type"
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-zinc-900 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all dark:border-zinc-700 dark:bg-zinc-800/50 dark:text-zinc-50 appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20stroke%3D%22%236b7280%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.5%22%20d%3D%22m6%208%204%204%204-4%22%2F%3E%3C%2Fsvg%3E')] bg-[position:right_1rem_center] bg-[length:1.25rem_1.25rem] bg-no-repeat"
              >
                {TYPE_OPTIONS.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-indigo-600 px-8 py-5 text-xl font-bold text-white shadow-xl shadow-indigo-600/20 transition-all hover:bg-indigo-700 hover:shadow-indigo-600/40 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                <span>Optimizing...</span>
              </>
            ) : (
              <>
                <span className="relative z-10">Optimize Queries</span>
                <Rocket className="relative z-10 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </>
            )}
            
            {/* Gloss Effect */}
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer" />
          </button>
        </form>
      </motion.div>
    </section>
  );
}
