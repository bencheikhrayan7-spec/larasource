import type { Metadata } from 'next';
import './globals.css';
import { SmoothScrollProvider } from '@/lib/lenis';

export const metadata: Metadata = {
  title: 'LaraSource — Vetted China Sourcing & Supply Chain',
  description:
    'LaraSource connects e-commerce brands directly with vetted China factories. Sourcing, quality control, and logistics — quotes in 5 hours.',
  openGraph: {
    title: 'LaraSource — Vetted China Sourcing & Supply Chain',
    description:
      'Source from China in days, not months. 150+ vetted factories, on-site QC, door-to-door logistics.',
    url: 'https://larasource.com',
    siteName: 'LaraSource',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
