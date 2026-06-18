"use client";

import * as React from "react";
import { useSearchParams } from "next/navigation";
import {
  Step3Data,
  useDriverFormContext,
} from "@/contexts/become-a-rider-form";
import { Form, Formik } from "formik";
import { ArrowLeft } from "lucide-react";
import toast from "react-hot-toast";
import { AppButton } from "@/components/shared/AppButton";
import { AppInputField } from "@/components/shared/form/AppInput";
import { AppSwitch } from "@/components/shared/form/AppSwitch";
import { AppSelect } from "@/components/shared/form/AppSelect";
import {
  useApplyForRider,
  useUpdateRiderPublic,
  useGetVehicleTypesDropDown,
  useGetZonesDropDown,
} from "@/hooks/api/become-a-rider";
import { validateBecomeRiderStep3 } from "@/schemas/become-rider-schema";
import { BecomeRiderPayload } from "@/types/api/become-a-rider.api";
import { handleApiError } from "@/lib/toast-error";
import { ApiErrorResponse } from "@/types/api/common";

type Step3Values = Step3Data & {
  vehicle_name: string;
  vehicle_colour: string;
  vehicle_no: string;
};

const EMPTY_STEP3: Step3Values = {
  model_year_limit: null,
  is_four_wheeler: false,
  air_conditioning: false,
  no_cosmetic_damage: false,
  vehicle_type_id: "",
  zone_id: "",
  licenseNumber: "",
  vehicle_name: "",
  vehicle_colour: "",
  vehicle_no: "",
};

