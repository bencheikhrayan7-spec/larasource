'use client';

import { ArrowRight } from 'lucide-react';
import { Reveal } from './ui/Reveal';
import { Button } from './ui/Button';

export default function CTABand() {
  return (
    <section id="contact" className="bg-white py-12 sm:py-16">
      <div className="container-px">
        <div className="relative overflow-hidden rounded-[2rem] bg-hero-gradient px-6 py-16 text-center shadow-glow sm:px-12 sm:py-20">
          {/* Animated background */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-20 left-1/4 h-72 w-72 animate-blob rounded-full bg-white/15 blur-3xl" />
            <div className="absolute -bottom-24 right-1/4 h-80 w-80 animate-blob rounded-full bg-electric-cyan/30 blur-3xl [animation-delay:-5s]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.25),transparent_60%)]" />
          </div>

          <Reveal className="relative">
            <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-[2.75rem]">
              Get vetted factory quotes in 5 hours
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/85">
              Tell us what you&apos;re sourcing and we&apos;ll do the rest.
            </p>
            <div className="mt-9 flex justify-center">
              <Button href="mailto:hello@larasource.com" variant="secondary" magnetic>
                Get a Quote <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
