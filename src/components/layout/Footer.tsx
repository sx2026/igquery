"use client";

import Link from "next/link";
import { Rocket } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 py-12 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex flex-col items-center gap-4 md:items-start">
            <Link href="/" className="flex flex-col items-center gap-2 md:items-start group">
              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded bg-indigo-600">
                  <Rocket className="h-4 w-4 text-white" />
                </div>
                <span className="text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                  igquery<span className="text-indigo-600">.com</span>
                </span>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                Instagram Search Query Optimization
              </span>
            </Link>
            <p className="max-w-xs text-center text-sm text-zinc-500 md:text-left dark:text-zinc-500">
              Need Instagram search queries help? Optimize vague topics into usable, high-converting search phrases.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 md:justify-end">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-100">Product</span>
              <Link href="#how-it-works" className="text-sm text-zinc-500 hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400">
                How it works
              </Link>
              <Link href="#examples" className="text-sm text-zinc-500 hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400">
                Examples
              </Link>
              <Link href="#faq" className="text-sm text-zinc-500 hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400">
                FAQ
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-100">Legal</span>
              <Link href="/privacy" className="text-sm text-zinc-500 hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400 transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="text-sm text-zinc-500 hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400 transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-12 flex flex-col items-center justify-between border-t border-zinc-200 pt-8 dark:border-zinc-900 md:flex-row">
          <p className="text-xs text-zinc-500 dark:text-zinc-600">
            &copy; {currentYear} igquery.com. All rights reserved.
          </p>
          <div className="mt-4 flex gap-6 md:mt-0">
            <span className="text-xs text-zinc-400">Not affiliated with Instagram or Meta.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
