import Image from "next/image";
import mobileMockup from "@/public/images/mockups/mobile-mockup.png";

export function MobilePreview() {
  return (
    <div className="relative z-10">
      {/* Top-right: #Fresh badge + sparkles */}
      <div className="absolute top-[10%] -right-16 z-20 flex flex-col items-end gap-2">
        {/* Large sparkle */}
        <svg
          className="absolute -top-1 -right-9 w-16 h-10"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M11 0C11 0 12.2 7.8 14.5 9.5C16.8 11.2 22 11 22 11C22 11 16.8 10.8 14.5 12.5C12.2 14.2 11 22 11 22C11 22 9.8 14.2 7.5 12.5C5.2 10.8 0 11 0 11C0 11 5.2 11.2 7.5 9.5C9.8 7.8 11 0 11 0Z"
            className="fill-primary-purple"
          />
        </svg>
        {/* Small sparkle */}
        <svg
          className="absolute top-8 -right-10 w-6 h-6"
          viewBox="0 0 12 12"
          fill="none"
        >
          <path
            d="M6.5 0C6.5 0 7.3 4.7 8.7 5.8C10.1 6.9 13 6.5 13 6.5C13 6.5 10.1 6.1 8.7 7.2C7.3 8.3 6.5 13 6.5 13C6.5 13 5.7 8.3 4.3 7.2C2.9 6.1 0 6.5 0 6.5C0 6.5 2.9 6.9 4.3 5.8C5.7 4.7 6.5 0 6.5 0Z"
            className="fill-primary-purple"
          />
        </svg>
        {/* #Fresh pill badge */}
        <div className="mt-8 flex items-center gap-1.5 bg-dark rounded-full px-5 py-3 text-sm xl:text-xl border-2 border-white font-semibold text-white shadow-lg">
          <span>#Fresh</span>
        </div>
      </div>

      {/* Bottom-left: #Delicious badge + sparkles */}
      <div className="absolute bottom-[8%] -left-16 z-20 flex flex-col items-start gap-2">
        {/* Large sparkle bottom-left */}
        <svg
          className="absolute -top-3 -left-12 w-16 h-10"
          viewBox="0 0 12 12"
          fill="none"
        >
          <path
            d="M6.5 0C6.5 0 7.3 4.7 8.7 5.8C10.1 6.9 13 6.5 13 6.5C13 6.5 10.1 6.1 8.7 7.2C7.3 8.3 6.5 13 6.5 13C6.5 13 5.7 8.3 4.3 7.2C2.9 6.1 0 6.5 0 6.5C0 6.5 2.9 6.9 4.3 5.8C5.7 4.7 6.5 0 6.5 0Z"
            className="fill-primary"
          />
        </svg>
        {/* Small sparkle top */}
        <svg
          className="absolute bottom-2 -left-13 w-6 h-6"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M11 0C11 0 12.2 7.8 14.5 9.5C16.8 11.2 22 11 22 11C22 11 16.8 10.8 14.5 12.5C12.2 14.2 11 22 11 22C11 22 9.8 14.2 7.5 12.5C5.2 10.8 0 11 0 11C0 11 5.2 11.2 7.5 9.5C9.8 7.8 11 0 11 0Z"
            className="fill-primary"
          />
        </svg>
        {/* #Delicious pill badge */}
        <div className="mt-2 flex items-center gap-1.5 bg-dark rounded-full px-5 py-3 border-2 border-white text-sm xl:text-xl font-semibold text-white shadow-lg">
          <span>#Delicious</span>
        </div>
      </div>

      <Image
        src={mobileMockup}
        alt="Food Delivery App"
        priority
        className="w-70 lg:w-120"
      />
    </div>
  );
}
