"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const FirebaseAnalytics = dynamic(
  () => import("@/components/FirebaseAnalytics").then((mod) => mod.FirebaseAnalytics),
  { ssr: false }
);

export function DeferredAnalytics() {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const enableAnalytics = () => setShouldLoad(true);

    if ("requestIdleCallback" in window) {
      const idleId = window.requestIdleCallback(enableAnalytics, { timeout: 2000 });

      return () => window.cancelIdleCallback(idleId);
    }

    const timeoutId = globalThis.setTimeout(enableAnalytics, 1500);

    return () => globalThis.clearTimeout(timeoutId);
  }, []);

  return shouldLoad ? <FirebaseAnalytics /> : null;
}
