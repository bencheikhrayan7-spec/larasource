'use client'

import { motion } from 'framer-motion'

export default function CTABand() {
  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-hero-gradient" />
      
      {/* Animated blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-white/10 blur-3xl animate-blob" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-white/10 blur-3xl animate-blob" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-electric-cyan/20 blur-3xl animate-blob" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
            Get vetted factory quotes in 5 hours
          </h2>
          <p className="text-xl text-white/80 mb-10">
            Tell us what you're sourcing and we'll do the rest.
          </p>
          <button className="relative overflow-hidden px-10 py-5 rounded-2xl bg-white text-primary-blue font-bold text-lg shadow-2xl shadow-black/20 hover:scale-[1.04] transition-transform duration-200 group">
            <span className="relative z-10">Get a Quote</span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
