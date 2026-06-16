
export interface BecomeRiderPayload {
  name: string;
  email: string;
  phone: string;
  password: string;
  city?: string;
  zone_id: string;
  vehicle_type_id?: string;
  model_year_limit: number;
  licenseNumber: string;
  vehicle_name: string;
  vehicle_colour: string;
  vehicle_no: string;
  is_four_wheeler?: boolean;
  air_conditioning?: boolean;
  no_cosmetic_damage?: boolean;
  profile_image?: File;
  driver_license_front?: File;
  driver_license_back?: File;
  national_id_passport_front?: File;
  national_id_passport_back?: File;
  vehicle_registration_front?: File;
  vehicle_registration_back?: File;
  company_commercial_registration?: File;
}

export type BecomeRiderResponse = {
  message: string;
};

export interface VehicleType {
  id: string;
  name: string;
}


export interface Zone {
  id: string;
  title: string;
}


