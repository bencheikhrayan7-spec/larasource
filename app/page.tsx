import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CityMarquee from '@/components/CityMarquee';
import Services from '@/components/Services';
import Process from '@/components/Process';
import SplitSection from '@/components/SplitSection';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import CTABand from '@/components/CTABand';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <main>
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
        image="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
        imageAlt="Business team reviewing sourcing documents"
        imageRight
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
        image="https://images.unsplash.com/photo-1605745341112-85968b19335b?auto=format&fit=crop&w=1200&q=80"
        imageAlt="Shipping containers at a port"
        imageRight={false}
      />
      <Testimonials />
      <FAQ />
      <CTABand />
      <Footer />
    </main>
  );
}
