"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { name: "Techniques", href: "/image-search-techniques" },
  { name: "Reverse Search", href: "/reverse-image-search-techniques" },
  { name: "Google Images", href: "/google-image-search-techniques" },
  { name: "FAQ", href: "/#faq" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleAnchorClick = useCallback((event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("/#")) {
      return;
    }
    
    // If we are already on home page, scroll smoothly
    if (window.location.pathname === "/") {
      event.preventDefault();
      const targetId = href.split("#")[1];
      const target = document.getElementById(targetId);
      setIsMenuOpen(false);

      if (!target) {
        window.location.hash = targetId;
        return;
      }

      requestAnimationFrame(() => {
        const headerHeight = document.querySelector("header")?.getBoundingClientRect().height ?? 0;
        const targetTop = target.getBoundingClientRect().top + window.scrollY - headerHeight - 16;

        window.history.pushState(null, "", href);
        window.scrollTo({
          top: Math.max(targetTop, 0),
          behavior: "smooth",
        });
      });
    }
  }, []);

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
              onClick={(event) => handleAnchorClick(event, link.href)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/#generator"
            className="rounded-full bg-primary px-6 py-2.5 text-sm font-bold text-white transition-transform hover:scale-105 active:scale-95"
            onClick={(event) => handleAnchorClick(event, "/#generator")}
          >
            Generate Query
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-full text-zinc-600 md:hidden hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMenuOpen && (
        <div className="border-b border-zinc-100 bg-white p-4 md:hidden dark:border-zinc-800 dark:bg-zinc-950">
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-lg font-bold text-zinc-900 dark:text-zinc-100"
                onClick={(event) => {
                  handleAnchorClick(event, link.href);
                  setIsMenuOpen(false);
                }}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/#generator"
              className="mt-2 w-full rounded-full bg-primary py-3 text-center text-lg font-bold text-white"
              onClick={(event) => {
                handleAnchorClick(event, "/#generator");
                setIsMenuOpen(false);
              }}
            >
              Generate Query
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
