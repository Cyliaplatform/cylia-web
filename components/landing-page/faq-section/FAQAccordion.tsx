'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({
  items,
}: FAQAccordionProps) {
  return (
    <Accordion
      type="single"
      collapsible
      defaultValue="item-1"
      className="space-y-5"
    >
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          value={`item-${index}`}
          className="overflow-hidden rounded-[20px] border border-white/10 bg-white/[0.06] px-7"
        >
          <AccordionTrigger
            className="
              py-8
              text-left
              text-xl
              font-medium
              text-white
              hover:no-underline
              [&>svg]:h-8
              [&>svg]:w-8
            "
          >
            {item.question}
          </AccordionTrigger>

          <AccordionContent className="border-t border-white/10 pt-6 pb-8 text-lg leading-relaxed text-gray-300">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}