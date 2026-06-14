import Image from "next/image";
import { Star } from "lucide-react";

export interface Review {
  id: number;
  rating: number;
  text: string;
  name: string;
  role: string;
  avatar: string;
}

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 flex flex-col gap-5 h-full">
      {/* Stars + rating */}
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1">
          {Array.from({ length: review.rating }).map((_, i) => (
            <Star key={i} size={20} className="fill-primary-purple text-primary-purple" />
          ))}
        </div>
        <span className="text-gray-700 font-semibold text-base">{review.rating}.0</span>
      </div>

      {/* Review text */}
      <p className="text-gray-600 text-base leading-relaxed flex-1">{review.text}</p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 rounded-full overflow-hidden flex-shrink-0">
          <Image
            src={review.avatar}
            alt={review.name}
            width={44}
            height={44}
            className="object-cover w-full h-full"
          />
        </div>
        <div>
          <p className="font-semibold text-gray-900 text-sm">{review.name}</p>
          <p className="text-gray-400 text-xs">{review.role}</p>
        </div>
      </div>
    </div>
  );
}