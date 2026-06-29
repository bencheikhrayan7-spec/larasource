'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: 'We tried two other sourcing agents first. Night and day — clear communication, on-time and on-spec every time.',
    name: 'Ops Lead',
    company: 'DTC brand',
    initials: 'OL',
  },
  {
    quote: 'Their factory audit caught a compliance gap our previous supplier hid for two years. Worth every penny.',
    name: 'Founder',
    company: 'Home goods',
    initials: 'FO',
  },
  {
    quote: 'Idea to first 10k units in 90 days. They genuinely care about your launch.',
    name: 'CEO',
    company: 'Gadgets brand',
    initials: 'CE',
  },
];

const avatarColors = [
  'from-blue-500 to-cyan-400',
  'from-indigo-500 to-blue-400',
  'from-sky-500 to-indigo-400',
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
};

export default function Testimonials() {
  return (
    <section id="why-us" className="py-24 bg-surface-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-primary-blue text-sm font-semibold mb-4">
            Client Stories
          </span>
          <h2 className="font-heading font-bold text-4xl sm:text-5xl text-text-dark leading-tight">
            Trusted by growing e-commerce brands
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map(({ quote, name, company, initials }, i) => (
            <motion.div
              key={i}
              variants={item}
              className="card-hover bg-white rounded-3xl p-8 border border-blue-50 shadow-sm shadow-blue-900/5 flex flex-col"
            >
              <Quote className="w-8 h-8 text-accent-blue mb-6 opacity-60" />
              <p className="text-text-dark text-[15px] leading-relaxed flex-1 mb-8">&ldquo;{quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${avatarColors[i]} flex items-center justify-center text-white text-xs font-bold`}>
                  {initials}
                </div>
                <div>
                  <div className="font-semibold text-text-dark text-sm">{name}</div>
                  <div className="text-text-muted text-xs">{company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
