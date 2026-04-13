"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { name: "How it works", href: "#how-it-works" },
  { name: "Examples", href: "#examples" },
  { name: "FAQ", href: "#faq" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleAnchorClick = useCallback((event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#")) {
      return;
    }

    event.preventDefault();

    const target = document.getElementById(href.slice(1));

    setIsMenuOpen(false);

    if (!target) {
      window.location.hash = href;
      return;
    }

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const headerHeight = document.querySelector("header")?.getBoundingClientRect().height ?? 0;
        const targetTop = target.getBoundingClientRect().top + window.scrollY - headerHeight - 16;

        window.history.pushState(null, "", href);
        window.scrollTo({
          top: Math.max(targetTop, 0),
          behavior: "smooth",
        });
      });
    });
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-90">
          <Image
            src="/brand/logo.webp"
            alt="igquery logo"
            width={32}
            height={32}
            className="h-8 w-8 rounded-lg"
            priority
          />
          <span className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            igquery<span className="text-indigo-600">.com</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-zinc-600 transition-colors hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400"
              onClick={(event) => handleAnchorClick(event, link.href)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#query-builder"
            className="rounded-full bg-indigo-600 px-5 py-2 text-sm font-medium text-white transition-all hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-500/20 active:scale-95"
            onClick={(event) => handleAnchorClick(event, "#query-builder")}
          >
            Get Started
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-md text-zinc-600 md:hidden dark:text-zinc-400"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMenuOpen && (
        <div className="border-b border-zinc-200 bg-white p-4 md:hidden dark:border-zinc-800 dark:bg-zinc-950">
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-base font-medium text-zinc-600 dark:text-zinc-400"
                onClick={(event) => handleAnchorClick(event, link.href)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#query-builder"
              className="mt-2 w-full rounded-md bg-indigo-600 py-3 text-center text-sm font-medium text-white shadow-lg shadow-indigo-500/20"
              onClick={(event) => handleAnchorClick(event, "#query-builder")}
            >
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
