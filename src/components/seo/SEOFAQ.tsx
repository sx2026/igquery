"use client";

import React from "react";
import { Plus, Minus } from "lucide-react";

export interface FaqItem {
  question: string;
  answer: string | React.ReactNode;
}

interface SEOFAQProps {
  faqs: FaqItem[];
}

export default function SEOFAQ({ faqs }: SEOFAQProps) {
  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="mt-16 border-t border-zinc-100 pt-12 dark:border-zinc-800">
      <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-8">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <details
            key={idx}
            className="group rounded-2xl border border-zinc-200 bg-white overflow-hidden transition-all open:shadow-sm dark:border-zinc-800 dark:bg-zinc-900/50"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between p-5 text-left outline-none [&::-webkit-details-marker]:hidden">
              <span className="text-base font-bold text-zinc-900 dark:text-zinc-50">{faq.question}</span>
              <span className="relative ml-4 h-5 w-5 shrink-0">
                <Plus className="absolute inset-0 h-5 w-5 text-zinc-400 transition-opacity group-open:opacity-0" />
                <Minus className="absolute inset-0 h-5 w-5 text-primary opacity-0 transition-opacity group-open:opacity-100" />
              </span>
            </summary>
            <div className="border-t border-zinc-100 p-5 pt-2 text-sm font-medium text-zinc-600 dark:border-zinc-800 dark:text-zinc-400 leading-relaxed">
              {faq.answer}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
