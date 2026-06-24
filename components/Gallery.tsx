"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const projects = [
  { id: 1, seed: "10", label: "Backyard Oasis", location: "Beverly Hills, CA", size: "tall" },
  { id: 2, seed: "20", label: "Rooftop Terrace", location: "Miami, FL", size: "short" },
  { id: 3, seed: "30", label: "Sports Complex", location: "Dallas, TX", size: "short" },
  { id: 4, seed: "40", label: "Pet Paradise", location: "Austin, TX", size: "tall" },
  { id: 5, seed: "50", label: "Hotel Courtyard", location: "Phoenix, AZ", size: "short" },
  { id: 6, seed: "60", label: "Front Yard Refresh", location: "San Diego, CA", size: "short" },
];

export default function Gallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="gallery" ref={ref} className="bg-[#F5F2EE] py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-px bg-[#1E6FD9]" />
            <span className="text-[#1E6FD9] text-xs font-bold tracking-[0.3em] uppercase">/ Our Portfolio</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2
              className="font-extrabold text-[#0B1F3A] leading-tight tracking-tight"
              style={{ fontSize: "clamp(36px, 5vw, 56px)" }}
            >
              Projects That
              <br />
              <span className="text-[#6B3F1F]">Speak for Themselves.</span>
            </h2>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-[#1E6FD9] font-bold text-sm tracking-wider uppercase border-b border-[#1E6FD9] pb-0.5 hover:gap-3 transition-all duration-200"
            >
              View All Projects
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </motion.div>

        {/* Masonry grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.05 + i * 0.1 }}
              className="break-inside-avoid group relative overflow-hidden rounded-2xl"
              style={{ height: p.size === "tall" ? "420px" : "280px" }}
            >
              <Image
                src={`https://picsum.photos/seed/${p.seed}/800/600`}
                alt={p.label}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-[#6B3F1F]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col items-center justify-center gap-2">
                <div className="w-8 h-px bg-white/50" />
                <p className="text-white font-bold text-lg tracking-tight">{p.label}</p>
                <p className="text-white/60 text-xs font-bold tracking-widest uppercase">{p.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
