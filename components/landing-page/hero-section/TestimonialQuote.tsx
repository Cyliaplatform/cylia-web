import { Quote } from 'lucide-react';

export function TestimonialQuote() {
  return (
    <div
      className="
        absolute
        right-[2%]
        top-[10%]
        hidden
        max-w-75
        xl:block
      "
    >
      <div className="flex flex-col items-end">
        <Quote
          className="
            mb-4
            h-10
            w-10
            fill-primary-purple
            text-primary-purple
            rotate-180
            font-light
          "
          strokeWidth={1.5}
        />

        <p
          className="
            text-right
            text-[18px]
            leading-[1.6]
            font-medium
            text-gray-500
          "
        >
          Outstanding Food Delivery
          <br />
          Experience - Highly
          <br />
          Recommended!
        </p>
      </div>
    </div>
  );
}