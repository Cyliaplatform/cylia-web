// HeroHeading.tsx
import sticker from "@/public/images/logo/hero-food-text-top-right-sticker.svg"
import Image from "next/image"

export function HeroHeading() {
  return (
    <div className="text-center">
      <h1 className="mx-auto max-w-3xl text-5xl font-semibold leading-tight lg:text-7xl">
        The Ultimate{" "}
        <span className="italic text-primary">
          <span className="relative inline-block">
            <Image src={sticker} alt="sticker" height={35} width={26} className="absolute -top-2 -right-9 hidden xl:block" />
            Food 
          </span> Delivery Experience!
        </span>
      </h1>

      <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
        Discover your favorite meals, order effortlessly,
        and enjoy fast delivery right to your doorstep.
      </p>
    </div>
  );
}
