"use client";

import Link from "next/link";
import { NAV_LINKS } from "@/constants/navigation";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="relative z-50 w-full bg-[#1a1a1a]/80 backdrop-blur-md">
      <div className="mainContainer flex h-16 items-center justify-between">
        {/* Left: Logo + Desktop nav */}
        <div className="flex items-center gap-14">
          <Link href="/" className="block" aria-label="CodeHarem home">
            <Image
              src="/logo.webp"
              className="w-32 h-auto"
              alt="CodeHarem"
              priority
              height={100}
              width={600}
            />
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-gray-300 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Right: Create + Hamburger */}
        <div className="flex items-center gap-3">
          <Link
            href="/create"
            className="group hidden md:flex relative items-center gap-1.5 overflow-hidden rounded-md bg-gradient-to-r from-dark-accent to-accent px-4 py-2 text-sm font-medium text-white transition-all hover:shadow-[0_0_20px_rgba(66,152,114,0.3)]"
          >
            <span className="absolute inset-0 bg-white/0 transition-all duration-300 group-hover:bg-white/10" />
            <svg
              className="relative h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            <span className="relative font-light tracking-wide inline">
              Create
            </span>
          </Link>

          {/* Hamburger button - mobile only */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative z-50 flex h-9 w-9 flex-col items-center justify-center gap-[5px] lg:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span
              className={`block h-[2px] w-5 bg-white transition-all duration-300 ${
                menuOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-5 bg-white transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-5 bg-white transition-all duration-300 ${
                menuOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 top-16 z-50 h-[calc(100dvh-4rem)] bg-[#1a1a1a] transition-all duration-300 lg:hidden ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <nav className="mainContainer flex h-full flex-col gap-2 pt-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-lg py-3 text-lg font-medium transition-colors ${
                pathname === link.href
                  ? "bg-accent/10 px-3 text-accent"
                  : "text-gray-300 hover:bg-[#2a2a2a] hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <div className="my-4 h-px bg-[#333]" />

          <Link
            href="/create"
            className="group relative flex items-center justify-center gap-2 overflow-hidden rounded-md bg-gradient-to-r from-dark-accent to-accent px-4 py-3.5 text-base font-semibold text-white transition-all hover:shadow-[0_0_24px_rgba(66,152,114,0.3)]"
          >
            <span className="absolute inset-0 bg-white/0 transition-all duration-300 group-hover:bg-white/10" />
            <svg
              className="relative h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            <span className="relative font-light tracking-wide">
              Create Component
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
