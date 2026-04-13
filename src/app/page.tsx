"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import QueryBuilder from "@/components/home/QueryBuilder";
import SampleChips from "@/components/home/SampleChips";
import LandingSections from "@/components/home/LandingSections";
import FAQ from "@/components/home/FAQ";
import ResultDisplay from "@/components/home/ResultDisplay";
import DemoPreview from "@/components/home/DemoPreview";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<null | { groups: any[] }>(null);
  const [selectedSeed, setSelectedSeed] = useState("");

  const handleResult = (data: { groups: any[] }) => {
    setResults(data);
  };

  const handleSampleSelect = (seed: string) => {
    setSelectedSeed(seed);
    // Optional: Auto-submit or just fill
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        
        <div className="container mx-auto max-w-4xl pb-16">
          <QueryBuilder 
            onResult={handleResult} 
            loading={loading} 
            setLoading={setLoading}
            initialSeed={selectedSeed}
          />
          <DemoPreview />
          <SampleChips onSelect={handleSampleSelect} />
          
          {results && (
            <div id="results" className="pt-12">
              <div className="mb-8 text-center px-4">
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">Your Optimized Queries</h2>
                <p className="text-zinc-500 dark:text-zinc-400">Copy and use these in the Instagram search bar.</p>
              </div>
              <ResultDisplay groups={results.groups} />
            </div>
          )}
        </div>

        <LandingSections />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
}
