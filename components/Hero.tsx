"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0B1F3A]">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80')`,
        }}
      />
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1F3A]/90 via-[#0B1F3A]/70 to-[#0B1F3A]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A]/60 via-transparent to-[#0B1F3A]/30" />

      {/* Watermark word */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span
          className="font-extrabold uppercase text-white leading-none"
          style={{ fontSize: "clamp(120px, 20vw, 320px)", opacity: 0.04, letterSpacing: "0.1em" }}
        >
          TURF
        </span>
      </div>

      {/* Accent line top-left */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
        className="absolute top-1/3 left-0 w-24 h-px bg-[#1E6FD9] origin-left"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-32">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="w-8 h-px bg-[#1E6FD9]" />
            <span className="text-[#1E6FD9] text-xs font-bold tracking-[0.3em] uppercase">
              / Premium Turf Installation
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="font-extrabold text-white leading-[0.95] tracking-tight mb-6"
            style={{ fontSize: "clamp(52px, 8vw, 96px)" }}
          >
            Premium Turf.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E6FD9] to-[#6B9FE4]">
              Flawless Finish.
            </span>
          </motion.h1>

          {/* Subline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-white/60 text-lg md:text-xl font-normal max-w-xl leading-relaxed mb-12"
          >
            Transform your outdoor space with professional-grade artificial grass.
            Built to last, designed to impress.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 bg-[#1E6FD9] hover:bg-[#1558b0] text-white font-bold tracking-wider uppercase px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(30,111,217,0.5)]"
            >
              Get a Free Quote
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#gallery"
              className="inline-flex items-center gap-2 border border-white/30 hover:border-white text-white font-bold tracking-wider uppercase px-8 py-4 rounded-full transition-all duration-300 hover:bg-white/10"
            >
              View Our Work
            </a>
          </motion.div>
        </div>
      </div>

      {/* Stats teaser */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute bottom-32 right-6 md:right-16 hidden md:flex flex-col gap-6"
      >
        {[["500+", "Projects"], ["10yr", "Warranty"], ["5★", "Rated"]].map(([num, label]) => (
          <div key={label} className="text-right">
            <div className="text-white font-extrabold text-2xl leading-none">{num}</div>
            <div className="text-white/40 text-xs font-bold tracking-widest uppercase">{label}</div>
          </div>
        ))}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/30 text-xs font-bold tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-[#1E6FD9] to-transparent"
        />
      </motion.div>
    </section>
  );
}
