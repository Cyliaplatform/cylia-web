import Axios from "@/config/axios";
import { BecomeRiderPayload, BecomeRiderResponse, VehicleType, Zone } from "@/types/api/become-a-rider.api";
import { ApiErrorResponse } from "@/types/api/common";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { RiderRegistrationDetails } from "@/contexts/become-a-rider-form";

export const useApplyForRider = (
    options?: UseMutationOptions<
        BecomeRiderResponse,
        ApiErrorResponse,
        BecomeRiderPayload
    >
) => {
    return useMutation<
        BecomeRiderResponse,
        ApiErrorResponse,
        BecomeRiderPayload
    >({
        mutationFn: async (payload) => {
            const formData = new FormData();

            // Add all required fields
            formData.append('name', payload.name);
            formData.append('email', payload.email);
            formData.append('phone', payload.phone);
            formData.append('password', payload.password);
            if (payload.city) formData.append('city', payload.city);
            formData.append('zone_id', payload.zone_id);
            if (payload.vehicle_type_id) formData.append('vehicle_type_id', payload.vehicle_type_id);
            formData.append('model_year_limit', String(payload.model_year_limit));
            formData.append('licenseNumber', payload.licenseNumber);
            formData.append('vehicle_name', payload.vehicle_name);
            formData.append('vehicle_colour', payload.vehicle_colour);
            formData.append('vehicle_no', payload.vehicle_no);

            // Add optional fields
            if (payload.is_four_wheeler !== undefined) {
                formData.append('is_four_wheeler', String(payload.is_four_wheeler));
            }
            if (payload.air_conditioning !== undefined) {
                formData.append('air_conditioning', String(payload.air_conditioning));
            }
            if (payload.no_cosmetic_damage !== undefined) {
                formData.append('no_cosmetic_damage', String(payload.no_cosmetic_damage));
            }
            if (payload.profile_image) {
                formData.append('profile_image', payload.profile_image);
            }
            if (payload.driver_license_front) {
                formData.append('driver_license_front', payload.driver_license_front);
            }
            if (payload.driver_license_back) {
                formData.append('driver_license_back', payload.driver_license_back);
            }
            if (payload.national_id_passport_front) {
                formData.append('national_id_passport_front', payload.national_id_passport_front);
            }
            if (payload.national_id_passport_back) {
                formData.append('national_id_passport_back', payload.national_id_passport_back);
            }
            if (payload.vehicle_registration_front) {
                formData.append('vehicle_registration_front', payload.vehicle_registration_front);
            }
            if (payload.vehicle_registration_back) {
                formData.append('vehicle_registration_back', payload.vehicle_registration_back);
            }


            const res = await Axios.post<BecomeRiderResponse>(
                '/auth/lumi/rider/register',
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                }
            );
            return res.data;
        },

        ...options,
    });
};

export const useUpdateRiderPublic = (
    options?: UseMutationOptions<
        BecomeRiderResponse,
        ApiErrorResponse,
        { riderId: string; formData: FormData }
    >
) => {
    return useMutation<
        BecomeRiderResponse,
        ApiErrorResponse,
        { riderId: string; formData: FormData }
    >({
        mutationFn: async ({ riderId, formData }) => {
            const res = await Axios.patch<BecomeRiderResponse>(
                `/apps/deliveries/public/riders/public-update/${riderId}`,
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                }
            );
            return res.data;
        },
        ...options,
    });
};



export const useGetVehicleTypesDropDown = (
    options?: UseQueryOptions<VehicleType[], ApiErrorResponse>
) => {
    return useQuery<VehicleType[], ApiErrorResponse>({
        queryKey: ['vehicleTypes'],
        queryFn: async () => {
            const res = await Axios.get<VehicleType[]>('/auth/lumi/rider/dropdowns/vehicle-types');
            return res.data;
        },
        ...options,
    });
};
export const useGetZonesDropDown = (
    options?: UseQueryOptions<Zone[], ApiErrorResponse>
) => {
    return useQuery<Zone[], ApiErrorResponse>({
        queryKey: ['get-zones'],
        queryFn: async () => {
            const res = await Axios.get<Zone[]>('/auth/lumi/rider/dropdowns/zones');
            return res.data;
        },
        ...options,
    });
};

export const useGetRiderRegistrationDetailsByUser = (
    userId?: string,
    options?: UseQueryOptions<RiderRegistrationDetails, ApiErrorResponse>
) => {
    return useQuery<RiderRegistrationDetails, ApiErrorResponse>({
        queryKey: ['rider-registration-details', userId],
        queryFn: async () => {
            const res = await Axios.get<RiderRegistrationDetails>(`/apps/deliveries/admin/riders/riders/registration-details/by-user/${userId}`);
            return res.data;
        },
        enabled: Boolean(userId),
        ...options,
    });
};

export const useGetRiderRegistrationDetailsByRider = (
    riderId?: string,
    options?: UseQueryOptions<RiderRegistrationDetails, ApiErrorResponse>
) => {
    return useQuery<RiderRegistrationDetails, ApiErrorResponse>({
        queryKey: ['rider-registration-details-by-rider', riderId],
        queryFn: async () => {
            const res = await Axios.get<RiderRegistrationDetails>(
                `/apps/deliveries/public/riders/registration-details/by-rider/${riderId}`,
            );
            return res.data;
        },
        enabled: Boolean(riderId),
        ...options,
    });
};
