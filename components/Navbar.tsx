"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const links = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "py-3 mx-4 mt-3 rounded-2xl backdrop-blur-xl bg-[#0B1F3A]/80 border border-white/10 shadow-2xl"
          : "py-6 bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="w-8 h-8 rounded-full bg-[#1E6FD9] flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 14C2 14 4 8 8 6C12 4 14 2 14 2" stroke="white" strokeWidth="2" strokeLinecap="round" />
              <path d="M2 14C2 14 6 10 8 8C10 6 14 6 14 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
            </svg>
          </span>
          <span className="text-white font-extrabold text-xl tracking-widest uppercase">
            Turf<span className="text-[#1E6FD9]">Pro</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="text-white/70 hover:text-white text-sm font-bold tracking-widest uppercase transition-colors duration-200 relative group"
              >
                {l.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#1E6FD9] group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 bg-[#1E6FD9] hover:bg-[#1558b0] text-white text-sm font-bold tracking-wider uppercase px-5 py-2.5 rounded-full transition-all duration-200 hover:scale-105"
        >
          Free Quote
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={cn("h-0.5 bg-white transition-all duration-300", menuOpen && "rotate-45 translate-y-2")} />
            <span className={cn("h-0.5 bg-white transition-all duration-300", menuOpen && "opacity-0")} />
            <span className={cn("h-0.5 bg-white transition-all duration-300", menuOpen && "-rotate-45 -translate-y-2")} />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden"
          >
            <ul className="px-6 py-4 flex flex-col gap-4 border-t border-white/10 mt-3">
              {links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-white/80 hover:text-white text-sm font-bold tracking-widest uppercase"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  className="inline-flex bg-[#1E6FD9] text-white text-sm font-bold tracking-wider uppercase px-5 py-2.5 rounded-full"
                >
                  Free Quote
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
