"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";
import { trackEvent } from "@/lib/analytics";

const SearchStrategyGenerator = dynamic(
  () => import("@/components/home/SearchStrategyGenerator"),
  { ssr: false }
);

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
