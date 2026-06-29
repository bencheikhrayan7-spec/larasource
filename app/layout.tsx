import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'LaraSource — Vetted China Factory Quotes in 5 Hours',
  description: 'LaraSource connects your brand directly with vetted factories in China. Sourcing, quality control, and logistics — all in one place.',
  keywords: 'China sourcing agent, factory quotes, supply chain, quality control, logistics, e-commerce',
  openGraph: {
    title: 'LaraSource — Vetted China Factory Quotes in 5 Hours',
    description: 'Source from China. Quotes in 5 hours.',
    url: 'https://larasource.com',
    siteName: 'LaraSource',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
