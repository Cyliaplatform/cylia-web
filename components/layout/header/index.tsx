"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X, ArrowRight } from "lucide-react";

import { AppButton } from "@/components/shared/AppButton";
import logo from "@/public/logo/cylia-logo.png";

export default function AppHeader() {
  const [open, setOpen] = useState(false);

  const links = [
    "Features",
    "How It Works",
    "About Us",
    "Testimonial",
    "Blog",
  ];

  return (
    <>
      {/* Header */}
      <header className="container mx-auto mt-6 px-4 sm:mt-8 lg:mt-10">
        <div className="flex h-18 items-center justify-between rounded-full bg-dark p-2">
          {/* Logo */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="overflow-hidden rounded-full bg-white">
              <Image
                src={logo}
                alt="Food Delivery"
                width={52}
                height={52}
                priority
                className="h-10 w-10 object-cover sm:h-[52px] sm:w-[52px]"
              />
            </div>

            <span className="hidden text-base font-semibold text-white sm:block lg:text-xl">
              Food Delivery.
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-6 lg:flex xl:gap-10">
            {links.map((item) => (
              <a
                key={item}
                href="#"
                className="relative text-sm text-white transition hover:text-primary"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <AppButton
              className="
                hidden
                h-10
                rounded-full
                bg-primary
                px-5
                text-sm
                font-semibold
                text-primary-purple
                transition
                hover:scale-[1.02]

                sm:flex
                sm:h-12
                sm:px-6

                lg:h-13
                lg:px-8
              "
            >
              Get the App
            </AppButton>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setOpen(true)}
              className="
                flex h-11 w-11 items-center justify-center
                rounded-full
                bg-white/10
                text-white
                backdrop-blur
                lg:hidden
              "
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`
          fixed inset-0 z-40
          bg-black/40
          backdrop-blur-sm
          transition-all duration-300
          ${open ? "opacity-100" : "pointer-events-none opacity-0"}
        `}
      />

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 right-0 z-50
          h-screen w-[88%] max-w-[360px]

          bg-dark/90
          backdrop-blur-xl

          border-l border-white/10

          transition-transform duration-500 ease-out
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex h-full flex-col">
          {/* Top */}
          <div className="flex items-center justify-between px-6 pt-8">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-white p-1">
                <Image
                  src={logo}
                  alt="logo"
                  width={42}
                  height={42}
                />
              </div>

              <div>
                <p className="text-lg font-semibold text-white">
                  Food Delivery.
                </p>
                <p className="text-xs text-white/50">
                  Fast • Fresh • Easy
                </p>
              </div>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="
                flex h-10 w-10 items-center justify-center
                rounded-full
                bg-white/10
                text-white
              "
            >
              <X size={20} />
            </button>
          </div>

          {/* Links */}
          <nav className="mt-10 flex flex-col px-4">
            {links.map((item, index) => (
              <a
                key={item}
                href="#"
                onClick={() => setOpen(false)}
                className="
                  group
                  flex items-center justify-between
                  rounded-2xl
                  px-5 py-4

                  text-white/80
                  transition

                  hover:bg-white/6
                  hover:text-primary
                "
              >
                <span className="flex items-center gap-4">
                  <span className="text-xs text-white/30">
                    0{index + 1}
                  </span>

                  {item}
                </span>

                <ArrowRight
                  size={18}
                  className="
                    opacity-0
                    transition
                    group-hover:translate-x-1
                    group-hover:opacity-100
                  "
                />
              </a>
            ))}
          </nav>

          {/* Bottom CTA */}
          <div className="mt-auto p-6">
            <div className="rounded-[28px] bg-white/5 p-4">
              <p className="mb-3 text-sm text-white/60">
                Download our app and get food faster.
              </p>

              <AppButton className="w-full rounded-full bg-primary py-3 font-semibold text-primary-purple">
                Get the App
              </AppButton>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}