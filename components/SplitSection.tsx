'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Check } from 'lucide-react';
import { Reveal } from './ui/Reveal';

export interface SplitProps {
  id?: string;
  layout: 'image-left' | 'image-right';
  label: string;
  heading: string;
  text: string;
  bullets: string[];
  image: string;
  alt: string;
}

export default function SplitSection({
  id,
  layout,
  label,
  heading,
  text,
  bullets,
  image,
  alt,
}: SplitProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  const imageFirst = layout === 'image-left';

  return (
    <section id={id} className="bg-white py-20 sm:py-24">
      <div className="container-px grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Image */}
        <Reveal
          className={`order-1 ${imageFirst ? 'lg:order-1' : 'lg:order-2'}`}
        >
          <div
            ref={ref}
            className="relative overflow-hidden rounded-3xl shadow-glow ring-1 ring-slate-200/60"
          >
            <motion.div style={{ y }} className="relative h-[26rem] w-full sm:h-[30rem]">
              <Image
                src={image}
                alt={alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="scale-110 object-cover"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/25 to-transparent" />
          </div>
        </Reveal>

        {/* Copy */}
        <div
          className={`order-2 ${imageFirst ? 'lg:order-2' : 'lg:order-1'}`}
        >
          <Reveal>
            <span className="eyebrow">{label}</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight text-text-dark sm:text-4xl">
              {heading}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-lg leading-relaxed text-text-muted">{text}</p>
          </Reveal>
          <Reveal delay={0.15}>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-hero-gradient text-white">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-base text-text-dark">{bullet}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
