import Image from 'next/image';

interface BenefitCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function BenefitCard({
  icon,
  title,
  description,
}: BenefitCardProps) {
  return (
    <div className="group relative flex h-[257px] flex-col rounded-[20px] border border-white/10 bg-white/[0.06] p-7 backdrop-blur-sm transition-all duration-300 hover:border-primary/30">
      {/* Glow Effect */}
      <div className="absolute left-0 top-12 h-12 w-1 rounded-r-full bg-primary shadow-[0_0_18px_4px_theme(colors.primary.DEFAULT)]" />

      {/* Icon */}
      <div className="mb-7 flex h-20 w-20 items-center justify-center rounded-full bg-white/10">
        <Image
          src={icon}
          alt={title}
          width={40}
          height={40}
          className="object-contain"
        />
      </div>

      {/* Content */}
      <div className="space-y-4">
        <h3 className="text-[22px] font-semibold leading-tight text-white md:text-[24px]">
          {title}
        </h3>

        <p className="text-lg leading-relaxed text-gray-300">
          {description}
        </p>
      </div>
    </div>
  );
}