'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { Check } from 'lucide-react'

interface SplitSectionProps {
  id: string
  label: string
  heading: string
  text: string
  bullets: string[]
  image: string
  imageAlt: string
  layout: 'image-right' | 'image-left'
}

export default function SplitSection({ id, label, heading, text, bullets, image, imageAlt, layout }: SplitSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['-5%', '5%'])

  const isRight = layout === 'image-right'

  return (
    <section id={id} ref={ref} className="py-24 bg-white overflow-hidden">
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center ${!isRight ? 'lg:grid-flow-col-dense' : ''}`}>
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: isRight ? -40 : 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className={!isRight ? 'lg:col-start-2' : ''}
        >
          <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-primary-blue text-sm font-medium mb-4">
            {label}
          </span>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-deep-navy mb-6 leading-tight">
            {heading}
          </h2>
          <p className="text-lg text-text-muted leading-relaxed mb-8">{text}</p>
          <ul className="space-y-3">
            {bullets.map((b) => (
              <li key={b} className="flex items-center gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                  <Check size={14} className="text-primary-blue" />
                </span>
                <span className="text-text-dark font-medium">{b}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: isRight ? 40 : -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className={`relative ${!isRight ? 'lg:col-start-1' : ''}`}
        >
          <motion.div style={{ y: imgY }} className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/15">
            <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/30 to-transparent z-10 rounded-3xl" />
            <Image
              src={image}
              alt={imageAlt}
              width={1200}
              height={800}
              className="w-full h-[400px] object-cover"
            />
          </motion.div>
          {/* Decorative blob */}
          <div className={`absolute -z-10 w-72 h-72 rounded-full bg-blue-100/60 blur-3xl ${isRight ? '-right-16 -bottom-16' : '-left-16 -bottom-16'}`} />
        </motion.div>
      </div>
    </section>
  )
}
