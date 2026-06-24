"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const testimonials = [
  {
    quote:
      "TurfPro completely transformed our backyard. The turf looks indistinguishable from real grass and it's been two years — still looks brand new. Best investment we've made in our home.",
    name: "Sarah & Mike Thompson",
    location: "Beverly Hills, CA",
    rating: 5,
    tag: "Residential",
  },
  {
    quote:
      "We had TurfPro install turf across three of our hotel courtyards. The project was completed on schedule, the crew was professional, and our guests constantly comment on how beautiful the grounds look.",
    name: "James Hartwell",
    location: "GM, The Meridian Hotel",
    rating: 5,
    tag: "Commercial",
  },
  {
    quote:
      "Our dogs absolutely love it and the odor control is incredible. Finally a lawn we don't have to maintain and that our pups can enjoy year-round. The installation team was fast and super clean.",
    name: "Priya Nair",
    location: "Austin, TX",
    rating: 5,
    tag: "Pet-Friendly",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-[#C8A97E]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="testimonials" ref={ref} className="bg-white py-28 relative overflow-hidden">
      {/* Watermark */}
      <div className="absolute bottom-0 right-0 pointer-events-none select-none overflow-hidden">
        <span
          className="font-extrabold uppercase text-[#0B1F3A] leading-none"
          style={{ fontSize: "clamp(80px, 14vw, 200px)", opacity: 0.03, letterSpacing: "0.1em" }}
        >
          LOVE
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="w-8 h-px bg-[#1E6FD9]" />
            <span className="text-[#1E6FD9] text-xs font-bold tracking-[0.3em] uppercase">/ Testimonials</span>
            <span className="w-8 h-px bg-[#1E6FD9]" />
          </div>
          <h2
            className="font-extrabold text-[#0B1F3A] leading-tight tracking-tight"
            style={{ fontSize: "clamp(36px, 5vw, 56px)" }}
          >
            Trusted by{" "}
            <span className="text-[#1E6FD9]">Homeowners</span>
            <br />
            & Businesses Alike.
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.15 }}
              className="group relative bg-white border border-[#F5F2EE] rounded-2xl p-8 hover:shadow-[0_20px_60px_rgba(11,31,58,0.08)] hover:-translate-y-1 transition-all duration-300"
            >
              {/* Tag */}
              <div className="inline-flex mb-6">
                <span className="text-[#6B3F1F] text-xs font-bold tracking-widest uppercase border border-[#6B3F1F]/30 rounded-full px-3 py-1">
                  {t.tag}
                </span>
              </div>

              {/* Quote mark */}
              <div className="text-[#1E6FD9] font-extrabold leading-none mb-4" style={{ fontSize: "80px", lineHeight: "0.8", opacity: 0.15 }}>
                "
              </div>

              <Stars count={t.rating} />

              <p className="text-[#0B1F3A]/70 text-[15px] leading-relaxed mt-5 mb-8 font-normal italic">
                "{t.quote}"
              </p>

              {/* Divider */}
              <div className="w-8 h-px bg-[#1E6FD9]/30 mb-5" />

              <div>
                <p className="text-[#0B1F3A] font-bold text-sm tracking-tight">{t.name}</p>
                <p className="text-[#0B1F3A]/40 text-xs font-bold tracking-widest uppercase mt-0.5">{t.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
