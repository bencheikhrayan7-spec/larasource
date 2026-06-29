'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { CheckCircle2 } from 'lucide-react';

interface SplitSectionProps {
  label: string;
  heading: string;
  text: string;
  bullets: string[];
  image: string;
  imageAlt: string;
  imageRight?: boolean;
  id?: string;
}

export default function SplitSection({
  label,
  heading,
  text,
  bullets,
  image,
  imageAlt,
  imageRight = true,
  id,
}: SplitSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], ['-5%', '5%']);

  const contentOrder = imageRight ? 'lg:order-1' : 'lg:order-2';
  const imageOrder = imageRight ? 'lg:order-2' : 'lg:order-1';

  return (
    <section id={id} ref={ref} className="py-24 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <motion.div
            className={contentOrder}
            initial={{ opacity: 0, x: imageRight ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-primary-blue text-sm font-semibold mb-5">
              {label}
            </span>
            <h2 className="font-heading font-bold text-4xl sm:text-5xl text-text-dark mb-6 leading-tight">
              {heading}
            </h2>
            <p className="text-text-muted text-lg leading-relaxed mb-8">{text}</p>
            <ul className="space-y-3">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent-blue flex-shrink-0 mt-0.5" />
                  <span className="text-[15px] text-text-dark">{b}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Image */}
          <motion.div
            className={`${imageOrder} relative`}
            initial={{ opacity: 0, x: imageRight ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              style={{ y: imageY }}
              className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/15 aspect-[4/3]"
            >
              <Image
                src={image}
                alt={imageAlt}
                fill
                className="object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/10 to-transparent" />
            </motion.div>
            {/* Decoration blob */}
            <div
              className={`absolute -z-10 w-64 h-64 rounded-full bg-blue-100/70 blur-3xl ${
                imageRight ? '-bottom-8 -right-8' : '-bottom-8 -left-8'
              }`}
              aria-hidden
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
