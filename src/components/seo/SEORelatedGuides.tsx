import Link from "next/link";
import { BookOpen } from "lucide-react";

const ALL_GUIDES = [
  { title: "Image Search Techniques", href: "/image-search-techniques" },
  { title: "Reverse Image Search", href: "/reverse-image-search-techniques" },
  { title: "Google Images Tips", href: "/google-image-search-techniques" },
  { title: "Find Similar Images", href: "/find-similar-images" },
  { title: "Find Product from Image", href: "/find-product-from-image" },
  { title: "Find Original Image Source", href: "/find-original-image-source" },
];

export default function SEORelatedGuides({ currentPath }: { currentPath: string }) {
  const relatedGuides = ALL_GUIDES.filter((guide) => guide.href !== currentPath);

  return (
    <section className="mt-16 rounded-3xl bg-zinc-50 p-8 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800">
      <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-6 flex items-center gap-2">
        <BookOpen className="h-6 w-6 text-primary" />
        Related Image Search Guides
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {relatedGuides.map((guide) => (
          <li key={guide.href}>
            <Link 
              href={guide.href}
              className="group flex items-center justify-between rounded-xl border border-zinc-200 bg-white p-4 transition-all hover:border-primary hover:shadow-sm dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-primary"
            >
              <span className="font-bold text-zinc-700 dark:text-zinc-300 group-hover:text-primary transition-colors">
                {guide.title}
              </span>
              <span className="text-zinc-400 group-hover:text-primary transition-colors">→</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
