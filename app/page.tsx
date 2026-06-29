import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import CityMarquee from '@/components/CityMarquee'
import Services from '@/components/Services'
import Process from '@/components/Process'
import SplitSection from '@/components/SplitSection'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import CTABand from '@/components/CTABand'
import Footer from '@/components/Footer'
import SmoothScroll from '@/components/SmoothScroll'

export default function Home() {
  return (
    <SmoothScroll>
      <main className="min-h-screen">
        <Navbar />
        <Hero />
        <CityMarquee />
        <Services />
        <Process />
        <SplitSection
          id="split-sourcing"
          label="Sourcing & Quotation"
          heading="Find the right manufacturer in days, not months"
          text="Submit your specs and our team in China procures quotes from vetted factories, negotiating the best MOQ and pricing on your behalf."
          bullets={[
            'Direct factory negotiations',
            'Detailed pricing breakdown',
            'OEM/ODM product matching',
            'Sample procurement & mailing',
          ]}
          image="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80"
          imageAlt="Business team sourcing meeting"
          layout="image-right"
        />
        <SplitSection
          id="split-logistics"
          label="Warehousing & Logistics"
          heading="Seamless cross-border freight to your door"
          text="We consolidate goods in our warehouses, run pre-shipment QC, and pick the optimal freight method to minimize your landed cost."
          bullets={[
            'DDP air, sea & rail freight',
            'Customs clearance handled',
            'Multi-supplier consolidation',
            'Pre-shipment inspection',
          ]}
          image="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1200&q=80"
          imageAlt="Shipping containers at port"
          layout="image-left"
        />
        <Testimonials />
        <FAQ />
        <CTABand />
        <Footer />
      </main>
    </SmoothScroll>
  )
}
