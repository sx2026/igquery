"use client";

import { Toaster } from "sonner";

export function HomeProviders({ children }: { children: React.ReactNode }) {
  // Removed GoogleReCaptchaProvider to optimize FCP and LCP (saves ~364KB unused JS).
  // If reCAPTCHA is needed in the future for an API call, wrap ONLY the specific
  // form component (e.g., SearchStrategyGenerator) with the provider lazily, 
  // rather than wrapping it on initial page load.

  return (
    <>
      {children}
      <Toaster position="bottom-right" richColors />
    </>
  );
}
