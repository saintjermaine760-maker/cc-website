"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const benefits = [
  {
    title: "Certified Installers",
    desc: "Every crew member is trained, licensed, and backed by industry certifications — zero guesswork.",
  },
  {
    title: "10-Year Warranty",
    desc: "We stand behind every blade of grass. Our warranty covers materials and workmanship, period.",
  },
  {
    title: "Zero Water. Zero Maintenance.",
    desc: "Save up to 70% on water bills. No mowing, no fertilizer, no seasonal care ever again.",
  },
  {
    title: "Fast, Clean Installation",
    desc: "Most projects completed in 1–3 days. We leave your property cleaner than we found it.",
  },
];

export default function WhyUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="why-us" ref={ref} className="bg-[#0B1F3A] py-28 relative overflow-hidden noise-overlay">
      {/* Diagonal stripe texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 40px)",
        }}
      />

      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-end pr-8 pointer-events-none select-none overflow-hidden">
        <span
          className="font-extrabold uppercase text-white leading-none"
          style={{ fontSize: "clamp(80px, 15vw, 280px)", opacity: 0.03, letterSpacing: "0.05em" }}
        >
          WHY US
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left — bold claim */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-[#C8A97E]" />
              <span className="text-[#C8A97E] text-xs font-bold tracking-[0.3em] uppercase">/ Why Choose Us</span>
            </div>

            <h2
              className="font-extrabold text-white leading-[0.9] tracking-tight mb-8"
              style={{ fontSize: "clamp(40px, 6vw, 72px)" }}
            >
              We Don't Just
              <br />
              Install Turf.
              <br />
              <span className="text-[#C8A97E]">We Install</span>
              <br />
              <span className="text-[#1E6FD9]">Confidence.</span>
            </h2>

            <p className="text-white/40 text-base leading-relaxed max-w-sm font-normal">
              Over a decade of installations across residential, commercial, and athletic
              sectors. We've earned our reputation one perfect lawn at a time.
            </p>

            {/* Horizontal rule */}
            <div className="mt-10 w-16 h-px bg-[#1E6FD9]" />

            <div className="mt-8 flex items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#1E6FD9] hover:bg-[#1558b0] text-white font-bold tracking-wider uppercase px-7 py-3.5 rounded-full transition-all duration-300 hover:scale-105 text-sm"
              >
                Start Your Project
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Right — benefits */}
          <div className="flex flex-col gap-6">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, x: 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.12 }}
                className="group flex gap-5 p-6 rounded-xl border border-white/[0.06] hover:border-[#1E6FD9]/40 hover:bg-white/[0.03] transition-all duration-300"
              >
                {/* Number */}
                <div className="flex-shrink-0 w-10 h-10 rounded-full border border-[#1E6FD9]/30 flex items-center justify-center">
                  <span className="text-[#1E6FD9] text-sm font-extrabold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div>
                  <h3 className="text-white font-bold text-base mb-1.5 tracking-tight group-hover:text-[#1E6FD9] transition-colors">
                    {b.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed font-normal">{b.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
