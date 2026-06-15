import FeaturesSection from "@/components/landing-page/app-features-section";
import BecomeRiderSection from "@/components/landing-page/become-a-rider-section";
import BecomeVendorSection from "@/components/landing-page/become-a-vendor-section";
import { DownloadAppSection } from "@/components/landing-page/download-apps-section";
import ExclusiveBenefitsSection from "@/components/landing-page/exclusive-benefits-section";
import FAQSection from "@/components/landing-page/faq-section";
import { HeroSection } from "@/components/landing-page/hero-section";
import RatingAndReviewsSection from "@/components/landing-page/rating-review-section";

export default function LanndingPage() {
  return (
   <div className=" space-y-8">
    <HeroSection/>
    <DownloadAppSection/>
    <ExclusiveBenefitsSection/>
    <BecomeVendorSection/>
    <FeaturesSection/>
    <BecomeRiderSection/>
    <FAQSection/>
    <RatingAndReviewsSection/>
   </div>
   
  );
}
