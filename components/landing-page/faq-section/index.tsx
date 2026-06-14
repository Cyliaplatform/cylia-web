import FAQAccordion from './FAQAccordion';
import ContactCards from './ContactCards';
import { faqItems } from './data';

export default function FAQSection() {
  return (
    <section className="bg-[#111827] py-24">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="h-[2px] w-6 bg-primary" />

            <p className="text-xl font-medium text-white">
              FAQs
            </p>
          </div>

          <h2 className="text-4xl font-bold leading-tight text-white md:text-[40px]">
            Frequently{' '}
            <span className="text-primary italic">
              Asked Questions
            </span>
          </h2>
        </div>

        {/* Bottom Section */}
        <div className="grid gap-8 lg:grid-cols-[1.8fr_0.85fr]">
          {/* Left */}
          <FAQAccordion items={faqItems} />

          {/* Right */}
          <ContactCards />
        </div>
      </div>
    </section>
  );
}