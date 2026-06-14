import { DownloadAppSection } from "@/components/landing-page/download-apps-section";
import ExclusiveBenefitsSection from "@/components/landing-page/exclusive-benefits-section";
import { HeroSection } from "@/components/landing-page/hero-section";

export default function LanndingPage() {
  return (
   <div className=" space-y-8">
    <HeroSection/>
    <DownloadAppSection/>
    <ExclusiveBenefitsSection/>
   </div>
   
  );
}
