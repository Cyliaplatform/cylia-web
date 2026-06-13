// Hero.tsx

import { CuisineTypes } from "./CuisineTypes";
import { HeroBadge } from "./HeroBadge";
import { HeroHeading } from "./HeroHeading";
import { HeroSticker } from "./HeroSticker";
import { HeroWatermark } from "./HeroWatermark";
import { MobilePreview } from "./MobilePreview";
import { ReviewsSection } from "./ReviewSection";
import { SocialLinks } from "./SocialLinks";
import { TestimonialQuote } from "./TestimonialQuote";

export function HeroSection() {
  return (
    <section className="container mx-auto px-14 relative overflow-hidden pt-16 lg:pt-24">
      <div >
        <div className="space-y-16">
          {/* TOP */}
          <div className="relative ">
            <HeroBadge />

            <div className="relative mx-auto mt-8 max-w-4xl">
              <HeroHeading />
            </div>
            <div className="absolute right-[6%] top-[10%] hidden xl:block">
              <HeroSticker />
            </div>
          </div>

          {/* BOTTOM */}
          <div className="relative min-h-162.5">
            <HeroWatermark />

            <ReviewsSection />

            <SocialLinks />

            <TestimonialQuote />

            <CuisineTypes />

            <div className="relative z-10 flex justify-center">
              <MobilePreview />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
