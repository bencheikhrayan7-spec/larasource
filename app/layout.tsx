import type { Metadata } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';

const display = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

const body = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://larasource.com'),
  title: 'LaraSource — Vetted China factory quotes in 5 hours',
  description:
    'LaraSource connects e-commerce brands directly with vetted China factories, runs on-site quality control, and ships door-to-door. Sourcing, QC, and logistics in one place.',
  keywords: [
    'China sourcing agent',
    'supply chain',
    'quality control',
    'freight logistics',
    'factory sourcing',
    'e-commerce',
  ],
  openGraph: {
    title: 'LaraSource — Vetted China factory quotes in 5 hours',
    description:
      'Sourcing, quality control, and logistics, all in one place. Vetted China factory quotes in about 5 hours.',
    url: 'https://larasource.com',
    siteName: 'LaraSource',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="font-sans antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
