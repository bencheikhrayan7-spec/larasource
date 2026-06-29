import { Boxes, Instagram, Linkedin, MessageCircle, Mail, MapPin } from 'lucide-react';

const columns: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '#' },
      { label: 'Contact', href: '#contact' },
      { label: 'Careers', href: '#' },
      { label: 'Blog', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Refund Policy', href: '#' },
    ],
  },
];

const socials = [
  { label: 'Instagram', icon: Instagram, href: '#' },
  { label: 'LinkedIn', icon: Linkedin, href: '#' },
  { label: 'WhatsApp', icon: MessageCircle, href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-deep-navy text-white">
      <div className="container-px py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <a
              href="#top"
              className="flex items-center gap-2 font-display text-xl font-bold"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-hero-gradient text-white">
                <Boxes className="h-5 w-5" />
              </span>
              LaraSource
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/65">
              Your trusted partner in China sourcing and fulfillment.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white/80 transition-colors hover:bg-hero-gradient hover:text-white"
                >
                  <s.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white/90">
                {col.title}
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/65 transition-colors hover:text-electric-cyan"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white/90">
              Get in Touch
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <a
                  href="mailto:hello@larasource.com"
                  className="flex items-center gap-2 text-sm text-white/65 transition-colors hover:text-electric-cyan"
                >
                  <Mail className="h-4 w-4" />
                  hello@larasource.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/65">
                <MapPin className="h-4 w-4" />
                Yiwu City, Zhejiang, China
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-6 text-center text-sm text-white/55">
          © 2026 LaraSource. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
