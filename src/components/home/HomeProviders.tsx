"use client";

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { Toaster } from "sonner";

export function HomeProviders({ children }: { children: React.ReactNode }) {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "";
  const isValidKey = siteKey && !siteKey.includes("PLACEHOLDER") && siteKey.length > 10;

  if (!isValidKey) {
    return (
      <>
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
      {children}
      <Toaster position="bottom-right" richColors />
    </GoogleReCaptchaProvider>
  );
}
