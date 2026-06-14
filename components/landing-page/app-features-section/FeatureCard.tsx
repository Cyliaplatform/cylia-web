import Image from 'next/image';

interface FeatureCardProps {
  image: string;
  title: string;
}

export default function FeatureCard({
  image,
  title,
}: FeatureCardProps) {
  return (
    <div className="relative flex justify-center">
      <Image
        src={image}
        alt={title}
        width={375}
        height={500}
        className="h-auto w-full max-w-[381px] object-contain"
        priority
      />
    </div>
  );
}