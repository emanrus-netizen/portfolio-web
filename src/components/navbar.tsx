
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "Projects", href: "/#projects" },
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/#contact" },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-[#C9C1B4] bg-[#F2EDE2]/95 backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-6 md:grid md:grid-cols-[1fr_auto_1fr]"
      >
        {/* LOGO */}
        <Link
          href="/#home"
          aria-label="Emmanuel Rusiana - Home"
          onClick={() => setIsOpen(false)}
          className="group inline-flex w-fit items-center gap-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#AD583B]"
        >
          <span className="font-serif text-[44px] leading-none tracking-[-0.07em] text-[#1B1B19] transition-colors duration-300 group-hover:text-[#AD583B]">
            ER<span className="text-[#AD583B]">.</span>
          </span>

          <span className="hidden border-l border-[#C9C1B4] pl-4 text-[9px] font-semibold uppercase leading-[1.6] tracking-[0.18em] text-[#6B665E] lg:block">
            Emmanuel
            <span className="block">Rusiana</span>
          </span>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative py-2 text-[11px] font-medium uppercase tracking-[0.13em] text-[#514A40] transition-colors duration-200 hover:text-[#AD583B] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#AD583B]"
            >
              {item.label}

              {/* Animated underline */}
              <span
                aria-hidden="true"
                className="absolute bottom-0 left-0 h-px w-0 bg-[#AD583B] transition-all duration-300 group-hover:w-full"
              />
            </Link>
          ))}
        </div>

        {/* DESKTOP CONTACT CTA */}
        <div className="hidden justify-self-end md:flex">
          <a
            href="mailto:mmanrusiana@gmail.com"
            className="group inline-flex items-center gap-3 rounded-sm bg-[#1B1B19] px-5 py-3.5 text-[11px] font-medium uppercase tracking-[0.12em] text-[#F2EDE2] transition-colors duration-300 hover:bg-[#AD583B] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#AD583B]"
          >
            Let's Talk

            <ArrowUpRight
              size={15}
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none"
            />
          </a>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          ref={menuButtonRef}
          type="button"
          onClick={() => setIsOpen((previous) => !previous)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={
            isOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-[#C9C1B4] text-[#1B1B19] transition-colors hover:border-[#AD583B] hover:text-[#AD583B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#AD583B] md:hidden"
        >
          {isOpen ? (
            <X size={21} strokeWidth={1.5} aria-hidden="true" />
          ) : (
            <Menu size={21} strokeWidth={1.5} aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* MOBILE DROPDOWN */}
      {isOpen && (
        <nav
          id="mobile-menu"
          aria-label="Mobile navigation"
          className="absolute inset-x-0 top-full border-b border-[#C9C1B4] bg-[#F2EDE2] shadow-[0_18px_35px_rgba(27,27,25,0.10)] md:hidden"
        >
          <div className="mx-auto max-w-7xl px-6 py-8">
            {/* Menu label */}
            <div className="mb-5 flex items-center justify-between">
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#AD583B]">
                Navigation
              </span>

              <span className="font-mono text-[10px] text-[#6B665E]">
                01 — 05
              </span>
            </div>

            {/* Navigation links */}
            <div className="flex flex-col">
              {navLinks.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="group flex items-center justify-between border-b border-[#C9C1B4] py-4 text-[#1B1B19] transition-colors hover:text-[#AD583B] focus-visible:outline-2 focus-visible:outline-[#AD583B]"
                >
                  <span className="flex items-baseline gap-5">
                    <span className="font-mono text-[10px] text-[#AD583B]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="font-serif text-3xl tracking-tight">
                      {item.label}
                    </span>
                  </span>

                  <ArrowUpRight
                    size={18}
                    aria-hidden="true"
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 motion-reduce:transform-none"
                  />
                </Link>
              ))}
            </div>

            {/* Mobile contact button */}
            <a
              href="mailto:mmanrusiana@gmail.com"
              onClick={() => setIsOpen(false)}
              className="mt-8 flex items-center justify-between rounded-sm bg-[#1B1B19] px-5 py-4 text-sm font-medium text-[#F2EDE2] transition-colors hover:bg-[#AD583B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#AD583B]"
            >
              Get In Touch
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>

            {/* Footer metadata */}
            <p className="mt-6 text-center font-mono text-[10px] uppercase tracking-[0.12em] text-[#6B665E]">
              Portfolio / 2026
            </p>
          </div>
        </nav>
      )}
    </header>
  );
}
