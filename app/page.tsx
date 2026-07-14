import browserData from "../src/data/browserData.json";
import HeroSection from "../src/components/HeroSection";
import StatsBar from "../src/components/StatsBar";
import TemplatesSection from "../src/components/TemplatesSection";
import Benefits from "../src/components/Benefits";
import TestimonialsSection from "../src/components/TestimonialsSection";
import PricingSection from "../src/components/PricingSection";
import FAQSection from "../src/components/FAQSection";
import LogoMarquee from "../src/components/LogoMarquee";
import Footer from "../src/components/Footer";

import type {
  Template,
  SiteStats,
  BenefitComparison,
  Testimonial,
  PricingTier,
  FAQ,
} from "../src/types";

export default function Home() {
  const templates = browserData.templates as Template[];
  const stats = browserData.stats as SiteStats[];
  const comparison = browserData.comparison as BenefitComparison[];
  const testimonials = browserData.testimonials as Testimonial[];
  const pricing = browserData.pricing as PricingTier[];
  const faqs = browserData.faqs as FAQ[];
  const integrations = browserData.integrations as string[];

  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Stats Bar */}
      <StatsBar stats={stats} />

      {/* Templates Grid */}
      <TemplatesSection templates={templates} />

      {/* Benefits / Comparison */}
      <Benefits comparison={comparison} />

      {/* Logo Marquee */}
      <LogoMarquee logos={integrations} />

      {/* Testimonials */}
      <TestimonialsSection testimonials={testimonials} />

      {/* Pricing */}
      <PricingSection pricing={pricing} />

      {/* FAQ */}
      <FAQSection faqs={faqs} />

      {/* Footer */}
      <Footer />
    </>
  );
}