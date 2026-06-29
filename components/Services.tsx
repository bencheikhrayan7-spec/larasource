'use client';

import { motion } from 'framer-motion';
import { Factory, ShieldCheck, Truck, Receipt, Radar, Headset } from 'lucide-react';

const cards = [
  {
    title: 'Factory Sourcing',
    text: 'We identify and vet top manufacturers for your product category across China.',
    Icon: Factory,
  },
  {
    title: 'Quality Control',
    text: 'On-site factory audits and pre-shipment inspections so every order matches your spec.',
    Icon: ShieldCheck,
  },
  {
    title: 'Logistics',
    text: 'Sea, air, or rail freight with customs clearance and last-mile delivery, fully tracked.',
    Icon: Truck,
  },
  {
    title: 'Transparent Pricing',
    text: 'No hidden fees. See exactly what you pay for manufacturing, margin, and shipping.',
    Icon: Receipt,
  },
  {
    title: 'Live Tracking',
    text: 'Quotes, invoices, and shipment status in one place, updated in real time.',
    Icon: Radar,
  },
  {
    title: 'Dedicated Support',
    text: 'A real account manager on the ground in China, ready across time zones.',
    Icon: Headset,
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-primary-blue text-sm font-semibold mb-4">
            Our Services
          </span>
          <h2 className="font-heading font-bold text-4xl sm:text-5xl text-text-dark mb-4 leading-tight">
            Everything you need to scale your supply chain
          </h2>
          <p className="text-text-muted text-lg leading-relaxed">
            Stop juggling suppliers, freight forwarders, and inspection agencies. We consolidate your entire sourcing operation.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {cards.map(({ title, text, Icon }) => (
            <motion.div
              key={title}
              variants={item}
              className="card-hover group relative bg-white rounded-3xl p-8 border border-blue-50 shadow-sm shadow-blue-900/5 cursor-default"
            >
              <div className="w-12 h-12 rounded-2xl bg-hero-gradient flex items-center justify-center mb-6 shadow-md shadow-blue-500/20 group-hover:scale-110 transition-transform">
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-text-dark mb-3">{title}</h3>
              <p className="text-text-muted text-[15px] leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
