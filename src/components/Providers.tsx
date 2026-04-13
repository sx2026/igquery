"use client";

import { Suspense } from "react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { Toaster } from "sonner";
import { FirebaseAnalytics } from "@/components/FirebaseAnalytics";

export function Providers({ children }: { children: React.ReactNode }) {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "";

  const analytics = (
    <Suspense fallback={null}>
      <FirebaseAnalytics />
    </Suspense>
  );
  
  // Robustness check: Ensure siteKey is present and not a placeholder before rendering the provider.
  // Invalid keys can cause Google reCAPTCHA scripts to throw "charCodeAt" TypeError on load/refresh.
  const isValidKey = siteKey && !siteKey.includes("PLACEHOLDER") && siteKey.length > 10;

  if (!isValidKey) {
    return (
      <>
        {analytics}
        {children}
        <Toaster position="bottom-right" richColors />
      </>
    );
  }

  return (
    <GoogleReCaptchaProvider 
      reCaptchaKey={siteKey}
      scriptProps={{
        async: true,
        defer: true,
        appendTo: "head",
        nonce: undefined,
      }}
    >
      {analytics}
      {children}
      <Toaster position="bottom-right" richColors />
    </GoogleReCaptchaProvider>
  );
}
