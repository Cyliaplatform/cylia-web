// SocialLinks.tsx

import Image from "next/image";

import facebook from "@/public/images/logo/facebook.png";
import twitter from "@/public/images/logo/twitter.png";
import instagram from "@/public/images/logo/instagram.png";

const socials = [
  {
    icon: facebook,
    href: "#",
    alt: "Facebook",
  },
  {
    icon: twitter,
    href: "#",
    alt: "Twitter",
  },
  {
    icon: instagram,
    href: "#",
    alt: "Instagram",
  },
];

export function SocialLinks() {
  return (
    <div className="absolute  bottom-35 left-6 hidden xl:block">
      <p className="mb-5 text-lg text-muted-foreground">
        Follow Us On
      </p>

      <div className="flex gap-3">
        {socials.map((item) => (
          <a
            key={item.alt}
            href={item.href}
            className="
              flex
              h-13
              w-13
              items-center
              justify-center
              rounded-full
              bg-white
              shadow-sm
              transition

              hover:-translate-y-1
              hover:shadow-md
            "
          >
            <Image
              src={item.icon}
              alt={item.alt}
              width={28}
              height={28}
            />
          </a>
        ))}
      </div>
    </div>
  );
}