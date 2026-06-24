"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" ref={ref} className="relative overflow-hidden">
      <div className="bg-[#1E6FD9] py-24 relative">
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span
            className="font-extrabold uppercase text-white leading-none"
            style={{ fontSize: "clamp(80px, 18vw, 300px)", opacity: 0.06, letterSpacing: "0.1em" }}
          >
            GREEN
          </span>
        </div>

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-8 h-px bg-white/40" />
              <span className="text-white/60 text-xs font-bold tracking-[0.3em] uppercase">/ Get Started</span>
              <span className="w-8 h-px bg-white/40" />
            </div>

            <h2
              className="font-extrabold text-white leading-tight tracking-tight mb-6"
              style={{ fontSize: "clamp(36px, 5.5vw, 64px)" }}
            >
              Ready to Go Green?
              <br />
              Let's Build Your Dream Lawn.
            </h2>

            <p className="text-white/70 text-lg max-w-xl mx-auto leading-relaxed mb-10 font-normal">
              Get your free, no-obligation quote today. Our team will visit your property,
              assess the space, and deliver a custom plan — all within 48 hours.
            </p>

            <div className="flex flex-wrap gap-4 items-center justify-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                href="mailto:hello@turfpro.com"
                className="inline-flex items-center gap-2 bg-white hover:bg-[#F5F2EE] text-[#0B1F3A] font-bold tracking-wider uppercase px-10 py-4 rounded-full transition-all duration-200 shadow-lg"
              >
                Get Your Free Quote
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
              <a
                href="tel:+15551234567"
                className="inline-flex items-center gap-2 text-white font-bold tracking-wider uppercase border border-white/30 hover:border-white px-8 py-4 rounded-full transition-all duration-200 hover:bg-white/10"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (555) 123-4567
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
