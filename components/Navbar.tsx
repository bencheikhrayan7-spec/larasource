'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = ['Services', 'Process', 'Why Us', 'FAQ', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    setOpen(false)
    const el = document.getElementById(id.toLowerCase().replace(' ', '-'))
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-xl shadow-lg shadow-blue-900/5 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <span className="text-2xl font-display font-bold text-primary-blue tracking-tight">
            Lara<span className="text-deep-navy">Source</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="text-sm font-medium text-text-muted hover:text-primary-blue transition-colors duration-200"
            >
              {link}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex">
          <button
            onClick={() => scrollTo('contact')}
            className="relative overflow-hidden px-5 py-2.5 rounded-lg bg-primary-blue text-white text-sm font-semibold shadow-md shadow-blue-500/30 hover:scale-[1.03] transition-transform duration-200 group"
          >
            <span className="relative z-10">Get a Quote</span>
            <span className="absolute inset-0 bg-gradient-to-r from-accent-blue to-electric-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden p-2 text-text-dark"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-t border-slate-100"
          >
            <nav className="flex flex-col px-6 py-4 gap-4">
              {links.map((link) => (
                <button
                  key={link}
                  onClick={() => scrollTo(link)}
                  className="text-left text-base font-medium text-text-dark hover:text-primary-blue transition-colors"
                >
                  {link}
                </button>
              ))}
              <button
                onClick={() => scrollTo('contact')}
                className="mt-2 px-5 py-3 rounded-lg bg-primary-blue text-white text-sm font-semibold"
              >
                Get a Quote
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
