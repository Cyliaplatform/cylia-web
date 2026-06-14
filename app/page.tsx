import FeaturesSection from "@/components/landing-page/app-features-section";
import { DownloadAppSection } from "@/components/landing-page/download-apps-section";
import ExclusiveBenefitsSection from "@/components/landing-page/exclusive-benefits-section";
import FAQSection from "@/components/landing-page/faq-section";
import { HeroSection } from "@/components/landing-page/hero-section";

export default function LanndingPage() {
  return (
   <div className=" space-y-8">
    <HeroSection/>
    <DownloadAppSection/>
    <ExclusiveBenefitsSection/>
    <FeaturesSection/>
    <FAQSection/>
    <div>
      sa
    </div>
   </div>
   
  );
}
