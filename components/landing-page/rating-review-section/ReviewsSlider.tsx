"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ReviewCard, { Review } from "./ReviewCard";

const reviews: Review[] = [
  {
    id: 1,
    rating: 5,
    text: "I've been using this app regularly, and the experience has been consistently smooth and reliable. The interface is easy to navigate, and finding restaurants is quick and effortless. Delivery is always on time, and the tracking feature keeps me updated at every step. It has definitely made ordering food much more convenient and enjoyable.",
    name: "John Doe",
    role: "Customer",
    avatar: "/images/review-users/user4.png",
  },
  {
    id: 2,
    rating: 5,
    text: "Absolutely love this app! I use it almost every week and it never lets me down. The variety of restaurants available is impressive, and the checkout process is super fast. Customer support was also incredibly helpful when I had a minor issue with my order. Highly recommend it to anyone looking for a seamless food delivery experience.",
    name: "Sarah Mitchell",
    role: "Regular Customer",
    avatar:"/images/review-users/user3.png",
  },
  {
    id: 3,
    rating: 5,
    text: "This is hands-down the best food delivery app I've tried. The UI is clean, intuitive, and makes browsing menus a real pleasure. My orders arrive warm and on time every single time. The live tracking feature gives me peace of mind, and the loyalty rewards program is a great bonus. Won't be switching to anything else!",
    name: "Carlos Reyes",
    role: "Verified Customer",
    avatar: "/images/review-users/user1.png",
  },
];

export default function ReviewsSlider() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? reviews.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === reviews.length - 1 ? 0 : c + 1));

  return (
    <div className="flex flex-col h-full">
      {/* Card area */}
      <div className="flex-1">
        <ReviewCard review={reviews[current]} />
      </div>

      {/* Navigation arrows — bottom-right, inside card bottom-right visually */}
      <div className="flex justify-end gap-3 mt-5">
        <button
          onClick={prev}
          aria-label="Previous review"
          className="w-11 h-11 rounded-full bg-dark  text-white flex items-center justify-center transition-colors"
        >
          <ArrowLeft size={18} />
        </button>
        <button
          onClick={next}
          aria-label="Next review"
          className="w-11 h-11 rounded-full bg-primary  text-dark flex items-center justify-center transition-colors"
        >
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}