import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://igquery.com"),
  title: {
    default: "Instagram Search Query Optimization | igquery.com",
    template: "%s | igquery.com",
  },
  description: "Free tool for Instagram search queries optimization. Generate smarter Instagram search queries for inspiration, creator discovery, and competitor research.",
  keywords: ["instagram search", "instagram search queries optimization", "instagram search query optimization", "instagram search queries help", "igquery"],
  authors: [{ name: "igquery team" }],
  creator: "igquery",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://igquery.com",
    title: "Instagram Search Query Optimization | igquery.com",
    description: "Free tool for Instagram search queries optimization. Generate smarter queries instantly.",
    siteName: "igquery.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Instagram Search Query Optimization | igquery.com",
    description: "Smarter Instagram search starts here.",
    creator: "@igquery",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "igquery",
    "operatingSystem": "Web",
    "applicationCategory": "BusinessApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "Tool for Instagram search queries optimization. Turns vague ideas into smart search queries."
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white dark:bg-zinc-950">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
