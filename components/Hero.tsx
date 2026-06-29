'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import CountUp from './CountUp'

const STATS = [
  { value: 150, suffix: '+', label: 'Vetted factories' },
  { value: 200, prefix: '$', suffix: 'M+', label: 'Sourced from China' },
  { value: 14, suffix: '', label: 'QC inspection cities' },
  { value: 5, suffix: 'h', label: 'Avg quote response' },
]

const CARDS = [
  { icon: '⚡', text: 'Quote ready in 5h', color: 'bg-white' },
  { icon: '✅', text: 'QC passed', color: 'bg-emerald-50' },
  { icon: '🚚', text: 'Shipped — arriving in 3 days', color: 'bg-blue-50' },
]

const words = ['Source from China.', 'Quotes in 5 hours.']

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-white pt-24 pb-16"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-blue-100/60 blur-3xl animate-blob" />
        <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] rounded-full bg-cyan-100/50 blur-3xl animate-blob" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full bg-indigo-100/40 blur-3xl animate-blob" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left column */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-primary-blue text-sm font-medium mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-accent-blue animate-pulse" />
            End-to-end China sourcing
          </motion.div>

          <div className="mb-6">
            {words.map((word, wi) => (
              <div key={wi} className="overflow-hidden">
                <motion.h1
                  initial={{ y: 80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 + wi * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold leading-tight text-deep-navy"
                >
                  {word}
                </motion.h1>
              </div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.6 }}
            className="text-lg text-text-muted max-w-lg leading-relaxed mb-10"
          >
            LaraSource connects your brand directly with vetted factories, runs on-site quality control, and ships to your warehouse — so you skip months of research and costly mistakes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="relative overflow-hidden px-8 py-4 rounded-xl bg-primary-blue text-white font-semibold text-base shadow-lg shadow-blue-500/30 hover:scale-[1.03] transition-transform duration-200 group"
            >
              <span className="relative z-10">Get Started</span>
              <span className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:left-full transition-all duration-500 ease-in-out" />
            </button>
            <button className="px-8 py-4 rounded-xl border-2 border-slate-200 text-text-dark font-semibold text-base hover:border-primary-blue hover:text-primary-blue transition-colors duration-200">
              Talk to Sales
            </button>
          </motion.div>
        </div>

        {/* Right column — image + floating cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
          className="relative"
        >
          <motion.div style={{ y: imgY }} className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/20">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/20 to-transparent z-10 rounded-3xl" />
            <Image
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80"
              alt="Modern warehouse logistics"
              width={1200}
              height={800}
              className="w-full h-[480px] lg:h-[540px] object-cover"
              priority
            />
          </motion.div>

          {/* Floating UI cards */}
          {CARDS.map((card, i) => (
            <motion.div
              key={i}
              className={`absolute flex items-center gap-3 px-4 py-3 rounded-2xl ${card.color} shadow-xl border border-white/80 backdrop-blur-sm z-20`}
              style={{
                top: i === 0 ? '10%' : i === 1 ? '50%' : 'auto',
                bottom: i === 2 ? '10%' : 'auto',
                left: i === 1 ? '-5%' : 'auto',
                right: i === 0 ? '-2%' : i === 2 ? '-2%' : 'auto',
                animation: `float 4s ease-in-out infinite ${i * 1.2}s`,
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 + i * 0.15, duration: 0.5 }}
            >
              <span className="text-xl">{card.icon}</span>
              <span className="text-sm font-semibold text-text-dark whitespace-nowrap">{card.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Stats row */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.7 }}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {STATS.map((stat, i) => (
          <div
            key={i}
            className="bg-surface-light rounded-2xl px-6 py-6 border border-blue-50 hover:shadow-lg hover:shadow-blue-500/10 transition-shadow duration-300 text-center"
          >
            <div className="text-4xl font-display font-bold text-primary-blue mb-1">
              {stat.prefix && <span>{stat.prefix}</span>}
              <CountUp to={stat.value} />
              <span>{stat.suffix}</span>
            </div>
            <div className="text-sm text-text-muted font-medium">{stat.label}</div>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
