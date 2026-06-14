import Image from 'next/image';

import { DownloadAppCard } from './DownloadAppCard';
import { DownloadStats } from './DownloadStats';

import sticker from '@/public/logo/hero-food-text-top-right-sticker.svg';
import androidQr from '@/public/QR.png';
import playStoreLogo from '@/public/logo/playstore.png';
import applelogo from '@/public/logo/apple.png';

export function DownloadAppSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16">
        <div
          className="
            flex
            flex-col
            gap-14
            2xl:flex-row
            2xl:items-center
            2xl:justify-between
            lg:gap-14
            2xl:gap-20
          "
        >
          {/* LEFT */}
          <div
            className="
              w-full
              text-center
              2xl:max-w-[620px]
              2xl:flex-shrink-0
              2xl:text-left
            "
          >
            <div className="relative inline-block">
              <h2
                className="
                  text-[32px]
                  font-bold
                  leading-tight
                  text-dark

                  sm:text-[36px]
                  lg:text-[40px]
                "
              >
                Download the{' '}
                <span className="relative text-primary italic">
                  Best

                  <Image
                    src={sticker}
                    alt=""
                    className="
                      absolute
                      -right-6
                      -top-2
                      w-5

                      sm:w-6
                    "
                  />
                </span>

                <br />

                <span className="text-primary italic">
                  Food Delivery App
                </span>
              </h2>
            </div>

            <p
              className="
                mx-auto
                mt-6
                max-w-[520px]
                text-base
                leading-8
                text-gray-500
               

                sm:text-lg
                2xl:mx-0
              "
            >
              Fast, easy, and reliable food delivery at your fingertips.
              Order anytime, anywhere with just a tap.
            </p>

            <DownloadStats />
          </div>

          {/* RIGHT */}
          <div
            className="
              flex
              flex-col
              items-center
              gap-10
            
              lg:flex-row
              lg:justify-center

              2xl:justify-end
              lg:gap-8
            "
          >
            <DownloadAppCard
              title="For iOS"
              version="iOS 13+"
              qr={androidQr}
              logo={applelogo}
            />

            <DownloadAppCard
              title="For Android"
              version="Android 8+"
              qr={androidQr}
              logo={playStoreLogo}
            />
          </div>
        </div>
      </div>
    </section>
  );
}