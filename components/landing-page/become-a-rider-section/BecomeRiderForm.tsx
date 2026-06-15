'use client';

import { useDriverFormContext } from '@/contexts/become-a-rider-form';
import { Step1Form } from './Step1Form';
import { Step2Form } from './Step2Form';
import { Step3Form } from './Step3Form';

const AddDriverForm = () => {
  const { currentStep } = useDriverFormContext();

  return (
    <div className="w-full min-w-0 flex-1">
      {currentStep === 1 ? (
        <Step1Form />
      ) : currentStep === 2 ? (
        <Step2Form />
      ) : currentStep === 3 ? (
        <Step3Form />
      ) : (
        ''
      )}
    </div>
  );
};

export default AddDriverForm;
