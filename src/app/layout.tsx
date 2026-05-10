import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { DeferredAnalytics } from "@/components/DeferredAnalytics";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.igquery.com"),
  title: {
    default: "Image Search Techniques & Query Generator | IGQuery",
    template: "%s | IGQuery",
  },
  description: "Generate smarter image search queries, reverse image search workflows, and platform-specific search tactics for Google Images, Lens, TinEye, Pinterest, Instagram, Reddit, and more.",
  keywords: ["image search techniques", "reverse image search", "image search query generator", "find original image source", "visual search", "igquery"],
  authors: [{ name: "igquery team" }],
  creator: "igquery",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.igquery.com",
    title: "Image Search Techniques & Query Generator | IGQuery",
    description: "Generate smarter image search queries, reverse image search workflows, and platform-specific search tactics.",
    siteName: "igquery.com",
    images: [
      {
        url: "/brand/og-1200x630.png",
        width: 1200,
        height: 630,
        alt: "igquery.com preview image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Image Search Techniques & Query Generator | IGQuery",
    description: "Smarter image search starts here.",
    creator: "@igquery",
    images: ["/brand/og-1200x630.png"],
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
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white dark:bg-zinc-950">
        <DeferredAnalytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "IGQuery - Image Search Query Generator",
              "applicationCategory": "UtilitiesApplication",
              "operatingSystem": "All",
              "url": "https://www.igquery.com",
              "description": "Generate optimized search queries and workflows for reverse image search and visual discovery."
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
