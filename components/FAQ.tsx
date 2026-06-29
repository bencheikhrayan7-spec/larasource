'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const ITEMS = [
  { q: 'How fast do I get a quote?', a: 'Our China team returns vetted factory quotes in about 5 hours on average.' },
  { q: 'Do you handle quality control?', a: 'Yes — we run on-site factory audits and pre-shipment inspections in 14 Chinese cities.' },
  { q: 'Can you manage shipping and customs?', a: 'Yes. We coordinate sea, air, or rail freight, customs clearance, and last-mile delivery with full tracking.' },
  { q: "What's your minimum order?", a: "It depends on the product and factory; we negotiate the best possible MOQ for you." },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-primary-blue text-sm font-medium mb-4">FAQ</span>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-deep-navy">
            Frequently asked questions
          </h2>
        </motion.div>

        <div className="space-y-3">
          {ITEMS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="border border-slate-200 rounded-2xl overflow-hidden hover:border-accent-blue/40 transition-colors duration-200"
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="font-display font-semibold text-deep-navy text-lg">{item.q}</span>
                <span className="ml-4 flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-primary-blue">
                  {open === i ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <p className="px-6 pb-5 text-text-muted leading-relaxed">{item.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
