'use client';

import { motion } from 'framer-motion';
import { FileText, Search, ShieldCheck, Truck } from 'lucide-react';

const steps = [
  { n: '01', title: 'Send your brief', text: 'Share product specs, target price, and timeline.', Icon: FileText },
  { n: '02', title: 'Sourcing & quotes', text: 'Our China team vets factories, negotiates, and returns quotes — average 5 hours.', Icon: Search },
  { n: '03', title: 'Quality control', text: 'On-site audits and pre-shipment inspection against your golden sample.', Icon: ShieldCheck },
  { n: '04', title: 'Logistics to you', text: 'We handle freight, customs, and delivery to your warehouse.', Icon: Truck },
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-surface-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-primary-blue text-sm font-semibold mb-4">
            How It Works
          </span>
          <h2 className="font-heading font-bold text-4xl sm:text-5xl text-text-dark mb-4 leading-tight">
            From your brief to your door in four steps
          </h2>
        </motion.div>

        <div className="relative">
          {/* Connector line — desktop */}
          <div className="hidden lg:block absolute top-[52px] left-[calc(12.5%+24px)] right-[calc(12.5%+24px)] h-0.5 bg-gradient-to-r from-primary-blue to-electric-cyan z-0" aria-hidden />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map(({ n, title, text, Icon }, i) => (
              <motion.div
                key={n}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * 0.15, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-hero-gradient flex items-center justify-center shadow-lg shadow-blue-500/30">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white border-2 border-primary-blue text-primary-blue text-[10px] font-bold flex items-center justify-center">
                    {n}
                  </span>
                </div>
                <h3 className="font-heading font-semibold text-xl text-text-dark mb-2">{title}</h3>
                <p className="text-text-muted text-[15px] leading-relaxed">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
