'use client';

import { useVendorFormContext } from "@/contexts/become-a-vendor-form";
import { Step1Form } from "./Step1Form";
import { Step2Form } from "./Step2Form";

export default function BecomeVendorForm() {
  const { currentStep } = useVendorFormContext();

  return (
    <div className="flex-1">
      {currentStep === 1 ? (
        <Step1Form />
      ) : currentStep === 2 ? (
        <Step2Form />
      ) : null}
    </div>
  );
};
