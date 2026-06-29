'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
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
    a: "It depends on the product and factory; we negotiate the best possible MOQ for you.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-primary-blue text-sm font-semibold mb-4">
            FAQ
          </span>
          <h2 className="font-heading font-bold text-4xl sm:text-5xl text-text-dark leading-tight">
            Frequently asked questions
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map(({ q, a }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.08, duration: 0.55 }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left bg-surface-light hover:bg-blue-50 rounded-2xl px-6 py-5 flex items-center justify-between gap-4 transition-colors group"
                aria-expanded={open === i}
              >
                <span className="font-semibold text-text-dark text-[16px] group-hover:text-primary-blue transition-colors">
                  {q}
                </span>
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-white border border-blue-100 flex items-center justify-center text-primary-blue shadow-sm">
                  {open === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-5 text-text-muted text-[15px] leading-relaxed border-x border-b border-blue-50 rounded-b-2xl bg-white">
                      {a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
