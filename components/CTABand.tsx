'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function CTABand() {
  const navClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-hero-gradient" />

      {/* Animated blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
        <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-white/10 animate-blob blur-2xl" />
        <div className="absolute -bottom-20 right-10 w-96 h-96 rounded-full bg-cyan-300/20 animate-blob-slow blur-2xl" style={{ animationDelay: '4s' }} />
      </div>

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
        aria-hidden
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-tight">
            Get vetted factory quotes in 5 hours
          </h2>
          <p className="text-white/80 text-lg sm:text-xl mb-10 max-w-xl mx-auto">
            Tell us what you&apos;re sourcing and we&apos;ll do the rest.
          </p>
          <a
            href="mailto:hello@larasource.com"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white text-primary-blue font-bold text-lg shadow-2xl shadow-blue-900/30 hover:scale-105 hover:shadow-3xl transition-all"
          >
            Get a Quote
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
