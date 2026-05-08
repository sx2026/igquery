import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

interface SEOHubPageLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
  heroImage?: string;
  heroAlt?: string;
}

export default function SEOHubPageLayout({ title, description, children, heroImage, heroAlt }: SEOHubPageLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 dark:bg-zinc-950">
      <Header />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-zinc-500 hover:text-primary dark:text-zinc-400 dark:hover:text-primary mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back to Generator
          </Link>
          
          <div className="mb-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl mb-4">
              {title}
            </h1>
            <p className="text-lg font-medium text-zinc-600 dark:text-zinc-400">
              {description}
            </p>
          </div>

          {heroImage && (
            <div className="mb-12 overflow-hidden rounded-3xl border border-zinc-100 dark:border-zinc-800 shadow-sm">
              <Image
                src={heroImage}
                alt={heroAlt ?? title}
                width={1200}
                height={630}
                className="w-full object-cover"
                unoptimized
                priority
              />
            </div>
          )}
          
          <div className="prose prose-zinc dark:prose-invert max-w-none prose-headings:font-bold prose-a:text-primary hover:prose-a:text-primary/80 prose-img:rounded-2xl">
            {children}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
