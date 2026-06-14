import Image from "next/image";
import { Star } from "lucide-react";

const avatars = [
  "/images/review-users/user1.png",
  "/images/review-users/user2.png",
  "/images/review-users/user3.png",
  "/images/review-users/user4.png",

];

export default function RatingSummaryCard() {
  return (
    <div className="relative bg-primary-purple rounded-2xl p-8 flex flex-col items-center justify-center text-white overflow-hidden min-h-[320px]">
    
    

      <div className="relative z-10 flex flex-col items-center gap-4 text-center">
        {/* Big rating number */}
        <span className="text-5xl font-extrabold tracking-tight leading-none">4.9</span>

        {/* Stars */}
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={22}
              className="fill-white text-white"
            />
          ))}
        </div>

        {/* Review count */}
        <span className="text-sm text-white/80 font-medium">(50k+ Reviews)</span>

        {/* Tagline */}
        <p className="text-sm font-medium text-white/90 leading-snug max-w-[180px]">
          Real Experiences That Speak for Themselves
        </p>

        {/* Avatars row */}
        <div className="flex items-center mt-1">
          {avatars.map((src, i) => (
            <div
              key={i}
              className={`w-10 h-10 rounded-full border-2 border-primary-purple overflow-hidden ${i !== 0 ? "-ml-3" : ""}`}
            >
              <Image
                src={src}
                alt={`Customer avatar ${i + 1}`}
                width={40}
                height={40}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
          <div className="-ml-3 w-10 h-10 rounded-full border-2 border-primary-purple bg-white flex items-center justify-center">
            <span className="text-primary-purple text-lg font-bold leading-none">+</span>
          </div>
        </div>
      </div>
    </div>
  );
}