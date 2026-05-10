"use client";

import Link from "next/link";
import { useCallback, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { name: "Techniques", href: "/image-search-techniques" },
  { name: "Reverse Search", href: "/reverse-image-search-techniques" },
  { name: "Google Images", href: "/google-image-search-techniques" },
  { name: "FAQ", href: "/#faq" },
];

export default function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleAnchorClick = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      if (!href.startsWith("/#")) return;

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
          const headerHeight =
            document.querySelector("header")?.getBoundingClientRect().height ?? 0;
          const targetTop =
            target.getBoundingClientRect().top + window.scrollY - headerHeight - 16;

          window.history.pushState(null, "", href);
          window.scrollTo({ top: Math.max(targetTop, 0), behavior: "smooth" });
        });
      }
    },
    []
  );

  return (
    <>
      {/* Mobile Menu Toggle */}
      <button
        className="flex h-10 w-10 items-center justify-center rounded-full text-zinc-600 md:hidden hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile Navigation Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full border-b border-zinc-100 bg-white p-4 md:hidden dark:border-zinc-800 dark:bg-zinc-950">
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
    </>
  );
}
