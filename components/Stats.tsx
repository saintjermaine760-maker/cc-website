"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: "500+", label: "Projects Completed", icon: "🏡" },
  { value: "10yr", label: "Warranty Guaranteed", icon: "🛡️" },
  { value: "100%", label: "Eco-Friendly Materials", icon: "🌿" },
  { value: "5★", label: "Average Rating", icon: "⭐" },
];

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-[#0B1F3A] py-16 relative overflow-hidden">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1E6FD9]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="relative flex flex-col items-center text-center py-10 px-6 group"
            >
              {/* Brown divider between items */}
              {i < stats.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-[#6B3F1F]/40" />
              )}

              <span className="text-3xl mb-3">{stat.icon}</span>
              <div className="font-extrabold text-white text-4xl md:text-5xl leading-none tracking-tight mb-2 group-hover:text-[#1E6FD9] transition-colors duration-300">
                {stat.value}
              </div>
              <div className="text-white/40 text-xs font-bold tracking-[0.2em] uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6B3F1F]/40 to-transparent" />
    </section>
  );
}
