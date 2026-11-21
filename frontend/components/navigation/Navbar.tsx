"use client";

import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { nav } from "@/lib/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 50));

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // "/#id" works from every page: smooth-scrolls on home, navigates on others.
  const href = (id: string) => `/#${id}`;

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-4 left-0 right-0 z-50 mx-4 flex items-center gap-4 lg:mx-auto lg:max-w-7xl"
      >
        <Link href="/" aria-label="Aryvion home" className="relative z-50 flex shrink-0 items-center">
          <Image
            src="/NavLogo.png"
            alt="Aryvion"
            width={360}
            height={100}
            priority
            className="h-12 sm:h-16 lg:h-20 w-auto object-contain"
          />
        </Link>

        <div className={cn("flex-1 rounded-2xl transition-all duration-500", scrolled ? "glass-nav-scrolled" : "glass-nav")}>
          <div className="flex h-14 sm:h-16 items-center justify-between px-4 sm:px-6 lg:px-8">

            <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
              {nav.map((l) => (
                <Link
                  key={l.href}
                  href={href(l.href)}
                  className="rounded-lg px-4 py-2 text-sm text-white/75 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:block">
              <Link href="/contact" className="inline-flex h-9 items-center rounded-xl px-5 text-sm font-medium btn-primary">
                Start a project
              </Link>
            </div>

            <button
              onClick={() => setOpen((o) => !o)}
              className="lg:hidden relative z-50 p-2 text-white/80 hover:text-white"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              <div className="flex w-6 flex-col gap-1.5">
                <span className={cn("h-px w-full bg-current transition-all duration-300", open && "translate-y-[7px] rotate-45")} />
                <span className={cn("h-px w-full bg-current transition-all duration-300", open && "opacity-0")} />
                <span className={cn("h-px w-full bg-current transition-all duration-300", open && "-translate-y-[7px] -rotate-45")} />
              </div>
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-ink-950/95 backdrop-blur-2xl" onClick={() => setOpen(false)} />
            <div className="relative flex h-full flex-col overflow-y-auto px-6 pb-10 pt-28 no-scrollbar">
              <nav className="flex flex-col gap-1" aria-label="Mobile">
                {nav.map((l) => (
                  <Link
                    key={l.href}
                    href={href(l.href)}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-4 py-4 text-xl font-medium text-white/85 hover:bg-white/5 hover:text-white"
                  >
                    {l.label}
                  </Link>
                ))}
              </nav>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-8 flex h-12 items-center justify-center rounded-xl text-base font-medium btn-primary"
              >
                Start a project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
