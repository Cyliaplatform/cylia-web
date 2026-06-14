import Image from 'next/image';

export default function ContactCards() {
  return (
    <div className="flex flex-col gap-6">
      {/* Contact Card */}
      <div className="rounded-[24px] bg-primary p-10 text-center">
        <div className="mb-8 flex justify-center">
          <Image
            src="/images/icons/contact-icon.png"
            alt="Contact"
            width={64}
            height={64}
          />
        </div>

        <h3 className="mb-4 text-2xl font-semibold text-[#111827]">
          You have different questions?
        </h3>

        <p className="mb-8 text-base leading-relaxed text-[#111827]/90">
          Our team will answer all your questions. We ensure a quick
          response.
        </p>

        <button className="rounded-full bg-primary-purple px-10 py-4 text-lg font-semibold text-white transition hover:opacity-90">
          Contact Us
        </button>
      </div>

      {/* Support Card */}
      <div className="rounded-[24px] border border-white/10 bg-white/[0.06] p-8">
        <div className="flex items-center gap-5">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary">
            <Image
              src="/images/icons/phone-icon.png"
              alt="Phone"
              width={28}
              height={28}
            />
          </div>

          <div>
            <p className="text-base text-gray-300">
              We're Here to Help
            </p>

            <h4 className="text-2xl font-semibold text-white">
              24/7 Service
            </h4>

            <p className="mt-2 text-xl text-gray-300">
              (000) 000-0000
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}