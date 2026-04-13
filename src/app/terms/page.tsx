import Link from "next/link";
import { ChevronLeft, FileText } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Terms of Service | igquery.com",
  description: "Terms of service for igquery.com - Instagram Search Query Optimizer.",
};

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-grow bg-zinc-50 dark:bg-zinc-950">
        <div className="container mx-auto max-w-3xl px-6 py-16">
          <Link 
            href="/" 
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-indigo-600 transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
            Back to Home
          </Link>

          <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 md:p-12">
            <div className="mb-10 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 dark:bg-indigo-900/20">
                <FileText className="h-6 w-6 text-indigo-600" />
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                Terms of Service
              </h1>
            </div>

            <article className="prose prose-zinc dark:prose-invert max-w-none space-y-6 text-zinc-600 dark:text-zinc-400">
              <p className="text-sm italic">Last updated: April 13, 2026</p>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">1. Acceptance of Terms</h2>
                <p>
                  By accessing and using <strong>igquery.com</strong> ("the Service"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Service.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">2. Use of Service</h2>
                <p>
                  igquery.com provides an AI-powered search query optimizer. You agree to use the Service only for lawful purposes. You are prohibited from:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Automating queries to our backend (scraping or bots).</li>
                  <li>Using the service for illegal or harmful content generation.</li>
                  <li>Attempting to bypass reCAPTCHA or rate-limiting measures.</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">3. Intellectual Property</h2>
                <p>
                  The logo, design, and code of igquery.com are the intellectual property of its owners. Generated search queries are for your use, but the Service itself may not be replicated or redistributed without permission.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">4. Disclaimer of Affiliation</h2>
                <p>
                  <strong>igquery.com is NOT affiliated with, sponsored by, or endorsed by Instagram, Meta, or any of their subsidiaries.</strong> The term "Instagram" is used solely for descriptive purposes to explain the tool's functionality.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">5. Limitation of Liability</h2>
                <p>
                  The Service is provided "as is" without warranties of any kind. We are not liable for any direct, indirect, or incidental damages arising from your use of the generated search queries.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">6. Termination</h2>
                <p>
                  We reserve the right to terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including breach of the Terms.
                </p>
              </section>
            </article>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
