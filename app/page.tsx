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

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CityMarquee />
        <Services />
        <Process />

        <SplitSection
          id="why-us"
          layout="image-right"
          label="Sourcing & Quotation"
          heading="Find the right manufacturer in days, not months"
          text="Submit your specs and our team in China procures quotes from vetted factories, negotiating the best MOQ and pricing on your behalf."
          bullets={[
            'Direct factory negotiations',
            'Detailed pricing breakdown',
            'OEM/ODM product matching',
            'Sample procurement & mailing',
          ]}
          image="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
          alt="Business team reviewing sourcing options in a meeting"
        />

        <SplitSection
          layout="image-left"
          label="Warehousing & Logistics"
          heading="Seamless cross-border freight to your door"
          text="We consolidate goods in our warehouses, run pre-shipment QC, and pick the optimal freight method to minimize your landed cost."
          bullets={[
            'DDP air, sea & rail freight',
            'Customs clearance handled',
            'Multi-supplier consolidation',
            'Pre-shipment inspection',
          ]}
          image="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&w=1200&q=80"
          alt="Stacked shipping containers at a freight port"
        />

        <Testimonials />
        <FAQ />
        <CTABand />
      </main>
      <Footer />
    </>
  );
}
