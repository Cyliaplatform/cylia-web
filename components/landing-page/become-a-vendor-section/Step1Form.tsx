'use client';

import * as React from 'react';
import { Form, Formik } from 'formik';
import { AppButton } from '@/components/shared/AppButton';
import { AppCheckBox } from '@/components/shared/form/AppCheckBox';
import { AppInputField } from '@/components/shared/form/AppInput';
import { AppPhoneField } from '@/components/shared/form/AppPhoneInput';
import { AppSwitch } from '@/components/shared/form/AppSwitch';
import { useVendorFormContext, type VendorStep1Data } from '@/contexts/become-a-vendor-form';
import { AppSelect } from '@/components/shared/form/AppSelect';
import { generatePassword } from '@/lib/utils';
import { useGetZonesDropDown } from '@/hooks/api/become-a-rider';

const EMPTY_STEP1: VendorStep1Data = {
  name: '',
  email: '',
  phone: '',
  password: '',
  zone_id: '',
  autoGeneratePassword: false,
  mailLoginCredentials: false,
  changePasswordAllowed: false,
};



export const Step1Form = () => {
  const { nextStep, setStep1Data, formData } = useVendorFormContext();

  const initialValues = React.useMemo<VendorStep1Data>(
    () => formData.step1 ?? EMPTY_STEP1,
    [formData.step1],
  );
  const { data: zonesData } = useGetZonesDropDown();
 

  const zoneOptions = React.useMemo(
    () =>
      zonesData?.map((zone) => ({
        value: String(zone.id),
        key: zone.title,
      })) ?? [],
    [zonesData],
  );
  const handleSubmit = (values: VendorStep1Data) => {
    setStep1Data(values);
    nextStep();
  };

  return (
    <div className="w-full min-w-0 rounded-[20px] border bg-white p-4 shadow-md sm:p-6 lg:p-8">
      <div className="mb-5 sm:mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">
          Basic information
        </h2>
      </div>

      <Formik initialValues={initialValues} enableReinitialize onSubmit={handleSubmit}>
        {({ isSubmitting, setFieldValue, values }) => (
          <Form className="space-y-4 sm:space-y-5">
            <AppInputField
              label="Vendor name"
              name="name"
              type="text"
              placeholder="Enter vendor name"
              requiredAsterisk
            />

            <AppInputField
              label="Email"
              name="email"
              type="email"
              placeholder="Enter email address"
              requiredAsterisk
            />

            <AppPhoneField
              label="Phone"
              name="phone"
              placeholder="Enter phone number"
              requiredAsterisk
            />
          

            <AppSelect
              label="Zone"
              name="zone_id"
              options={zoneOptions}
              placeholder="Enter zone"
              requiredAsterisk
            />

            <AppInputField
              label="Password"
              name="password"
              type="text"
              placeholder="Enter password"
              requiredAsterisk
              disabled={values.autoGeneratePassword}
            />

            <div className="flex flex-col gap-4 py-1 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-10 sm:gap-y-4">
              <AppCheckBox
                name="autoGeneratePassword"
                label="Auto generate password"
                onChange={(checked) => {
                  if (checked) {
                    setFieldValue('password', generatePassword(12));
                    return;
                  }

                  setFieldValue('password', '');
                }}
              />

              <AppCheckBox
                name="mailLoginCredentials"
                label="Send login credentials by email"
              />
            </div>

            <AppSwitch
              name="changePasswordAllowed"
              label="Allow vendor password change"
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
