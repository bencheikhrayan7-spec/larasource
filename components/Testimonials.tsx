'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const ITEMS = [
  { quote: 'We tried two other sourcing agents first. Night and day — clear communication, on-time and on-spec every time.', name: 'Ops Lead', company: 'DTC brand' },
  { quote: 'Their factory audit caught a compliance gap our previous supplier hid for two years. Worth every penny.', name: 'Founder', company: 'Home goods' },
  { quote: 'Idea to first 10k units in 90 days. They genuinely care about your launch.', name: 'CEO', company: 'Gadgets brand' },
]

export default function Testimonials() {
  return (
    <section id="why-us" className="py-24 bg-surface-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-primary-blue text-sm font-medium mb-4">Testimonials</span>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-deep-navy">
            Trusted by growing e-commerce brands
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ITEMS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{ y: -6, boxShadow: '0 20px 40px -10px rgba(29,78,216,0.12)' }}
              className="bg-white rounded-2xl p-8 border border-blue-50 transition-all duration-300"
            >
              <Quote size={32} className="text-accent-blue mb-4 opacity-50" />
              <p className="text-text-dark leading-relaxed mb-6 text-lg">"{item.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-blue to-electric-cyan flex items-center justify-center text-white font-bold text-sm">
                  {item.name[0]}
                </div>
                <div>
                  <div className="font-semibold text-deep-navy">{item.name}</div>
                  <div className="text-sm text-text-muted">{item.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
