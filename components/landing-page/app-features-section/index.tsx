import { AppTextMarquee } from '@/components/shared/AppTextMarquee';
import FeatureCard from './FeatureCard';
import { featureCards } from './data';

export default function FeaturesSection() {
  return (
    <section className="relative overflow-hidden">
       <div >
        <AppTextMarquee
          items={[
            'Bakery',
            'Healthy Food',
            'Cake',
            'Beverages',
            'Ice Creams',
            'Dessert',
          ]}
        />
      </div>
      {/* Top Dark Background */}
      <div className="absolute inset-x-0 top-0 h-[75%] bg-[#111827]" />

      {/* Bottom White Background */}
      <div className="absolute inset-x-0 bottom-0 h-[25%] bg-white" />

      <div className="relative z-10 container mx-auto px-4 py-24">
        {/* Top Section */}
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="h-[2px] w-6 bg-primary" />

            <p className="text-xl font-medium text-white">
              Key Features
            </p>
          </div>

          <h2 className="text-4xl font-bold leading-tight text-white md:text-[40px]">
            Everything{' '}
            <span className="text-primary italic">
              You Need
            </span>
            <br />
            <span className="text-primary italic">
              in One Food App
            </span>
          </h2>
        </div>

        {/* Bottom Section */}
        <div className="grid gap-8 lg:grid-cols-3">
          {featureCards.map((feature) => (
            <FeatureCard
              key={feature.title}
              image={feature.image}
              title={feature.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}