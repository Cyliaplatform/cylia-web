import { AppButton } from '@/components/shared/AppButton';
import Image, { StaticImageData } from 'next/image';


interface DownloadAppCardProps {
  title: string;
  version: string;
  qr: StaticImageData;
  logo: StaticImageData;
}

export function DownloadAppCard({
  title,
  version,
  qr,
  logo,
}: DownloadAppCardProps) {
  return (
    <div
      className="
        relative
      

      h-85
        w-75
        overflow-hidden
        rounded-[32px]
        bg-gray-100
        p-8
      "
    >
      <h3
        className="
          text-[28px]
          font-bold
          text-dark
        "
      >
        {title}
      </h3>

      <p
        className="
          mt-2
          text-[16px]
          text-gray-500
        "
      >
        {version}
      </p>

      <div className="mt-3">
        <AppButton className='text-sm px-4 rounded-full text-dark'>
          Download App
        </AppButton>
      </div>

      <div className="mt-10">
        <div
          className="
            inline-flex
            rounded-[20px]
            
          "
        >
          <Image
            src={qr}
            alt={`${title} QR`}
            width={120}
            height={120}
            className="h-[120px] w-[120px]"
          />
        </div>
      </div>

      {/* Decorative Circle */}
      <div
        className="
          absolute
          -bottom-5
          -right-3
          flex
          h-[140px]
          w-[140px]
          items-center
          justify-center
          rounded-full
          bg-white
        "
      >
        <Image
          src={logo}
          alt={title}
          width={48}
          height={56}
          className="h-14 w-12 object-contain"
        />
      </div>
    </div>
  );
}
