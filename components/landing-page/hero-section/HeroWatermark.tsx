import Image from 'next/image';
import watermark from '@/public/logo/cylia-watermark.png';

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
          w-[500px]
        opacity-100
          md:w-[750px]

          lg:w-[1000px]
        "
      />
    </div>
  );
}