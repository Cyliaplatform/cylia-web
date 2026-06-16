'use client';

import { ArrowLeft } from 'lucide-react';
import { AppButton } from '@/components/shared/AppButton';
import { AppFileInput } from '@/components/shared/AppFileInput';
import { useDriverFormContext } from '@/contexts/become-a-rider-form';
import { validateBecomeRiderStep2 } from '@/schemas/become-rider-schema';
import { Form, Formik } from 'formik';
import * as React from 'react';

type Step2Values = {
  driver_license_front: File | null;
  driver_license_back: File | null;
  national_id_passport_front: File | null;
  national_id_passport_back: File | null;
  vehicle_registration_front: File | null;
  vehicle_registration_back: File | null;
  profile_image: File | null;
};

const EMPTY_STEP2: Step2Values = {
  driver_license_front: null,
  driver_license_back: null,
  national_id_passport_front: null,
  national_id_passport_back: null,
  vehicle_registration_front: null,
  vehicle_registration_back: null,
  profile_image: null,
};

export const Step2Form: React.FC = () => {
  const { setStep2Data, nextStep, prevStep, formData } = useDriverFormContext();

  const initialValues = React.useMemo<Step2Values>(
    () => (formData.step2 as Step2Values | null) ?? EMPTY_STEP2,
    [formData.step2],
  );

  const handleSubmit = async (
    values: Step2Values,
    { setSubmitting }: { setSubmitting: (s: boolean) => void },
  ) => {
    try {
      setSubmitting(true);
      setStep2Data(values);
      nextStep();
    } catch (e) {
      console.error('Error submitting step 2:', e);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="w-full min-w-0 rounded-[20px] border bg-white p-4 shadow-md sm:p-6 lg:p-8">
      <div className="mb-5 sm:mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">
          Upload your documents
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Add clear images of the required rider and vehicle documents.
        </p>
      </div>

      <Formik
        initialValues={initialValues}
        enableReinitialize // ← important
        validate={validateBecomeRiderStep2}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-6">
              
              <AppFileInput
                name="profile_image"
                label="Profile"
                requiredAsterisk
                previewHeight={120}
              />
            
            <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2">
              <AppFileInput
                name="driver_license_front"
                label="Driver license front"
                requiredAsterisk
                previewHeight={120}
              />
              <AppFileInput
                name="driver_license_back"
                label="Driver license back"
                requiredAsterisk
                previewHeight={120}
              />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2">
              <AppFileInput
                name="national_id_passport_front"
                label="National ID or passport front"
                requiredAsterisk
                previewHeight={120}
              />
              <AppFileInput
                name="national_id_passport_back"
                label="National ID or passport back"
                requiredAsterisk
                previewHeight={120}
              />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2">
              <AppFileInput
                name="vehicle_registration_front"
                label="Vehicle registration front"
                requiredAsterisk
                previewHeight={120}
              />
              <AppFileInput
                name="vehicle_registration_back"
                label="Vehicle registration back"
                requiredAsterisk
                previewHeight={120}
              />
            </div>

          

            <div className="flex flex-col-reverse gap-3 border-t pt-4 sm:flex-row sm:items-center sm:justify-end">
              <AppButton
                type="button"
                variant="secondary"
                isLoading={isSubmitting}
                disabled={isSubmitting}
                className="mt-1 w-full rounded-[12px] px-6 sm:mt-4 sm:w-auto sm:min-w-[160px] sm:px-10 md:px-12"
                onClick={prevStep}
                leftIcon={<ArrowLeft className="h-4 w-4" />}
              >
                Back
              </AppButton>
              <AppButton
                type="submit"
                isLoading={isSubmitting}
                disabled={isSubmitting}
                className="w-full rounded-[12px] px-6 sm:mt-4 sm:w-auto sm:min-w-[160px] sm:px-10 md:px-12"
              >
                Next
              </AppButton>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
