'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, CheckCircle2, Clock, Truck } from 'lucide-react';
import { Button } from './ui/Button';
import { CountUp } from './ui/CountUp';

const headline = ['Source', 'from', 'China.', 'Quotes', 'in', '5', 'hours.'];

const stats = [
  { to: 150, prefix: '', suffix: '+', label: 'Vetted factories' },
  { to: 200, prefix: '$', suffix: 'M+', label: 'Sourced from China' },
  { to: 14, prefix: '', suffix: '', label: 'QC inspection cities' },
  { to: 5, prefix: '', suffix: 'h', label: 'Avg quote response' },
];

const wordVariants = {
  hidden: { opacity: 0, y: 26, filter: 'blur(8px)' },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { delay: 0.35 + i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const card1Y = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const card2Y = useTransform(scrollYProgress, [0, 1], [0, 70]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative overflow-hidden bg-white pt-32 pb-20 sm:pt-36 lg:pt-40"
    >
      {/* Animated gradient mesh / blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 -left-24 h-96 w-96 animate-blob rounded-full bg-accent-blue/30 blur-3xl" />
        <div className="absolute top-10 right-0 h-[28rem] w-[28rem] animate-blob rounded-full bg-electric-cyan/25 blur-3xl [animation-delay:-4s]" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 animate-blob rounded-full bg-primary-blue/20 blur-3xl [animation-delay:-8s]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(245,248,255,0)_0%,rgba(255,255,255,0.6)_70%)]" />
      </div>

      <div className="container-px grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="eyebrow"
          >
            End-to-end China sourcing
          </motion.span>

          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-text-dark sm:text-5xl lg:text-6xl">
            {headline.map((word, i) => (
              <motion.span
                key={`${word}-${i}`}
                custom={i}
                variants={wordVariants}
                initial="hidden"
                animate="show"
                className={`mr-[0.28em] inline-block ${
                  word === '5' || word === 'hours.'
                    ? 'bg-hero-gradient bg-clip-text text-transparent'
                    : ''
                }`}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 0.6 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-text-muted"
          >
            LaraSource connects your brand directly with vetted factories, runs
            on-site quality control, and ships to your warehouse — so you skip
            months of research and costly mistakes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <Button href="#contact" magnetic>
              Get Started <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="#contact" variant="secondary">
              Talk to Sales
            </Button>
          </motion.div>

          {/* Stats row */}
          <motion.dl
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.35, duration: 0.6 }}
            className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4"
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="font-display text-3xl font-bold text-primary-blue sm:text-4xl">
                  <CountUp to={stat.to} prefix={stat.prefix} suffix={stat.suffix} />
                </dt>
                <dd className="mt-1 text-sm text-text-muted">{stat.label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* Hero visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-xl"
        >
          <motion.div
            style={{ y: imageY }}
            className="relative overflow-hidden rounded-3xl shadow-glow ring-1 ring-slate-200/60"
          >
            <Image
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80"
              alt="Modern warehouse logistics operation with organized inventory shelving"
              width={1200}
              height={1400}
              priority
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/30 via-transparent to-transparent" />
          </motion.div>

          {/* Floating UI cards */}
          <motion.div
            style={{ y: card1Y }}
            className="absolute -left-4 top-10 hidden animate-float sm:block"
          >
            <FloatingCard
              icon={<Clock className="h-4 w-4 text-primary-blue" />}
              title="Quote ready in 5h"
              sub="Vetted factory pricing"
            />
          </motion.div>

          <motion.div
            style={{ y: card2Y }}
            className="absolute -right-4 top-1/2 hidden animate-float [animation-delay:-2s] sm:block"
          >
            <FloatingCard
              icon={<CheckCircle2 className="h-4 w-4 text-emerald-500" />}
              title="QC passed ✓"
              sub="Pre-shipment inspection"
            />
          </motion.div>

          <motion.div
            style={{ y: card1Y }}
            className="absolute -bottom-5 left-8 hidden animate-float [animation-delay:-4s] sm:block"
          >
            <FloatingCard
              icon={<Truck className="h-4 w-4 text-accent-blue" />}
              title="Shipped — arriving in 3 days"
              sub="Door-to-door tracking"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function FloatingCard({
  icon,
  title,
  sub,
}: {
  icon: React.ReactNode;
  title: string;
  sub: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-white/90 px-4 py-3 shadow-card backdrop-blur">
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-surface">
        {icon}
      </span>
      <div>
        <p className="text-sm font-semibold text-text-dark">{title}</p>
        <p className="text-xs text-text-muted">{sub}</p>
      </div>
    </div>
  );
}
