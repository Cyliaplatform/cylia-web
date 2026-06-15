'use client';

import * as React from 'react';
import { Form, Formik } from 'formik';
import { ArrowLeft } from 'lucide-react';
import toast from 'react-hot-toast';
import { AppButton } from '@/components/shared/AppButton';
import { AppFileInput } from '@/components/shared/AppFileInput';
import { useVendorFormContext, type VendorStep2Data } from '@/contexts/become-a-vendor-form';

const EMPTY_STEP2: VendorStep2Data = {
  logo: null,
  business_license_front: null,
  business_license_back: null,
  national_id_passport_front: null,
  national_id_passport_back: null,
};

export const Step2Form: React.FC = () => {
  const { setStep2Data, prevStep, formData, resetForm } = useVendorFormContext();

  const initialValues = React.useMemo<VendorStep2Data>(
    () => formData.step2 ?? EMPTY_STEP2,
    [formData.step2],
  );

  const handleSubmit = async (
    values: VendorStep2Data,
    { setSubmitting }: { setSubmitting: (s: boolean) => void },
  ) => {
    try {
      setSubmitting(true);
      setStep2Data(values);

      if (!formData.step1) {
        toast.error('Complete step 1 before submitting.');
        return;
      }

      toast.success('Vendor application submitted successfully.');
      resetForm();
    } catch (error) {
      console.error('Error submitting step 2:', error);
      toast.error('Something went wrong while submitting the application.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="w-full min-w-0 rounded-[20px] border bg-white p-4 shadow-md sm:p-6 lg:p-8">
      <div className="mb-5 sm:mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">
          Business documents
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          Upload the core business and identity documents for verification.
        </p>
      </div>

      <Formik initialValues={initialValues} enableReinitialize onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form className="space-y-6">
            <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2">
              <div className="md:col-span-2">
                <AppFileInput
                  name="logo"
                  label="Business trademark or logo"
                  requiredAsterisk
                  previewHeight={140}
                />
              </div>

              <AppFileInput
                name="business_license_front"
                label="Business license front"
                requiredAsterisk
                previewHeight={120}
              />
              <AppFileInput
                name="business_license_back"
                label="Business license back"
                requiredAsterisk
                previewHeight={120}
              />
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

            <div className="flex flex-col-reverse gap-3 border-t pt-4 sm:flex-row sm:items-center sm:justify-end">
              <AppButton
                type="button"
                variant="secondary"
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
                Submit
              </AppButton>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
