import Image from "next/image";
import sticker from "@/public/images/logo/hero-food-text-top-right-sticker.svg";
import BecomeVendorForm from "./BecomeVendorForm";
import { VendorFormStepper } from "./FormStepper";

export default function BecomeVendorSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold leading-tight text-dark md:text-[40px]">
           Expand Your Reach
            <br />
            <span className="italic text-primary">
              with{" "}
              <span className="relative inline-block">
                Cylia
                <Image
                  src={sticker}
                  alt="sticker"
                  className="absolute -right-6 top-0.5 h-6 w-6 rotate-12"
                />
              </span>
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-500 md:text-lg">
            Connect with thousands of hungry customers, boost your sales, and manage your restaurant efficiently with our powerful vendor platform.
          </p>
        </div>

        {/* Bottom Section */}
        <div className="mx-auto mt-16 max-w-[1200px]">
          <div className="rounded-[24px]  p-6 shadow-sm md:p-8 lg:p-10">
            <div className="w-full min-h-[50vh] flex mt-6 gap-14  rounded-lg p-6 ">
              <VendorFormStepper />
              <BecomeVendorForm />
            </div>
          </div>
        </div>
      </div>

     
    </section>
  );
}
