'use client'

import { Instagram, Linkedin, MessageCircle } from 'lucide-react'

const COLUMNS: Record<string, string[]> = {
  Company: ['About Us', 'Contact', 'Careers', 'Blog'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Refund Policy'],
}

export default function Footer() {
  return (
    <footer className="bg-deep-navy text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <span className="text-2xl font-display font-bold text-white mb-4 block">
              Lara<span className="text-electric-cyan">Source</span>
            </span>
            <p className="text-white/60 max-w-xs leading-relaxed">
              Your trusted partner in China sourcing and fulfillment.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent-blue transition-colors duration-200">
                <Instagram size={18} />
              </a>
              <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent-blue transition-colors duration-200">
                <Linkedin size={18} />
              </a>
              <a href="#" aria-label="WhatsApp" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent-blue transition-colors duration-200">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(COLUMNS).map(([col, links]) => (
            <div key={col}>
              <h4 className="text-white font-display font-semibold mb-4">{col}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-white/60 hover:text-white transition-colors duration-200 text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 className="text-white font-display font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:hello@larasource.com" className="text-white/60 hover:text-white transition-colors duration-200 text-sm">
                  hello@larasource.com
                </a>
              </li>
              <li className="text-white/60 text-sm">Yiwu City, Zhejiang, China</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-white/40 text-sm">
          © 2026 LaraSource. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
