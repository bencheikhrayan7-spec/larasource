'use client';

import { Package, Instagram, Linkedin, MessageCircle } from 'lucide-react';

const columns: Record<string, string[]> = {
  Company: ['About Us', 'Contact', 'Careers', 'Blog'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Refund Policy'],
};

const socials = [
  { label: 'Instagram', Icon: Instagram, href: '#' },
  { label: 'LinkedIn', Icon: Linkedin, href: '#' },
  { label: 'WhatsApp', Icon: MessageCircle, href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-deep-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-hero-gradient flex items-center justify-center shadow-md shadow-blue-500/30">
                <Package className="w-5 h-5 text-white" />
              </div>
              <span className="font-heading font-bold text-xl">LaraSource</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Your trusted partner in China sourcing and fulfillment.
            </p>
            <div className="flex items-center gap-3">
              {socials.map(({ label, Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-xl bg-white/10 hover:bg-accent-blue flex items-center justify-center transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links columns */}
          {Object.entries(columns).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="font-semibold text-sm uppercase tracking-widest text-white/40 mb-5">{heading}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-white/70 hover:text-white text-sm transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Get in touch */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest text-white/40 mb-5">Get in Touch</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:hello@larasource.com" className="text-white/70 hover:text-white text-sm transition-colors">
                  hello@larasource.com
                </a>
              </li>
              <li>
                <span className="text-white/70 text-sm">Yiwu City, Zhejiang, China</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">© 2026 LaraSource. All rights reserved.</p>
          <p className="text-white/40 text-xs">larasource.com</p>
        </div>
      </div>
    </footer>
  );
}
