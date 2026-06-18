import { Suspense } from "react";
import FeaturesSection from "@/components/landing-page/app-features-section";
import BecomeRiderSection from "@/components/landing-page/become-a-rider-section";
import BecomeVendorSection from "@/components/landing-page/become-a-vendor-section";
import RegistrationPrefillGate from "@/components/landing-page/RegistrationPrefillGate";
import { DownloadAppSection } from "@/components/landing-page/download-apps-section";
import ExclusiveBenefitsSection from "@/components/landing-page/exclusive-benefits-section";
import FAQSection from "@/components/landing-page/faq-section";
import { HeroSection } from "@/components/landing-page/hero-section";
import RatingAndReviewsSection from "@/components/landing-page/rating-review-section";

export default function LanndingPage() {
  return (
    <Suspense fallback={null}>
      <div className="space-y-8">
        <RegistrationPrefillGate />
        <HeroSection />
        <section id="download-app">
          <DownloadAppSection />
        </section>
        <ExclusiveBenefitsSection />
        <section id="become-merchant">
          <BecomeVendorSection />
        </section>
        <section id="features">
          <FeaturesSection />
        </section>
        <section id="become-rider">
          <BecomeRiderSection />
        </section>
        <section id="how-it-works">
          <FAQSection />
        </section>
        <section id="testimonials">
          <RatingAndReviewsSection />
        </section>
      </div>
    </Suspense>
  );
}
