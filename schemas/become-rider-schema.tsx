import { z } from "zod";
import type { Step1Data, Step2Data, Step3Data } from "@/contexts/become-a-rider-form";

const currentYear = new Date().getFullYear();

const requiredFile = z
  .instanceof(File)
  .nullable()
  .refine((file) => file instanceof File, {
    message: "This file is required.",
  });

const phoneSchema = z
  .string()
  .trim()
  .min(1, "Phone is required.")
  .refine((value) => /^\+?[1-9]\d{9,14}$/.test(value), {
    message: "Enter a valid phone number.",
  });

export const becomeRiderStep1Schema = z.object({
  name: z.string().trim().min(1, "Full name is required."),
  email: z
    .string()
    .trim()
    .min(1, "Email is required.")
    .email("Enter a valid email address."),
  phone: phoneSchema,
  password: z
    .string()
    .min(1, "Password is required.")
    .min(8, "Password must be at least 8 characters."),
  autoGeneratePassword: z.boolean(),
});

export const becomeRiderStep2Schema = z.object({
  profile_image: requiredFile,
  driver_license_front: requiredFile,
  driver_license_back: requiredFile,
  national_id_passport_front: requiredFile,
  national_id_passport_back: requiredFile,
  vehicle_registration_front: requiredFile,
  vehicle_registration_back: requiredFile,
});

export const becomeRiderStep3Schema = z.object({
  model_year_limit: z
    .union([z.number(), z.null()])
    .refine(
      (value) =>
        value === null ||
        (Number.isInteger(value) && value >= 1980 && value <= currentYear + 1),
      {
        message: `Model year must be between 1980 and ${currentYear + 1}.`,
      },
    ),
  is_four_wheeler: z.boolean(),
  air_conditioning: z.boolean(),
  no_cosmetic_damage: z.boolean(),
  vehicle_type_id: z.string().trim().min(1, "Vehicle type is required."),
  zone_id: z.string().trim().min(1, "Zone is required."),
  licenseNumber: z.string().trim().min(1, "License number is required."),
  vehicle_name: z.string().trim().min(1, "Vehicle name is required."),
  vehicle_colour: z.string().trim().min(1, "Vehicle color is required."),
  vehicle_no: z.string().trim().min(1, "Vehicle number is required."),
});

const mapZodErrors = (issues: z.ZodIssue[]) =>
  issues.reduce<Record<string, string>>((errors, issue) => {
    const path = issue.path.join(".");
    if (path && !errors[path]) {
      errors[path] = issue.message;
    }
    return errors;
  }, {});

export const validateBecomeRiderStep1 = (values: Step1Data) => {
  const result = becomeRiderStep1Schema.safeParse(values);
  return result.success ? {} : mapZodErrors(result.error.issues);
};

export const validateBecomeRiderStep2 = (values: Step2Data) => {
  const result = becomeRiderStep2Schema.safeParse(values);
  return result.success ? {} : mapZodErrors(result.error.issues);
};

export const validateBecomeRiderStep3 = (
  values: Step3Data & {
    vehicle_name: string;
    vehicle_colour: string;
    vehicle_no: string;
  },
) => {
  const result = becomeRiderStep3Schema.safeParse(values);
  return result.success ? {} : mapZodErrors(result.error.issues);
};
