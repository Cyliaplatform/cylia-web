import Image from 'next/image';
import watermark from '@/public/images/logo/cylia-watermark.png';

export function HeroWatermark() {
  return (
    <div
      className="
      
        pointer-events-none
        absolute
        inset-0
        flex
        items-center
        justify-center
        select-none
        z-0
      "
    >
      <Image
        src={watermark}
        alt="Cylia watermark"
        priority
        className="
          w-125
          md:w-187.5s
          lg:w-250

        "
      />
    </div>
  );
}