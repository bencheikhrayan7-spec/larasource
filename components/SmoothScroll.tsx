'use client';

import { ReactNode, useEffect, useState } from 'react';
import Lenis from 'lenis';
import { MotionConfig } from 'framer-motion';

export default function SmoothScroll({ children }: { children: ReactNode }) {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);

    const onChange = () => setReduced(mq.matches);
    mq.addEventListener('change', onChange);

    if (mq.matches) {
      return () => mq.removeEventListener('change', onChange);
    }

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let rafId = 0;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      mq.removeEventListener('change', onChange);
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <MotionConfig reducedMotion={reduced ? 'always' : 'user'}>
      {children}
    </MotionConfig>
  );
}
