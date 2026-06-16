import { z } from "zod";
import type {
  VendorStep1Data,
  VendorStep2Data,
} from "@/contexts/become-a-vendor-form";

const requiredFile = z
  .instanceof(File)
  .nullish()
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

export const becomeVendorStep1Schema = z.object({
  name: z.string().trim().min(1, "Vendor name is required."),
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
  zone_id: z.string().trim().min(1, "Zone is required."),
  autoGeneratePassword: z.boolean().optional(),
  mailLoginCredentials: z.boolean().optional(),
  changePasswordAllowed: z.boolean().optional(),
});

export const becomeVendorStep2Schema = z.object({
  logo: requiredFile,
  business_license_front: requiredFile,
  business_license_back: requiredFile,
  national_id_passport_front: requiredFile,
  national_id_passport_back: requiredFile,
});

const mapZodErrors = (issues: z.ZodIssue[]) =>
  issues.reduce<Record<string, string>>((errors, issue) => {
    const path = issue.path.join(".");
    if (path && !errors[path]) {
      errors[path] = issue.message;
    }
    return errors;
  }, {});

export const validateBecomeVendorStep1 = (values: VendorStep1Data) => {
  const result = becomeVendorStep1Schema.safeParse(values);
  return result.success ? {} : mapZodErrors(result.error.issues);
};

export const validateBecomeVendorStep2 = (values: VendorStep2Data) => {
  const result = becomeVendorStep2Schema.safeParse(values);
  return result.success ? {} : mapZodErrors(result.error.issues);
};
