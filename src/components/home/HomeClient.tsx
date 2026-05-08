"use client";

import { useEffect } from "react";
import SearchStrategyGenerator from "@/components/home/SearchStrategyGenerator";
import { trackEvent } from "@/lib/analytics";

export default function HomeClient() {
  useEffect(() => {
    trackEvent("homepage_view");
  }, []);

  return (
    <div className="container mx-auto pt-16 pb-16">
      <SearchStrategyGenerator />
    </div>
  );
}
