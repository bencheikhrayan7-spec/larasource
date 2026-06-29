'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';
import { Reveal } from './ui/Reveal';

const items = [
  {
    q: 'How fast do I get a quote?',
    a: 'Our China team returns vetted factory quotes in about 5 hours on average.',
  },
  {
    q: 'Do you handle quality control?',
    a: 'Yes — we run on-site factory audits and pre-shipment inspections in 14 Chinese cities.',
  },
  {
    q: 'Can you manage shipping and customs?',
    a: 'Yes. We coordinate sea, air, or rail freight, customs clearance, and last-mile delivery with full tracking.',
  },
  {
    q: "What's your minimum order?",
    a: 'It depends on the product and factory; we negotiate the best possible MOQ for you.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-24 sm:py-28">
      <div className="container-px flex flex-col items-center">
        <SectionHeading eyebrow="FAQ" heading="Frequently asked questions" />

        <Reveal className="mt-12 w-full max-w-3xl">
          <ul className="flex flex-col gap-4">
            {items.map((item, i) => {
              const isOpen = open === i;
              return (
                <li
                  key={item.q}
                  className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${
                    isOpen
                      ? 'border-accent-blue/40 bg-surface shadow-soft'
                      : 'border-slate-100 bg-white'
                  }`}
                >
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${i}`}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    >
                      <span className="font-display text-lg font-semibold text-text-dark">
                        {item.q}
                      </span>
                      <motion.span
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.25 }}
                        className={`flex h-8 w-8 flex-none items-center justify-center rounded-full ${
                          isOpen
                            ? 'bg-hero-gradient text-white'
                            : 'bg-surface text-primary-blue'
                        }`}
                      >
                        <Plus className="h-4 w-4" />
                      </motion.span>
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-panel-${i}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-5 text-base leading-relaxed text-text-muted">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
