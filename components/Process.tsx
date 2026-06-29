'use client'

import { motion } from 'framer-motion'

const STEPS = [
  { n: '01', title: 'Send your brief', text: 'Share product specs, target price, and timeline.' },
  { n: '02', title: 'Sourcing & quotes', text: 'Our China team vets factories, negotiates, and returns quotes — average 5 hours.' },
  { n: '03', title: 'Quality control', text: 'On-site audits and pre-shipment inspection against your golden sample.' },
  { n: '04', title: 'Logistics to you', text: 'We handle freight, customs, and delivery to your warehouse.' },
]

export default function Process() {
  return (
    <section id="process" className="py-24 bg-surface-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-primary-blue text-sm font-medium mb-4">How It Works</span>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-deep-navy leading-tight">
            From your brief to your door in four steps
          </h2>
        </motion.div>

        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-primary-blue via-accent-blue to-electric-cyan" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="relative text-center"
              >
                <div className="relative mx-auto w-24 h-24 rounded-full bg-gradient-to-br from-primary-blue to-electric-cyan flex items-center justify-center mb-6 shadow-xl shadow-blue-500/25 z-10">
                  <span className="text-2xl font-display font-bold text-white">{step.n}</span>
                </div>
                <h3 className="text-xl font-display font-semibold text-deep-navy mb-3">{step.title}</h3>
                <p className="text-text-muted leading-relaxed">{step.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
