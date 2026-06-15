'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Send } from 'lucide-react';
import { AppInputField } from '@/components/shared/form/AppInput';
import { AppButton } from '@/components/shared/AppButton';


export function AppFooter() {
  return (
    <footer className="w-full">
      {/* Main Footer */}
      <div className="bg-[#111827]">
        <div className="mx-auto container px-6 py-14 lg:px-10 lg:py-20">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-4">
            {/* Brand */}
            <div className="max-w-md">
              <div className="mb-8 flex items-center gap-4">
                <Image
                  src="/images/logo/cylia-logo.png"
                  alt="Logo"
                  width={52}
                  height={52}
                  className="h-10 w-10 sm:h-13 sm:w-13 rounded-full object-cover"
                />

                <h3 className="text-xl font-semibold text-white">
                  Food Delivery.
                </h3>
              </div>

              <p className="mb-8 text-base leading-9 text-gray-300">
                Enjoy fast and reliable food delivery from top restaurants.
                Browse a wide range of cuisines, place your order easily, and
                get fresh meals delivered to your doorstep.
              </p>

              <div className="flex items-center gap-4">
                <Link href="#">
                  <Image
                    src="/images/logo/facebook.png"
                    alt="Facebook"
                    width={40}
                    height={40}
                    className="  bg-primary p-2 rounded-full"
                  />
                </Link>

                <Link href="#">
                  <Image
                    src="/images/logo/twitter.png"
                    alt="Twitter"
                    width={40}
                    height={40}
                    className=" bg-primary p-2 rounded-full"
                  />
                </Link>

                <Link href="#">
                  <Image
                    src="/images/logo/instagram.png"
                    alt="Instagram"
                    width={40}
                    height={40}
                    className=" bg-primary p-2 rounded-full"
                  />
                </Link>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="mb-8 text-xl font-semibold text-primary">
                Navigation
              </h3>

              <div className="flex flex-col gap-5">
                <Link
                  href="#features"
                  className="text-base text-gray-300 transition hover:text-white"
                >
                  Features
                </Link>

                <Link
                  href="#how-it-works"
                  className="text-base text-gray-300 transition hover:text-white"
                >
                  How it Works
                </Link>

                <Link
                  href="#about"
                  className="text-base text-gray-300 transition hover:text-white"
                >
                  About Us
                </Link>

                <Link
                  href="#testimonial"
                  className="text-base text-gray-300 transition hover:text-white"
                >
                  Testimonial
                </Link>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="mb-8 text-xl font-semibold text-primary">
                Contact
              </h3>

              <div className="flex flex-col gap-6">
                <p className="text-base text-gray-300">(000) 000-0000</p>

                <p className="text-base text-gray-300">
                  example@xyz.com
                </p>

                <p className="max-w-[220px] text-base leading-8 text-gray-300">
                  2464 Royal Ln. Mesa,
                  <br />
                  New Jersey 45463
                </p>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="mb-8 text-xl font-semibold text-primary">
                Get the latest information
              </h3>

              <div className="relative max-w-md">
                <AppInputField
                  placeholder="Email address"
                  className="h-12 rounded-xl border border-gray-700 bg-gray-800 pr-16 text-white placeholder:text-gray-400"
                />

                <AppButton
                  type="button"
                  className="absolute right-0 top-0 flex h-12 w-14 items-center justify-center rounded-l-none rounded-r-xl bg-primary transition hover:opacity-90"
                >
                  <Send className="h-5 w-5  text-black" />
                </AppButton>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-primary">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 py-5 text-center lg:flex-row lg:px-10">
          <p className="text-base text-black">
            Copyright © 2026 Food Delivery App Cylia. All Rights Reserved.
          </p>

          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <Link
              href="/terms"
              className="text-base text-black hover:underline"
            >
              User Terms & Conditions
            </Link>

            <span className="hidden h-6 w-px bg-black/40 sm:block" />

            <Link
              href="/privacy-policy"
              className="text-base text-black hover:underline"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}