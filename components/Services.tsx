'use client';

import {
  Factory,
  ShieldCheck,
  Truck,
  Receipt,
  Radar,
  Headset,
  type LucideIcon,
} from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';
import { Stagger, StaggerItem } from './ui/Reveal';

const cards: { title: string; text: string; icon: LucideIcon }[] = [
  {
    title: 'Factory Sourcing',
    text: 'We identify and vet top manufacturers for your product category across China.',
    icon: Factory,
  },
  {
    title: 'Quality Control',
    text: 'On-site factory audits and pre-shipment inspections so every order matches your spec.',
    icon: ShieldCheck,
  },
  {
    title: 'Logistics',
    text: 'Sea, air, or rail freight with customs clearance and last-mile delivery, fully tracked.',
    icon: Truck,
  },
  {
    title: 'Transparent Pricing',
    text: 'No hidden fees. See exactly what you pay for manufacturing, margin, and shipping.',
    icon: Receipt,
  },
  {
    title: 'Live Tracking',
    text: 'Quotes, invoices, and shipment status in one place, updated in real time.',
    icon: Radar,
  },
  {
    title: 'Dedicated Support',
    text: 'A real account manager on the ground in China, ready across time zones.',
    icon: Headset,
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-24 sm:py-28">
      <div className="container-px flex flex-col items-center">
        <SectionHeading
          eyebrow="What we do"
          heading="Everything you need to scale your supply chain"
          subhead="Stop juggling suppliers, freight forwarders, and inspection agencies. We consolidate your entire sourcing operation."
        />

        <Stagger className="mt-16 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <StaggerItem key={card.title}>
              <article className="group relative h-full overflow-hidden rounded-3xl border border-slate-100 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-accent-blue/30 hover:shadow-glow">
                <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-hero-gradient transition-transform duration-300 group-hover:scale-x-100" />
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-surface text-primary-blue transition-colors duration-300 group-hover:bg-hero-gradient group-hover:text-white">
                  <card.icon className="h-7 w-7" />
                </span>
                <h3 className="mt-6 font-display text-xl font-semibold text-text-dark">
                  {card.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-text-muted">
                  {card.text}
                </p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
