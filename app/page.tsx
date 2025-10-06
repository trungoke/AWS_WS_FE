import { Hero } from '@/components/landing/Hero';
import { SearchFilters } from '@/components/landing/SearchFilters';
import { FeaturedGyms } from '@/components/landing/FeaturedGyms';
import { FeaturedTrainers } from '@/components/landing/FeaturedTrainers';
import { FeaturedOffers } from '@/components/landing/FeaturedOffers';
import { HowItWorks } from '@/components/landing/HowItWorks';
import { Testimonials } from '@/components/landing/Testimonials';
import { CTA } from '@/components/landing/CTA';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <Hero />
        <SearchFilters />
        <FeaturedGyms />
        <FeaturedTrainers />
        <FeaturedOffers />
        <HowItWorks />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

