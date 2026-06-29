'use client';

import { SectionHeading } from './ui/SectionHeading';
import { Stagger, StaggerItem } from './ui/Reveal';

const steps = [
  {
    n: '01',
    title: 'Send your brief',
    text: 'Share product specs, target price, and timeline.',
  },
  {
    n: '02',
    title: 'Sourcing & quotes',
    text: 'Our China team vets factories, negotiates, and returns quotes — average 5 hours.',
  },
  {
    n: '03',
    title: 'Quality control',
    text: 'On-site audits and pre-shipment inspection against your golden sample.',
  },
  {
    n: '04',
    title: 'Logistics to you',
    text: 'We handle freight, customs, and delivery to your warehouse.',
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-surface py-24 sm:py-28">
      <div className="container-px flex flex-col items-center">
        <SectionHeading
          eyebrow="How it works"
          heading="From your brief to your door in four steps"
        />

        <Stagger className="relative mt-16 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <StaggerItem key={step.n}>
              <div className="group relative h-full rounded-3xl border border-slate-100 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-glow">
                <span className="font-display text-5xl font-bold text-transparent [-webkit-text-stroke:1.5px_rgba(59,130,246,0.35)] transition-all duration-300 group-hover:[-webkit-text-stroke:1.5px_rgba(29,78,216,0.8)]">
                  {step.n}
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-text-dark">
                  {step.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-text-muted">
                  {step.text}
                </p>
                {i < steps.length - 1 && (
                  <span className="absolute right-6 top-9 hidden h-2 w-2 rounded-full bg-accent-blue lg:block" />
                )}
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
