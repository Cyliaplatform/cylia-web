'use client';

import { AppButton } from '@/components/shared/AppButton';
import { AppInputField } from '@/components/shared/form/AppInput';
import { AppPhoneField } from '@/components/shared/form/AppPhoneInput';
import { Step1Data, useDriverFormContext } from '@/contexts/become-a-rider-form';
import { Form, Formik } from 'formik';
import * as React from 'react';


const EMPTY_STEP1: Step1Data = {
  name: '',
  email: '',
  phone: '',
};

export const Step1Form: React.FC = () => {
  const { nextStep, setStep1Data, formData } = useDriverFormContext();

  const initialValues = React.useMemo<Step1Data>(
    () => formData.step1 ?? EMPTY_STEP1,
    [formData.step1],
  );

  const handleSubmit = (values: Step1Data) => {
    setStep1Data(values);
    nextStep();
  };

  return (
    <div className="w-full min-w-0 rounded-[20px] border bg-white p-4 shadow-md sm:p-6 lg:p-8">
      <div className="mb-5 sm:mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">Basic Information</h2>
        {/* <p className="text-sm text-gray-500 mt-1">Description</p> */}
      </div>

      <Formik
        initialValues={initialValues}
        enableReinitialize
        // validationSchema={DriverFromStep1Schema(tSchema)}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-4 sm:space-y-5">
            <AppInputField
              label="Full Name"
              name="name"
              type="text"
              placeholder="Enter your full name"
              requiredAsterisk
            />

            <AppInputField
              label="Email"
              name="email"
              type="email"
              placeholder="Enter your email"
              requiredAsterisk
            />

            <AppPhoneField
              label="Phone"
              name="phone"
              placeholder="Enter your phone number"
              requiredAsterisk
            />

            <div className="flex justify-stretch pt-2 sm:justify-end">
              <AppButton
                type="submit"
                isLoading={isSubmitting}
                disabled={isSubmitting}
                className="mt-4 h-10 w-full rounded-[12px] px-6 sm:mt-6 sm:w-auto sm:min-w-[160px] sm:px-12"
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
