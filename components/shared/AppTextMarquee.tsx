'use client';

import Marquee from 'react-fast-marquee';
import { cn } from '@/lib/utils';

type AppTextMarqueeProps = {
  items: string[];
  className?: string;
  itemClassName?: string;
  speed?: number;
};

const SeparatorIcon = () => {
  return (
    <span
      aria-hidden="true"
      className="relative block h-7 w-7 flex-shrink-0"
    >
      <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[#C5F000]" />
      <span className="absolute left-1/2 bottom-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[#C5F000]" />
      <span className="absolute left-0 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-[#C5F000]" />
      <span className="absolute right-0 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-[#C5F000]" />
      <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C5F000]" />
    </span>
  );
};

export const AppTextMarquee = ({
  items,
  className,
  itemClassName,
  speed = 45,
}: AppTextMarqueeProps) => {
  if (items.length === 0) {
    return null;
  }

  return (
    <div
      className={cn(
        'overflow-hidden bg-[#121A2C] py-5 text-white',
        className,
      )}
    >
      <Marquee autoFill pauseOnHover speed={speed} gradient={false}>
        <div className="flex items-center">
          {items.map((item, index) => (
            <div
              key={`${item}-${index}`}
              className="flex items-center gap-14 px-8 sm:gap-20 sm:px-10 lg:gap-24 lg:px-12"
            >
              <span
                className={cn(
                  'whitespace-nowrap text-2xl font-semibold tracking-[-0.03em] sm:text-3xl lg:text-[34px]',
                  itemClassName,
                )}
              >
                {item}
              </span>
              <SeparatorIcon />
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};
