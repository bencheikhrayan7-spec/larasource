'use client';

import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import CountUp from './CountUp';
import { ArrowRight, CheckCircle2, Clock, Package } from 'lucide-react';

const stats = [
  { value: 150, suffix: '+', label: 'Vetted factories' },
  { value: 200, prefix: '$', suffix: 'M+', label: 'Sourced from China' },
  { value: 14, suffix: '', label: 'QC inspection cities' },
  { value: 5, suffix: 'h', label: 'Avg quote response' },
];

const floatingCards = [
  { icon: Clock, text: 'Quote ready in 5h', color: 'text-accent-blue', bg: 'bg-blue-50', delay: 0 },
  { icon: CheckCircle2, text: 'QC passed ✓', color: 'text-green-600', bg: 'bg-green-50', delay: 0.3 },
  { icon: Package, text: 'Shipped — arriving in 3 days', color: 'text-purple-600', bg: 'bg-purple-50', delay: 0.6 },
];

const words = ['Source from China.', 'Quotes in 5 hours.'];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const navClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-white"
    >
      {/* Animated blob background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-100/60 animate-blob rounded-full mix-blend-multiply filter blur-3xl opacity-70" />
        <div className="absolute top-20 -right-20 w-[400px] h-[400px] bg-cyan-100/60 animate-blob-slow rounded-full mix-blend-multiply filter blur-3xl opacity-60" style={{ animationDelay: '3s' }} />
        <div className="absolute bottom-10 left-1/2 w-[350px] h-[350px] bg-indigo-100/50 animate-blob rounded-full mix-blend-multiply filter blur-3xl opacity-50" style={{ animationDelay: '6s' }} />
      </div>

      {/* Dot grid texture */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #cbd5e1 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
        aria-hidden
      />

      <motion.div style={{ opacity: heroOpacity }} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — copy */}
          <div>
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-primary-blue text-sm font-semibold mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-accent-blue animate-pulse" />
              End-to-end China sourcing
            </motion.div>

            {/* Headline — word by word reveal */}
            <h1 className="font-heading font-bold text-5xl sm:text-6xl lg:text-7xl leading-[1.08] text-text-dark mb-6">
              {['Source', 'from', 'China.'].map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-block mr-3"
                >
                  {word}
                </motion.span>
              ))}
              <br />
              {['Quotes', 'in'].map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-block mr-3"
                >
                  {word}
                </motion.span>
              ))}
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.75, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block text-gradient"
              >
                5 hours.
              </motion.span>
            </h1>

            {/* Subhead */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="text-text-muted text-lg sm:text-xl leading-relaxed mb-8 max-w-lg"
            >
              LaraSource connects your brand directly with vetted factories, runs on-site quality
              control, and ships to your warehouse — so you skip months of research and costly mistakes.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <a
                href="#contact"
                onClick={(e) => navClick(e, '#contact')}
                className="group flex items-center gap-2 px-7 py-3.5 rounded-2xl font-semibold btn-shine text-white shadow-lg shadow-blue-500/30 text-[15px]"
              >
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                onClick={(e) => navClick(e, '#contact')}
                className="flex items-center gap-2 px-7 py-3.5 rounded-2xl font-semibold text-primary-blue border-2 border-blue-200 hover:border-primary-blue hover:bg-blue-50 transition-all text-[15px]"
              >
                Talk to Sales
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6"
            >
              {stats.map((stat, i) => (
                <div key={i} className="text-center sm:text-left">
                  <div className="font-heading font-bold text-2xl sm:text-3xl text-primary-blue leading-none">
                    {stat.prefix}
                    <CountUp end={stat.value} />
                    {stat.suffix}
                  </div>
                  <div className="text-text-muted text-xs sm:text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — image + floating cards */}
          <div className="relative hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{ y: imageY }}
              className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/20 aspect-[4/3]"
            >
              <Image
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80"
                alt="Modern warehouse logistics facility"
                fill
                className="object-cover"
                priority
              />
              {/* Blue overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-blue/20 to-transparent" />
            </motion.div>

            {/* Floating cards */}
            {floatingCards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? 30 : -30, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.9 + card.delay, duration: 0.6 }}
                className={`animate-${i === 0 ? 'float' : i === 1 ? 'float-delayed' : 'float-delayed2'} absolute z-10 flex items-center gap-3 bg-white rounded-2xl px-4 py-3 shadow-xl shadow-blue-900/10 border border-blue-50`}
                style={{
                  top: i === 0 ? '10%' : i === 1 ? '45%' : undefined,
                  bottom: i === 2 ? '12%' : undefined,
                  right: i === 0 ? '-5%' : i === 2 ? '5%' : undefined,
                  left: i === 1 ? '-5%' : undefined,
                }}
              >
                <div className={`w-8 h-8 rounded-xl ${card.bg} flex items-center justify-center`}>
                  <card.icon className={`w-4 h-4 ${card.color}`} />
                </div>
                <span className="text-sm font-semibold text-text-dark whitespace-nowrap">{card.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none" aria-hidden>
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60L1440 60L1440 30C1200 60 960 0 720 30C480 60 240 0 0 30L0 60Z" fill="#F5F8FF" />
        </svg>
      </div>
    </section>
  );
}
