// HeroBadge.tsx

import { UtensilsCrossed } from "lucide-react";

export function HeroBadge() {
  return (
    <div className="mx-auto flex w-fit items-center gap-3 rounded-full border border-gray-200 bg-white/70 px-4 py-4 backdrop-blur">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-purple text-white">
        <UtensilsCrossed size={18} />
      </div>

      <span className="text-[16px] font-medium">
        #Top-Rated Food Delivery App
      </span>
    </div>
  );
}