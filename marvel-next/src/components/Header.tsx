"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/gallery", label: "Gallery" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

export default function Header({ solid = false }: { solid?: boolean }) {
  const [scrolled, setScrolled] = useState(solid);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (solid) return;
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [solid]);

  const isSolidState = solid || scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] border-b transition-all duration-300 ${
        isSolidState
          ? "bg-navy-deep/95 border-line shadow-[0_8px_30px_rgba(0,0,0,0.25)] backdrop-blur-md"
          : "bg-gradient-to-b from-navy-deep/60 to-transparent border-transparent"
      }`}
    >
      <div
        className={`max-w-[1240px] mx-auto flex items-center justify-between gap-6 px-7 transition-[padding] duration-300 ${
          isSolidState ? "py-2.5" : "py-4"
        }`}
      >
        <Link href="/" className="flex shrink-0 items-center">
          <span className="flex items-center rounded-lg bg-white px-3 py-1.5 shadow-[0_4px_16px_rgba(212,175,55,0.15)]">
            <Image
              src="/logo.png"
              alt="Marvel Fountains logo"
              height={73}
              width={249}
              className="w-auto"
              style={{ height: "38px" }}
              priority
            />
          </span>
        </Link>

        <nav>
          <ul
            className={`flex gap-9 max-md:fixed max-md:top-0 max-md:right-0 max-md:bottom-0 max-md:h-screen max-md:w-[270px] max-md:flex-col max-md:justify-center max-md:gap-6 max-md:bg-navy-deep max-md:px-6 max-md:shadow-[-10px_0_40px_rgba(0,0,0,0.35)] max-md:transition-transform max-md:duration-300 ${
              open ? "max-md:translate-x-0" : "max-md:translate-x-full"
            }`}
          >
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`nav-link font-medium text-[16px] pb-1 transition-colors max-md:text-ink hover:text-cyan ${
                    isSolidState ? "text-ink" : "text-white"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          href="/contact"
          className="hidden sm:inline-flex items-center rounded-full bg-cyan px-6 py-2.5 font-semibold text-xs tracking-widest uppercase text-navy-deep whitespace-nowrap shadow-[0_6px_18px_rgba(63,197,240,0.35)] transition-all hover:shadow-[0_8px_24px_rgba(63,197,240,0.5)] hover:-translate-y-0.5 active:translate-y-0 active:shadow-[0_2px_8px_rgba(63,197,240,0.4)]"
        >
          Get Quote
        </Link>

        <button
          className={`hidden max-md:flex items-center justify-center cursor-pointer z-10 ${isSolidState ? "text-ink" : "text-white"}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} className="text-ink" /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}
