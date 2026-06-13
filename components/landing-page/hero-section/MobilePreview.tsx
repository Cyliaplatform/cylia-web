import Image from 'next/image';
import mobileMockup from '@/public/Group 2147223552.png';

export function MobilePreview() {
  return (
    <div className="relative z-10">
      <Image
        src={mobileMockup}
        alt="Food Delivery App"
        priority
        className="w-[280px] lg:w-[420px]"
      />
    </div>
  );
}