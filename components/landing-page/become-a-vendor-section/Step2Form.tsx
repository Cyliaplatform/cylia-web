'use client';

import * as React from 'react';
import { Form, Formik } from 'formik';
import { ArrowLeft } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import toast from 'react-hot-toast';
import { AppButton } from '@/components/shared/AppButton';
import { AppFileInput } from '@/components/shared/AppFileInput';
import { useVendorFormContext, type VendorStep2Data } from '@/contexts/become-a-vendor-form';
import { useApplyForVendor, useUpdateVendorPublic } from '@/hooks/api/become-a-vendor';
import { validateBecomeVendorStep2 } from '@/schemas/become-vendor-schema';
import type { ApplyForVendorPayload } from '@/types/api/become-a-vendor.api';
import { handleApiError } from '@/lib/toast-error';
import { ApiErrorResponse } from '@/types/api/common';

const EMPTY_STEP2: VendorStep2Data = {
  logo: null,
  business_license_front: null,
  business_license_back: null,
  national_id_passport_front: null,
  national_id_passport_back: null,
};

export const Step2Form: React.FC = () => {
  const { setStep2Data, prevStep, formData, resetForm } = useVendorFormContext();
  const searchParams = useSearchParams();
  const vendorId = searchParams.get('vendorId');
  const registrationDetails = formData.registrationDetails;
  const isEditMode = Boolean(vendorId);

  const initialValues = React.useMemo<VendorStep2Data>(
    () => formData.step2 ?? EMPTY_STEP2,
    [formData.step2],
  );
  const { mutateAsync: ApplyForVendor, isPending: isCreating } = useApplyForVendor();
  const { mutateAsync: UpdateVendor, isPending: isUpdating } = useUpdateVendorPublic();
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

      const missingFile =
        !values.logo ||
        !values.business_license_front ||
        !values.business_license_back ||
        !values.national_id_passport_front ||
        !values.national_id_passport_back;

      if (missingFile) {
        toast.error('Upload all required documents before submitting.');
        return;
      }

      const isFile = (value: unknown): value is File => value instanceof File;
      const toFile = (value: File | string | null | undefined) =>
        isFile(value) ? value : undefined;

      const payload: ApplyForVendorPayload = {
        name: formData.step1.name,
        email: formData.step1.email,
        phone: formData.step1.phone,
        password: formData.step1.password,
        zone_id: formData.step1.zone_id,
        allow_password_change: formData.step1.changePasswordAllowed ?? false,
        vendorImage: toFile(values.logo),
        business_liscence_front_file: toFile(values.business_license_front),
        business_liscence_back_file: toFile(values.business_license_back),
        national_id_front_file: toFile(values.national_id_passport_front),
        national_id_back_file: toFile(values.national_id_passport_back),
        business_trademark_file: toFile(values.logo),
      };

      const formDataPayload = new FormData();
      formDataPayload.append('name', payload.name);
      formDataPayload.append('email', payload.email);
      formDataPayload.append('phone', payload.phone);
      if (payload.password) formDataPayload.append('password', payload.password);
      formDataPayload.append('zone_id', payload.zone_id);
      formDataPayload.append('approve_all_stores', String(false));
      if (isFile(payload.vendorImage)) formDataPayload.append('profile', payload.vendorImage);
      if (isFile(payload.business_liscence_front_file)) {
        formDataPayload.append('business_liscence_front_file', payload.business_liscence_front_file);
      }
      if (isFile(payload.business_liscence_back_file)) {
        formDataPayload.append('business_liscence_back_file', payload.business_liscence_back_file);
      }
      if (isFile(payload.national_id_front_file)) {
        formDataPayload.append('national_id_front_file', payload.national_id_front_file);
      }
      if (isFile(payload.national_id_back_file)) {
        formDataPayload.append('national_id_back_file', payload.national_id_back_file);
      }
      if (isFile(payload.business_trademark_file)) {
        formDataPayload.append('business_trademark_file', payload.business_trademark_file);
      }

      if (vendorId) {
        await UpdateVendor({ vendorId, formData: formDataPayload });
      } else {
        await ApplyForVendor(payload);
      }

      toast.success('Vendor application submitted successfully.');
      resetForm();
    } catch (error) {
       handleApiError(error as ApiErrorResponse)
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

      <Formik
        initialValues={initialValues}
        enableReinitialize
        validate={(values) => {
          if (isEditMode) {
            return {};
          }
          return validateBecomeVendorStep2(values);
        }}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-6">
            <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2">
              <div className="md:col-span-2">
                <AppFileInput
                  name="logo"
                  label="Business trademark or logo"
                  requiredAsterisk
                  previewHeight={140}
                  previewUrl={
                    (formData.step2?.logo as string | undefined) ??
                    registrationDetails?.profilePhoto ??
                    undefined
                  }
                />
              </div>

              <AppFileInput
                name="business_license_front"
                label="Business license front"
                requiredAsterisk
                previewHeight={120}
                previewUrl={
                  (formData.step2?.business_license_front as string | undefined) ??
                  registrationDetails?.businessLicenceFront ??
                  undefined
                }
              />
              <AppFileInput
                name="business_license_back"
                label="Business license back"
                requiredAsterisk
                previewHeight={120}
                previewUrl={
                  (formData.step2?.business_license_back as string | undefined) ??
                  registrationDetails?.businessLicenceBack ??
                  undefined
                }
              />
              <AppFileInput
                name="national_id_passport_front"
                label="National ID or passport front"
                requiredAsterisk
                previewHeight={120}
                previewUrl={
                  (formData.step2?.national_id_passport_front as string | undefined) ??
                  registrationDetails?.nationalIdFront ??
                  undefined
                }
              />
              <AppFileInput
                name="national_id_passport_back"
                label="National ID or passport back"
                requiredAsterisk
                previewHeight={120}
                previewUrl={
                  (formData.step2?.national_id_passport_back as string | undefined) ??
                  registrationDetails?.nationalIdBack ??
                  undefined
                }
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
                isLoading={isSubmitting || isCreating || isUpdating}
                disabled={isSubmitting || isCreating || isUpdating}
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
