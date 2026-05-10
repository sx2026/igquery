import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

const NAV_LINKS = [
  { name: "Techniques", href: "/image-search-techniques" },
  { name: "Reverse Search", href: "/reverse-image-search-techniques" },
  { name: "Google Images", href: "/google-image-search-techniques" },
  { name: "FAQ", href: "/#faq" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-100 bg-white/90 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/90">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-90">
          <Image
            src="/brand/logo.webp"
            alt="IGQuery logo"
            width={32}
            height={32}
            className="h-8 w-8 rounded-full"
            priority
          />
          <span className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            IGQuery
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-bold text-zinc-700 transition-colors hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/#generator"
            className="rounded-full bg-primary px-6 py-2.5 text-sm font-bold text-white transition-transform hover:scale-105 active:scale-95"
          >
            Generate Query
          </Link>
        </nav>

        {/* Mobile Menu (Client Component) */}
        <MobileMenu />
      </div>
    </header>
  );
}
