import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-zinc-100 bg-white py-12 dark:border-zinc-900 dark:bg-zinc-950">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex flex-col items-center gap-4 md:items-start">
            <Link href="/" className="flex flex-col items-center gap-2 md:items-start group">
              <div className="flex items-center gap-2">
                <Image
                  src="/brand/logo.webp"
                  alt="IGQuery logo"
                  width={24}
                  height={24}
                  className="h-6 w-6 rounded-full"
                />
                <span className="text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                  IGQuery
                </span>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                Image Search Techniques
              </span>
            </Link>
            <p className="max-w-xs text-center text-sm text-zinc-500 md:text-left dark:text-zinc-400">
              A practical toolkit for smarter image searching — from reverse image search to visual discovery, source finding, product search, and advanced search queries.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-12 md:justify-end">
            <div className="flex flex-col gap-4">
              <span className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-100">Product & Tools</span>
              <Link href="/#generator" className="text-sm font-medium text-zinc-600 hover:text-primary dark:text-zinc-400 dark:hover:text-primary">
                Search Generator
              </Link>
              <Link href="/find-product-from-image" className="text-sm font-medium text-zinc-600 hover:text-primary dark:text-zinc-400 dark:hover:text-primary">
                Find Products
              </Link>
              <Link href="/find-similar-images" className="text-sm font-medium text-zinc-600 hover:text-primary dark:text-zinc-400 dark:hover:text-primary">
                Find Similar Images
              </Link>
              <Link href="/find-original-image-source" className="text-sm font-medium text-zinc-600 hover:text-primary dark:text-zinc-400 dark:hover:text-primary">
                Find Sources
              </Link>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-100">Guides</span>
              <Link href="/image-search-techniques" className="text-sm font-medium text-zinc-600 hover:text-primary dark:text-zinc-400 dark:hover:text-primary">
                Image Search Techniques
              </Link>
              <Link href="/reverse-image-search-techniques" className="text-sm font-medium text-zinc-600 hover:text-primary dark:text-zinc-400 dark:hover:text-primary">
                Reverse Image Search
              </Link>
              <Link href="/google-image-search-techniques" className="text-sm font-medium text-zinc-600 hover:text-primary dark:text-zinc-400 dark:hover:text-primary">
                Google Images Tips
              </Link>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-100">Legal</span>
              <Link href="/privacy" className="text-sm font-medium text-zinc-600 hover:text-primary dark:text-zinc-400 dark:hover:text-primary transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="text-sm font-medium text-zinc-600 hover:text-primary dark:text-zinc-400 dark:hover:text-primary transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </div>

        {/* Our Network — product matrix for cross-linking SEO */}
        <div className="flex flex-col items-center justify-center space-y-6 pt-16 pb-8 border-t border-zinc-100 dark:border-zinc-900 mt-12">
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
              className="group relative h-48 w-full overflow-hidden rounded-2xl border border-zinc-100 dark:border-zinc-800"
            >
              <Image
                src="https://s3.us-east-2.amazonaws.com/igquery.com/matrix/recentfollowed.webp"
                alt="RecentFollowed Background"
                fill
                unoptimized
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 group-hover:opacity-70" />
              <div className="absolute bottom-5 left-5 right-5 z-10 flex flex-col gap-1">
                <span className="text-lg font-bold text-white">RecentFollowed</span>
                <span className="text-xs font-medium text-zinc-300">Instagram Follow Tracker</span>
              </div>
            </a>
            {/* Card 2: TTAnonViewer */}
            <a
              href="https://www.ttanonviewer.com/"
              title="TTAnonViewer - Anonymous TikTok Video Viewer"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative h-48 w-full overflow-hidden rounded-2xl border border-zinc-100 dark:border-zinc-800"
            >
              <Image
                src="https://s3.us-east-2.amazonaws.com/igquery.com/matrix/ttanonviewer.webp"
                alt="TTAnonViewer Background"
                fill
                unoptimized
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 group-hover:opacity-70" />
              <div className="absolute bottom-5 left-5 right-5 z-10 flex flex-col gap-1">
                <span className="text-lg font-bold text-white">TTAnonViewer</span>
                <span className="text-xs font-medium text-zinc-300">Anonymous TikTok Viewer</span>
              </div>
            </a>
            {/* Card 3: IGRecent */}
            <a
              href="https://www.igrecent.com/"
              title="IGRecent - Anonymous Instagram Story & Post Viewer"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative h-48 w-full overflow-hidden rounded-2xl border border-zinc-100 dark:border-zinc-800"
            >
              <Image
                src="https://s3.us-east-2.amazonaws.com/igquery.com/matrix/igrecent.webp"
                alt="IGRecent Background"
                fill
                unoptimized
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 group-hover:opacity-70" />
              <div className="absolute bottom-5 left-5 right-5 z-10 flex flex-col gap-1">
                <span className="text-lg font-bold text-white">IGRecent</span>
                <span className="text-xs font-medium text-zinc-300">Anonymous Story Viewer</span>
              </div>
            </a>
          </div>
        </div>
        
        <div className="flex flex-col items-center justify-between border-t border-zinc-100 pt-8 dark:border-zinc-900 md:flex-row">
          <p className="text-xs font-medium text-zinc-500 dark:text-zinc-600">
            &copy; {currentYear} IGQuery.com. All rights reserved.
          </p>
          <div className="mt-4 flex gap-6 md:mt-0 text-center md:text-left max-w-sm">
            <span className="text-xs font-medium text-zinc-400 dark:text-zinc-500">IGQuery is not affiliated with, sponsored by, or endorsed by Google, Pinterest, TinEye, Instagram, Meta, or Microsoft Bing.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
