import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import PricingSection from "@/components/PricingSection";
import WhyUs from "@/components/WhyUs";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import ContactSection from "@/components/ContactSection";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Amazon & Kindle Book Review Services",
  description: "Independent book reading and reviews for authors and publishers on Amazon, Kindle and Goodreads. $10 per 100 pages.",
  priceRange: "$10 per 100 pages",
};

export default function Home() {
  return (
    <main>
      <Hero /><Intro /><Services /><HowItWorks /><PricingSection /><WhyUs /><Faq /><FinalCta /><ContactSection />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </main>
  );
}
