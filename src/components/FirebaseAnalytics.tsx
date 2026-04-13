"use client";

import { useEffect, useRef } from "react";
import { logEvent } from "firebase/analytics";
import { usePathname, useSearchParams } from "next/navigation";
import { getFirebaseAnalytics } from "@/lib/firebase";

export function FirebaseAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const hasTrackedInitialPage = useRef(false);
  const search = searchParams.toString();

  useEffect(() => {
    void getFirebaseAnalytics();
  }, []);

  useEffect(() => {
    if (!pathname) {
      return;
    }

    if (!hasTrackedInitialPage.current) {
      hasTrackedInitialPage.current = true;
      return;
    }

    void getFirebaseAnalytics().then((analytics) => {
      if (!analytics) {
        return;
      }

      logEvent(analytics, "page_view", {
        page_path: pathname,
        page_location: window.location.href,
        page_title: document.title,
        page_query_string: search || undefined,
      });
    });
  }, [pathname, search]);

  return null;
}
