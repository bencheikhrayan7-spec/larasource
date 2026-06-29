import { ReactNode } from 'react';
import { Reveal } from './Reveal';

export function SectionHeading({
  eyebrow,
  heading,
  subhead,
  align = 'center',
}: {
  eyebrow?: string;
  heading: ReactNode;
  subhead?: string;
  align?: 'center' | 'left';
}) {
  const alignment =
    align === 'center' ? 'text-center mx-auto items-center' : 'text-left items-start';
  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignment}`}>
      {eyebrow && (
        <Reveal>
          <span className="eyebrow">{eyebrow}</span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="font-display text-3xl font-bold leading-[1.1] tracking-tight text-text-dark sm:text-4xl md:text-[2.75rem]">
          {heading}
        </h2>
      </Reveal>
      {subhead && (
        <Reveal delay={0.1}>
          <p className="text-base leading-relaxed text-text-muted sm:text-lg">
            {subhead}
          </p>
        </Reveal>
      )}
    </div>
  );
}
