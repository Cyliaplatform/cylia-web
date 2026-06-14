import Image from "next/image";
import SectionLabel from "./SectionLabel";

export default function DownloadAppSection() {
  return (
    <div className="bg-primary-purple rounded-2xl px-8 py-16 text-center relative overflow-hidden">
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 flex flex-col items-center gap-5">
        {/* Label */}
        <div className="flex items-center justify-center gap-2">
          <span className="w-5 h-0.5 bg-primary "/>
          <span className="text-base font-medium text-white/70 tracking-wide">Get The App</span>
        </div>

        {/* Heading */}
        <h2 className="text-white text-4xl md:text-[40px] font-extrabold italic leading-tight">
          Download the App Now!
          <span className="not-italic text-primary ml-2">🌿</span>
        </h2>

        {/* Subtext */}
        <p className="text-white/70 text-base max-w-lg leading-relaxed">
          Discover your favorite meals, explore new cuisines, and get everything delivered quickly
          with a smooth and reliable app experience.
        </p>

        {/* Store buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-2">
          {/* Google Play */}
          <button className="flex items-center gap-3 bg-white rounded-xl px-6 py-3.5 hover:bg-gray-100 transition-colors">
            <Image
              src="/images/logo/playstore.png"
              alt="Google Play"
              width={28}
              height={28}
              className="object-contain"
            />
            <div className="text-left">
              <p className="text-[10px] text-gray-500 leading-tight">Get it on</p>
              <p className="text-gray-900 font-bold text-sm leading-tight">Google Play</p>
            </div>
          </button>

          {/* Apple Store */}
          <button className="flex items-center gap-3 bg-white rounded-xl px-6 py-3.5 hover:bg-gray-100 transition-colors">
            <Image
              src="/images/logo/apple.png"
              alt="Apple Store"
              width={24}
              height={28}
              className="object-contain"
            />
            <div className="text-left">
              <p className="text-[10px] text-gray-500 leading-tight">Download on the</p>
              <p className="text-gray-900 font-bold text-sm leading-tight">Apple Store</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}