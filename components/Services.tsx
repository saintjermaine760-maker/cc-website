"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const services = [
  {
    title: "Residential Turf",
    description:
      "Lush, low-maintenance lawns for your home. Perfect for front yards, backyards, and rooftop terraces.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    detail: "HOA approved · Kid-safe · UV resistant",
  },
  {
    title: "Commercial Turf",
    description:
      "Impress clients and employees with premium commercial-grade installations for offices, hotels, and retail.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    detail: "Durable · Custom specs · Fast install",
  },
  {
    title: "Sports Fields",
    description:
      "FIFA & NFL standard turf systems for training facilities, schools, and multi-use athletic fields.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v18M3 12h18" />
      </svg>
    ),
    detail: "Shock-absorbing · FIFA certified · Drainage",
  },
  {
    title: "Pet-Friendly Lawns",
    description:
      "Antimicrobial, odor-resistant turf that's safe for pets and easy to clean — no muddy paws indoors.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    ),
    detail: "Non-toxic · Odor control · Soft blade",
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" ref={ref} className="bg-[#F5F2EE] py-28 relative overflow-hidden">
      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span
          className="font-extrabold uppercase text-[#0B1F3A] leading-none"
          style={{ fontSize: "clamp(80px, 14vw, 220px)", opacity: 0.04, letterSpacing: "0.1em" }}
        >
          SERVICES
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-px bg-[#1E6FD9]" />
            <span className="text-[#1E6FD9] text-xs font-bold tracking-[0.3em] uppercase">/ Our Services</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="font-extrabold text-[#0B1F3A] leading-tight tracking-tight" style={{ fontSize: "clamp(36px, 5vw, 56px)" }}>
              Everything You Need,<br />
              <span className="text-[#1E6FD9]">All in One Place.</span>
            </h2>
            <p className="text-[#0B1F3A]/50 max-w-xs text-base leading-relaxed font-normal">
              From residential backyards to professional sports fields — we handle every scale, every surface.
            </p>
          </div>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
              className="group bg-white rounded-2xl p-8 relative overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(30,111,217,0.15)]"
              style={{ borderTop: "4px solid #6B3F1F" }}
            >
              {/* Hover blue top border override */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#1E6FD9] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              <div className="text-[#1E6FD9] mb-6 group-hover:scale-110 transition-transform duration-300 inline-block">
                {service.icon}
              </div>

              <h3 className="font-bold text-[#0B1F3A] text-xl mb-3 tracking-tight">
                {service.title}
              </h3>
              <p className="text-[#0B1F3A]/55 text-sm leading-relaxed mb-6 font-normal">
                {service.description}
              </p>

              <div className="text-[#6B3F1F] text-xs font-bold tracking-wider uppercase border-t border-[#6B3F1F]/20 pt-4">
                {service.detail}
              </div>

              {/* Arrow */}
              <div className="absolute bottom-8 right-8 text-[#1E6FD9] opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
