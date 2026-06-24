"use client";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "Houzz",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0L0 6.5v11L12 24l12-6.5v-11L12 0zm0 2.24l9.5 5.13v9.26L12 21.76 2.5 16.63V7.37L12 2.24z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0B1F3A] pt-16 pb-8 relative overflow-hidden">
      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1E6FD9]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo & tagline */}
          <div>
            <a href="#" className="flex items-center gap-2 mb-4">
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
            <p className="text-white/30 text-sm leading-relaxed max-w-xs font-normal">
              Premium artificial turf installation for residential, commercial, and athletic spaces.
              Built to last. Designed to impress.
            </p>
            <div className="flex gap-3 mt-6">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/30 hover:text-[#1E6FD9] hover:border-[#1E6FD9]/40 transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <div>
            <p className="text-white/20 text-xs font-bold tracking-[0.3em] uppercase mb-5">Navigation</p>
            <ul className="flex flex-col gap-3">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-white/40 hover:text-white text-sm font-normal transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-4 h-px bg-[#1E6FD9] opacity-0 group-hover:opacity-100 transition-all duration-200" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white/20 text-xs font-bold tracking-[0.3em] uppercase mb-5">Contact</p>
            <ul className="flex flex-col gap-4">
              {[
                { label: "hello@turfpro.com", icon: "✉" },
                { label: "(555) 123-4567", icon: "📞" },
                { label: "Los Angeles, CA", icon: "📍" },
              ].map((c) => (
                <li key={c.label} className="flex items-center gap-3">
                  <span className="text-[#1E6FD9] text-sm">{c.icon}</span>
                  <span className="text-white/40 text-sm font-normal">{c.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs font-normal tracking-wide">
            © 2025 TurfPro. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service"].map((l) => (
              <a key={l} href="#" className="text-white/20 hover:text-white/50 text-xs font-normal transition-colors">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
