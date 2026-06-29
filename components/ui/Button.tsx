'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ReactNode, useRef } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost';

const base =
  'group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold transition-colors duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent-blue/40';

const styles: Record<Variant, string> = {
  primary:
    'bg-hero-gradient text-white shadow-glow hover:shadow-[0_24px_70px_-16px_rgba(56,189,248,0.6)]',
  secondary:
    'bg-white text-primary-blue ring-1 ring-inset ring-accent-blue/25 hover:ring-accent-blue/50',
  ghost:
    'bg-white/10 text-white ring-1 ring-inset ring-white/30 backdrop-blur hover:bg-white/20',
};

export function Button({
  children,
  href = '#contact',
  variant = 'primary',
  className = '',
  magnetic = false,
}: {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  className?: string;
  magnetic?: boolean;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 250, damping: 18 });
  const sy = useSpring(y, { stiffness: 250, damping: 18 });
  const tx = useTransform(sx, (v) => v);
  const ty = useTransform(sy, (v) => v);

  function handleMove(e: React.MouseEvent<HTMLAnchorElement>) {
    if (!magnetic || !ref.current) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * 0.3);
    y.set((e.clientY - (rect.top + rect.height / 2)) * 0.3);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={magnetic ? { x: tx, y: ty } : undefined}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      className={`${base} ${styles[variant]} ${className}`}
    >
      <span className="relative z-10 inline-flex items-center gap-2">
        {children}
      </span>
      <span className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-full">
        <span className="absolute top-0 left-0 h-full w-1/3 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[320%]" />
      </span>
    </motion.a>
  );
}
