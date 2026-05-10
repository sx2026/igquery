import Image from "next/image";
import Link from "next/link";

const HERO_IMAGE = "https://s3.us-east-2.amazonaws.com/igquery.com/image/igquery_home.webp";

export default function Hero() {
  return (
    <section className="relative px-4 pt-16 pb-0 sm:px-6 lg:pt-24 text-center overflow-hidden">
      <div className="mx-auto max-w-4xl">
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary dark:border-red-900/40 dark:bg-red-950/30">
          ✦ Free · No login required
        </p>
        <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-6xl dark:text-zinc-50 leading-[1.15]">
          <span className="text-primary">Image Search Techniques</span>
          <br className="hidden sm:block" />
          &amp; Query Generator
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg font-medium text-zinc-600 dark:text-zinc-400 sm:text-xl leading-relaxed">
          Find image sources, similar visuals, products, and inspiration — faster. Generate platform-specific queries and step-by-step workflows for Google Lens, TinEye, Pinterest, and more.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <Link
            href="/#generator"
            className="w-full rounded-full bg-[#e60023] px-8 py-3.5 text-center text-base font-bold text-white transition-colors hover:bg-[#c0001d] active:scale-95 sm:w-auto"
          >
            Generate a Search Strategy →
          </Link>
          <Link
            href="/image-search-techniques"
            className="w-full rounded-full border-2 border-zinc-300 bg-white px-8 py-3.5 text-center text-base font-bold text-zinc-700 transition-all hover:border-[#e60023] hover:text-[#e60023] dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-300 sm:w-auto"
          >
            Browse All Techniques
          </Link>
        </div>

        <p className="mt-4 text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest">
          Works for Google Lens · TinEye · Pinterest · Bing · Yandex
        </p>
      </div>

      {/* Hero Illustration */}
      <div className="relative mx-auto mt-12 max-w-5xl">
        <div className="overflow-hidden rounded-t-3xl border border-b-0 border-zinc-200 shadow-2xl dark:border-zinc-800">
          <Image
            src={HERO_IMAGE}
            alt="Image Search Techniques — visual workflow illustration"
            width={1200}
            height={680}
            className="w-full object-cover object-top"
            priority
            fetchPriority="high"
            quality={85}
          />
        </div>
      </div>
    </section>
  );
}