export const Step3Form: React.FC = () => {
  const { resetForm, formData, setStep3Data, prevStep } =
    useDriverFormContext();
  const searchParams = useSearchParams();
  const riderId = searchParams.get("riderId");
  const isEditMode = Boolean(riderId);

  const initialValues = React.useMemo<Step3Values>(
    () => (formData.step3 as Step3Values | null) ?? EMPTY_STEP3,
    [formData.step3],
  );

  const { data: zonesData } = useGetZonesDropDown();
  const { data: vehicleType } = useGetVehicleTypesDropDown();
  const { mutateAsync: ApplyForRider, isPending: isCreating } = useApplyForRider();
  const { mutateAsync: UpdateRider, isPending: isUpdating } = useUpdateRiderPublic();

  const zoneOptions = React.useMemo(
    () =>
      zonesData?.map((zone) => ({
        value: String(zone.id),
        key: zone.title,
      })) ?? [],
    [zonesData],
  );
  const vehicleOptions = React.useMemo(
    () =>
      vehicleType?.map((zone) => ({
        value: String(zone.id),
        key: zone.name,
      })) ?? [],
    [vehicleType],
  );

  const handleSubmit = async (
    values: Step3Values,
    { setSubmitting }: { setSubmitting: (s: boolean) => void },
  ) => {
    
    try {
      setSubmitting(true);

      if (!formData.step1) {
        toast.error("Complete step 1 before submitting.");
        return;
      }
      if (!formData.step2) {
        toast.error("Complete step 2 before submitting.");
        return;
      }

      const missingFile =
        !formData.step2.driver_license_front ||
        !formData.step2.driver_license_back ||
        !formData.step2.national_id_passport_front ||
        !formData.step2.national_id_passport_back ||
        !formData.step2.vehicle_registration_front ||
        !formData.step2.vehicle_registration_back ||
        !formData.step2.profile_image;

      if (missingFile && !isEditMode) {
        toast.error("Upload all required documents before submitting.");
        return;
      }

      setStep3Data(values);

      const step1Payload = {
        name: formData.step1.name,
        email: formData.step1.email,
        phone: formData.step1.phone,
        password: formData.step1.password,
      };
      const {
        profile_image,
        driver_license_front,
        driver_license_back,
        national_id_passport_front,
        national_id_passport_back,
        vehicle_registration_front,
        vehicle_registration_back,
      } = formData.step2;
      const isFile = (value: unknown): value is File => value instanceof File;
      const toFile = (value: File | null | undefined) =>
        isFile(value) ? value : undefined;

      const payload: BecomeRiderPayload = {
        ...step1Payload,
        ...values,
        model_year_limit: values.model_year_limit ?? 0,
        profile_image: toFile(profile_image),
        driver_license_front: toFile(driver_license_front),
        driver_license_back: toFile(driver_license_back),
        national_id_passport_front: toFile(national_id_passport_front),
        national_id_passport_back: toFile(national_id_passport_back),
        vehicle_registration_front: toFile(vehicle_registration_front),
        vehicle_registration_back: toFile(vehicle_registration_back),
      };

      const formDataPayload = new FormData();
      formDataPayload.append('name', formData.step1.name);
      formDataPayload.append('email', formData.step1.email);
      formDataPayload.append('phone', formData.step1.phone);
      if (formData.step1.password) {
        formDataPayload.append('password', formData.step1.password);
      }
      formDataPayload.append('zone_id', values.zone_id);
      formDataPayload.append(
        'availabilityStatus',
        formData.registrationDetails?.availabilityStatus ?? 'offline',
      );
      formDataPayload.append('vehicle_name', values.vehicle_name);
      formDataPayload.append('vehicle_colour', values.vehicle_colour);
      formDataPayload.append('vehicle_no', values.vehicle_no);
      formDataPayload.append('model_year', String(values.model_year_limit ?? 0));
      formDataPayload.append('is_four_wheeler', String(values.is_four_wheeler));
      formDataPayload.append('air_conditioning', String(values.air_conditioning));
      formDataPayload.append('no_cosmetic_damage', String(values.no_cosmetic_damage));
      if (values.vehicle_type_id) {
        formDataPayload.append('type', values.vehicle_type_id);
      }

      if (payload.profile_image) formDataPayload.append('profile_image', payload.profile_image);
      if (payload.driver_license_front) formDataPayload.append('driver_license_front', payload.driver_license_front);
      if (payload.driver_license_back) formDataPayload.append('driver_license_back', payload.driver_license_back);
      if (payload.national_id_passport_front) {
        formDataPayload.append('national_id_passport_front', payload.national_id_passport_front);
      }
      if (payload.national_id_passport_back) {
        formDataPayload.append('national_id_passport_back', payload.national_id_passport_back);
      }
      if (payload.vehicle_registration_front) {
        formDataPayload.append('vehicle_registration_front', payload.vehicle_registration_front);
      }
      if (payload.vehicle_registration_back) {
        formDataPayload.append('vehicle_registration_back', payload.vehicle_registration_back);
      }

      const response = riderId
        ? await UpdateRider({ riderId, formData: formDataPayload })
        : await ApplyForRider(payload);

      toast.success(response.message || "Rider application submitted successfully.");
      if (!riderId) {
        resetForm();
      }
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
          Vehicle details
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Share a few details about the vehicle you will use for deliveries.
        </p>
      </div>

      <Formik
        initialValues={initialValues}
        enableReinitialize
        validate={validateBecomeRiderStep3}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, setFieldValue, values }) => (
          <Form className="space-y-6">
            <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2">
              <AppInputField
                label="Model year"
                name="model_year_limit"
                type="number"
                inputMode="numeric"
                placeholder="Enter model year"
                onChange={(e) => {
                  const v = e.target.value;
                  setFieldValue("model_year_limit", v === "" ? "" : Number(v));
                }}
                value={
                  values.model_year_limit === null ||
                  values.model_year_limit === undefined
                    ? ""
                    : String(values.model_year_limit)
                }
              />
              <AppInputField
                label="License number"
                name="licenseNumber"
                type="text"
                placeholder="Enter license number"
                requiredAsterisk
              />
              <AppInputField
                label="Vehicle name"
                name="vehicle_name"
                type="text"
                placeholder="Enter vehicle name"
                requiredAsterisk
              />
              <AppInputField
                label="Vehicle color"
                name="vehicle_colour"
                type="text"
                placeholder="Enter vehicle color"
                requiredAsterisk
              />
              <AppInputField
                label="Vehicle number"
                name="vehicle_no"
                type="text"
                placeholder="Enter vehicle number"
                requiredAsterisk
              />
              <AppSelect
                label="Vehicle Type"
                name="vehicle_type_id"
                options={vehicleOptions}
                placeholder="Enter vehicle type"
                requiredAsterisk
              />
              <AppSelect
                label="Zone"
                name="zone_id"
                options={zoneOptions}
                placeholder="Enter zone ID"
                requiredAsterisk
              />{" "}
            </div>

            <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2">
              <AppSwitch name="is_four_wheeler" label="Is four wheeler" />
              <AppSwitch name="air_conditioning" label="Air conditioning" />
              <AppSwitch name="no_cosmetic_damage" label="No cosmetic damage" />
            </div>

            <div className="flex flex-col-reverse gap-3 border-t pt-4 sm:flex-row sm:items-center sm:justify-end">
              <AppButton
                type="button"
                variant="secondary"
                disabled={isSubmitting}
                className="mt-1 w-full rounded-[12px] px-6 sm:mt-4 sm:w-auto sm:min-w-[160px] sm:px-10 md:px-12"
                onClick={() => {
                  setStep3Data(values);
                  prevStep();
                }}
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
