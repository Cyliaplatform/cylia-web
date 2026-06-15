'use client';

import AppStepper from '@/components/shared/form/AppStepper';
import { useDriverFormContext } from '@/contexts/become-a-rider-form';

const DriverFormStepper = () => {
  const { currentStep } = useDriverFormContext();

  const steps = [
    {
      number: 1,
      title: 'Personal Information',
      description: 'Add your basic details',
    },
    {
      number: 2,
      title: 'Documents Upload',
      description: 'Upload required documents',
    },
    {
      number: 3,
      title: 'Vehicle Requirements',
      description: 'Provide your vehicle details',
    },
  ];

  return (
    <div className="hidden w-full lg:max-w-[280px] lg:flex-shrink-0 lg:block">
      <AppStepper
        steps={steps}
        currentStep={currentStep}
       
      />
    </div>
  );
};

export default DriverFormStepper;
