'use client'

import { motion } from 'framer-motion'
import { Factory, ShieldCheck, Truck, Receipt, Radar, Headset } from 'lucide-react'

const ICON_MAP: Record<string, React.ReactNode> = {
  factory: <Factory size={28} />,
  'shield-check': <ShieldCheck size={28} />,
  truck: <Truck size={28} />,
  receipt: <Receipt size={28} />,
  radar: <Radar size={28} />,
  headset: <Headset size={28} />,
}

const CARDS = [
  { title: 'Factory Sourcing', text: 'We identify and vet top manufacturers for your product category across China.', icon: 'factory' },
  { title: 'Quality Control', text: 'On-site factory audits and pre-shipment inspections so every order matches your spec.', icon: 'shield-check' },
  { title: 'Logistics', text: 'Sea, air, or rail freight with customs clearance and last-mile delivery, fully tracked.', icon: 'truck' },
  { title: 'Transparent Pricing', text: 'No hidden fees. See exactly what you pay for manufacturing, margin, and shipping.', icon: 'receipt' },
  { title: 'Live Tracking', text: 'Quotes, invoices, and shipment status in one place, updated in real time.', icon: 'radar' },
  { title: 'Dedicated Support', text: 'A real account manager on the ground in China, ready across time zones.', icon: 'headset' },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-primary-blue text-sm font-medium mb-4">Our Services</span>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-deep-navy mb-5 leading-tight">
            Everything you need to scale your supply chain
          </h2>
          <p className="text-lg text-text-muted">
            Stop juggling suppliers, freight forwarders, and inspection agencies. We consolidate your entire sourcing operation.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {CARDS.map((card) => (
            <motion.div
              key={card.title}
              variants={item}
              whileHover={{ y: -6, boxShadow: '0 20px 40px -10px rgba(29,78,216,0.15)' }}
              className="group relative bg-surface-light rounded-2xl p-8 border border-blue-50 cursor-default transition-all duration-300 hover:border-accent-blue/30"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-blue to-accent-blue flex items-center justify-center text-white mb-6 shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300">
                {ICON_MAP[card.icon]}
              </div>
              <h3 className="text-xl font-display font-semibold text-deep-navy mb-3">{card.title}</h3>
              <p className="text-text-muted leading-relaxed">{card.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
