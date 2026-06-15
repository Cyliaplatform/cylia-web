'use client';

import AppStepper from '@/components/shared/form/AppStepper';
import { useVendorFormContext } from '@/contexts/become-a-vendor-form';


export const VendorFormStepper = () => {
  const { currentStep } = useVendorFormContext();
  

  const steps = [
    {
      number: 1,
      title: "Basic Information",
      description: "Add your basic details",
    },
    {
      number: 2,
      title: "Business Documents",
      description: "Upload business documents",
    },
  ];

  return  <div className="hidden w-full lg:max-w-[280px] lg:flex-shrink-0 lg:block">
      <AppStepper
        steps={steps}
        currentStep={currentStep}
        
      />
    </div>;
};
