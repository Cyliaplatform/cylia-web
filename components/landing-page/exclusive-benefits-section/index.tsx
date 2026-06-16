import BenefitCard from "./BenefitCard";
import { benefitCards } from "./data";
import sticker from "@/public/images/stickers/white-main-sticker.png";

export default function ExclusiveBenefitsSection() {
  return (
    <section className="relative overflow-hidden bg-[#111827] py-36 my-16">
      {/* Decorative Top Border Pattern */}
      <div className="absolute left-0 top-0 h-px w-full bg-white/10" />

      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="h-0.5 w-6 bg-primary" />

            <p className="text-xl font-medium text-white">
              Why Choose Our Food Delivery App
            </p>
          </div>

          <h2 className="text-3xl font-bold leading-tight text-white md:text-[40px]">
            Enjoy{" "}
            <span className="text-primary italic">
              Exclusive
              <span className="relative inline-block">
                Benefits
                <img
                  src={sticker.src}
                  alt=""
                  className="absolute -right-6 top-1 h-5 w-5 rotate-12"
                />
              </span>
            </span>
            <br />
            with Our Food App
          </h2>
        </div>

        {/* Bottom Section */}
        <div className="grid gap-8 lg:grid-cols-3">
          {benefitCards.map((card) => (
            <BenefitCard
              key={card.title}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
