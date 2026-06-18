import Axios from "@/config/axios";
import {
  ApplyForVendorPayload,
  ApplyForVendorResponse,
} from "@/types/api/become-a-vendor.api";
import { ApiErrorResponse } from "@/types/api/common";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { VendorRegistrationDetails } from "@/contexts/become-a-vendor-form";

export const useApplyForVendor = (
  options?: UseMutationOptions<
    ApplyForVendorResponse,
    ApiErrorResponse,
    ApplyForVendorPayload
  >,
) => {
  return useMutation<
    ApplyForVendorResponse,
    ApiErrorResponse,
    ApplyForVendorPayload
  >({
    mutationFn: async (payload) => {
      const formData = new FormData();

      // Add all required fields
      formData.append("name", payload.name);
      formData.append("email", payload.email);
      formData.append("phone", payload.phone);
      formData.append("password", payload.password);
      formData.append("zone_id", payload.zone_id);
      formData.append(
        "allow_password_change",
        String(payload.allow_password_change),
      );

      // Add optional fields
      if (payload.vendorImage) {
        formData.append("vendorImage", payload.vendorImage);
      }
      if (payload.business_liscence_front_file) {
        formData.append(
          "business_liscence_front_file",
          payload.business_liscence_front_file,
        );
      }
      if (payload.business_liscence_back_file) {
        formData.append(
          "business_liscence_back_file",
          payload.business_liscence_back_file,
        );
      }
      if (payload.national_id_front_file) {
        formData.append(
          "national_id_front_file",
          payload.national_id_front_file,
        );
      }
      if (payload.national_id_back_file) {
        formData.append("national_id_back_file", payload.national_id_back_file);
      }
      if (payload.business_trademark_file) {
        formData.append(
          "business_trademark_file",
          payload.business_trademark_file,
        );
      }

      const res = await Axios.post<ApplyForVendorResponse>(
        "/apps/deliveries/vendors/register",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );
      return res.data;
    },

    ...options,
  });
};

export const useUpdateVendorPublic = (
  options?: UseMutationOptions<
    ApplyForVendorResponse,
    ApiErrorResponse,
    { vendorId: string; formData: FormData }
  >,
) => {
  return useMutation<
    ApplyForVendorResponse,
    ApiErrorResponse,
    { vendorId: string; formData: FormData }
  >({
    mutationFn: async ({ vendorId, formData }) => {
      const res = await Axios.patch<ApplyForVendorResponse>(
        `/apps/deliveries/vendors/public-update/${vendorId}`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );
      return res.data;
    },
    ...options,
  });
};

export const useGetVendorRegistrationDetailsByUser = (
  userId?: string,
  options?: UseQueryOptions<VendorRegistrationDetails, ApiErrorResponse>,
) => {
  return useQuery<VendorRegistrationDetails, ApiErrorResponse>({
    queryKey: ["vendor-registration-details", userId],
    queryFn: async () => {
      const res = await Axios.get<VendorRegistrationDetails>(
        `/apps/deliveries/vendors/registration-details/by-user/${userId}`,
      );
      return res.data;
    },
    enabled: Boolean(userId),
    ...options,
  });
};

export const useGetVendorRegistrationDetailsByVendor = (
  vendorId?: string,
  options?: UseQueryOptions<VendorRegistrationDetails, ApiErrorResponse>,
) => {
  return useQuery<VendorRegistrationDetails, ApiErrorResponse>({
    queryKey: ["vendor-registration-details-by-vendor", vendorId],
    queryFn: async () => {
      const res = await Axios.get<VendorRegistrationDetails>(
        `/apps/deliveries/vendors/registration-details/by-vendor/${vendorId}`,
      );
      return res.data;
    },
    enabled: Boolean(vendorId),
    ...options,
  });
};
