'use client';

import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const cities = ['Yiwu', 'Shenzhen', 'Guangzhou', 'Ningbo', 'Dongguan', 'Hangzhou'];

function MarqueeRow({ reversed = false }: { reversed?: boolean }) {
  const doubled = [...cities, ...cities, ...cities, ...cities];
  return (
    <div className={`flex ${reversed ? 'animate-marquee-reverse' : 'animate-marquee'} whitespace-nowrap`}>
      {doubled.map((city, i) => (
        <span key={i} className="flex items-center gap-2 mx-8 text-text-muted font-medium text-base">
          <MapPin className="w-4 h-4 text-accent-blue flex-shrink-0" />
          {city}
        </span>
      ))}
    </div>
  );
}

export default function CityMarquee() {
  return (
    <section className="bg-surface-light py-10 overflow-hidden border-y border-blue-100">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-3 text-center text-xs font-semibold uppercase tracking-widest text-text-muted"
      >
        Our China coverage
      </motion.div>
      <div className="flex overflow-hidden select-none">
        <MarqueeRow />
      </div>
    </section>
  );
}
