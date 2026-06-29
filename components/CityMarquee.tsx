'use client';

import { MapPin } from 'lucide-react';

const cities = [
  'Yiwu',
  'Shenzhen',
  'Guangzhou',
  'Ningbo',
  'Dongguan',
  'Hangzhou',
];

export default function CityMarquee() {
  const items = [...cities, ...cities];
  return (
    <section
      aria-label="Cities we operate in across China"
      className="relative border-y border-slate-100 bg-surface py-6"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-surface to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-surface to-transparent" />
      <div className="flex w-max animate-marquee items-center gap-12 pr-12">
        {items.map((city, i) => (
          <span
            key={`${city}-${i}`}
            className="flex items-center gap-2 font-display text-lg font-semibold text-deep-navy/70"
          >
            <MapPin className="h-4 w-4 text-accent-blue" />
            {city}
            <span className="ml-12 text-accent-blue/40">·</span>
          </span>
        ))}
      </div>
    </section>
  );
}
