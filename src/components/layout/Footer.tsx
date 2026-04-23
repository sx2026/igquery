import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 py-12 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex flex-col items-center gap-4 md:items-start">
            <Link href="/" className="flex flex-col items-center gap-2 md:items-start group">
              <div className="flex items-center gap-2">
                <Image
                  src="/brand/logo.webp"
                  alt="igquery logo"
                  width={24}
                  height={24}
                  className="h-6 w-6 rounded"
                />
                <span className="text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                  igquery<span className="text-indigo-600">.com</span>
                </span>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                Instagram Search Query Optimization
              </span>
            </Link>
            <p className="max-w-xs text-center text-sm text-zinc-500 md:text-left dark:text-zinc-500">
              Need Instagram search queries help? Optimize vague topics into usable, high-converting search phrases.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 md:justify-end">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-100">Product</span>
              <Link href="/#how-it-works" className="text-sm text-zinc-500 hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400">
                How it works
              </Link>
              <Link href="/#examples" className="text-sm text-zinc-500 hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400">
                Examples
              </Link>
              <Link href="/#faq" className="text-sm text-zinc-500 hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400">
                FAQ
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-100">Resources</span>
              <Link href="/instagram-search-queries-optimization" className="text-sm text-zinc-500 hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400">
                Optimization Guide
              </Link>
              <Link href="/instagram-search-queries-help" className="text-sm text-zinc-500 hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400">
                Help Center
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-100">Legal</span>
              <Link href="/privacy" className="text-sm text-zinc-500 hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400 transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="text-sm text-zinc-500 hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400 transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </div>

        {/* Our Network — product matrix for cross-linking SEO */}
        <div className="flex flex-col items-center justify-center space-y-6 pt-16 pb-8 border-t border-zinc-200 dark:border-zinc-900 mt-12">
          <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
            Our Network
          </p>
          <div className="grid grid-cols-1 gap-6 w-full max-w-4xl md:grid-cols-3">
            {/* Card 1: RecentFollowed */}
            <a
              href="https://www.recentfollowed.net/"
              title="RecentFollowed - Track Who Someone Recently Followed on Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative h-52 w-full overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800"
            >
              <Image
                src="https://s3.us-east-2.amazonaws.com/igquery.com/matrix/recentfollowed.webp"
                alt="RecentFollowed Background"
                fill
                unoptimized
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-300 group-hover:opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 z-10 flex flex-col">
                <span className="text-lg font-bold text-white">RecentFollowed</span>
                <span className="text-xs text-zinc-300">Instagram Follow Tracker</span>
              </div>
            </a>
            {/* Card 2: TTAnonViewer */}
            <a
              href="https://www.ttanonviewer.com/"
              title="TTAnonViewer - Anonymous TikTok Video Viewer"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative h-52 w-full overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800"
            >
              <Image
                src="https://s3.us-east-2.amazonaws.com/igquery.com/matrix/ttanonviewer.webp"
                alt="TTAnonViewer Background"
                fill
                unoptimized
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-300 group-hover:opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 z-10 flex flex-col">
                <span className="text-lg font-bold text-white">TTAnonViewer</span>
                <span className="text-xs text-zinc-300">Anonymous TikTok Viewer</span>
              </div>
            </a>
            {/* Card 3: IGRecent */}
            <a
              href="https://www.igrecent.com/"
              title="IGRecent - Anonymous Instagram Story & Post Viewer"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative h-52 w-full overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800"
            >
              <Image
                src="https://s3.us-east-2.amazonaws.com/igquery.com/matrix/igrecent.webp"
                alt="IGRecent Background"
                fill
                unoptimized
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-300 group-hover:opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 z-10 flex flex-col">
                <span className="text-lg font-bold text-white">IGRecent</span>
                <span className="text-xs text-zinc-300">Anonymous Story Viewer</span>
              </div>
            </a>
          </div>
        </div>
        
        <div className="flex flex-col items-center justify-between border-t border-zinc-200 pt-8 dark:border-zinc-900 md:flex-row">
          <p className="text-xs text-zinc-500 dark:text-zinc-600">
            &copy; {currentYear} igquery.com. All rights reserved.
          </p>
          <div className="mt-4 flex gap-6 md:mt-0">
            <span className="text-xs text-zinc-500 dark:text-zinc-400">Not affiliated with Instagram or Meta.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
