// HeroSticker.tsx

import { ArrowRight } from "lucide-react";

export function HeroSticker() {
  const createStarburstPath = (
    cx: number,
    cy: number,
    outerRadius: number,
    innerRadius: number,
    points: number,
  ) => {
    const step = Math.PI / points;
    const path: string[] = [];

    for (let i = 0; i < points * 2; i++) {
      const radius = i % 2 === 0 ? outerRadius : innerRadius;
      const angle = i * step - Math.PI / 2;

      const x = cx + Math.cos(angle) * radius;
      const y = cy + Math.sin(angle) * radius;

      path.push(`${i === 0 ? "M" : "L"} ${x} ${y}`);
    }

    return `${path.join(" ")} Z`;
  };

  return (
    <div className="relative h-[180px] w-[180px]">
      {/* Sticker Background */}
      <svg viewBox="0 0 180 180" className="absolute inset-0 h-full w-full">
        <path d={createStarburstPath(90, 90, 88, 80, 28)}  className="fill-gray-100" />
      </svg>

      {/* Rotating Layer */}
      <div className="absolute inset-0 animate-[spin_18s_linear_infinite]">
        <svg viewBox="0 0 180 180" className="h-full w-full">
          <defs>
            <path
              id="circlePath"
              d="
          M 90,90
          m -48,0
          a 48,48 0 1,1 96,0
          a 48,48 0 1,1 -96,0
        "
            />
          </defs>

          {/* Main Circle */}
          <circle
            cx="90"
            cy="90"
            r="68"
            // fill="#D1D5DB"
            fill="#F5F5F5"
            stroke="#BFC4CB"
            strokeWidth="1.5"
          />

          {/* Text */}
          <text fill="#131521" fontSize="14" fontWeight="700" letterSpacing="3.5">
            <textPath href="#circlePath" startOffset="50%" textAnchor="middle">
              QUICK FOOD DELIVERY APP
            </textPath>
          </text>

          {/* Green Dot */}
          <circle cx="38" cy="92" r="4.5" className="fill-primary" />
        </svg>
      </div>

      {/* Center Arrow */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          flex
          h-[56px]
          w-[56px]
          -translate-x-1/2
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          bg-primary-purple
          text-white
          shadow-lg
        "
      >
        <ArrowRight size={24} strokeWidth={2.5} />
      </div>
    </div>
  );
}
