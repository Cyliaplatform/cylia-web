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
      <div className="container mx-auto px-16">
        <div
          className="
            flex
            flex-col
            gap-14
            lg:flex-row
            lg:justify-between
            lg:gap-20
          "
        >
          {/* LEFT */}
          <div
            className="
              w-full
              lg:max-w-[620px]
              lg:flex-shrink-0
            "
          >
            <div className="relative inline-block">
              <h2
                className="
                  text-[40px]
                  font-bold
                  leading-[1.15]
                  text-dark
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
                      -right-7
                      -top-2
                      w-6
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
                mt-6
                max-w-[520px]
                text-lg
                leading-9
                text-gray-500
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
              gap-6
              sm:flex-row
              lg:gap-8
            "
          >
            <DownloadAppCard
              title="For iOS"
              version="iOS 13+"
              qr={androidQr}
              logo={ applelogo}
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