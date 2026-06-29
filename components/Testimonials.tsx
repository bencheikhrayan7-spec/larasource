'use client';

import { Quote, Star } from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';
import { Stagger, StaggerItem } from './ui/Reveal';

const items = [
  {
    quote:
      'We tried two other sourcing agents first. Night and day — clear communication, on-time and on-spec every time.',
    name: 'Ops Lead',
    company: 'DTC brand',
  },
  {
    quote:
      'Their factory audit caught a compliance gap our previous supplier hid for two years. Worth every penny.',
    name: 'Founder',
    company: 'Home goods',
  },
  {
    quote:
      'Idea to first 10k units in 90 days. They genuinely care about your launch.',
    name: 'CEO',
    company: 'Gadgets brand',
  },
];

export default function Testimonials() {
  return (
    <section className="bg-surface py-24 sm:py-28">
      <div className="container-px flex flex-col items-center">
        <SectionHeading
          eyebrow="Testimonials"
          heading="Trusted by growing e-commerce brands"
        />

        <Stagger className="mt-16 grid w-full grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((item) => (
            <StaggerItem key={item.name}>
              <figure className="group flex h-full flex-col rounded-3xl border border-slate-100 bg-white p-8 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-glow">
                <Quote className="h-8 w-8 text-accent-blue/40" />
                <div className="mt-4 flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-electric-cyan text-electric-cyan"
                    />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-base leading-relaxed text-text-dark">
                  “{item.quote}”
                </blockquote>
                <figcaption className="mt-6 border-t border-slate-100 pt-4">
                  <p className="font-display font-semibold text-text-dark">
                    {item.name}
                  </p>
                  <p className="text-sm text-text-muted">{item.company}</p>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
