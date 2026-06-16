
export interface ApplyForVendorPayload {
  name: string;
  email: string;
  phone: string;
  password: string;
  zone_id: string;
  allow_password_change: boolean;
  vendorImage?: File;
  business_liscence_front_file?: File;
  business_liscence_back_file?: File;
  national_id_front_file?: File;
  national_id_back_file?: File;
  business_trademark_file?: File;
}

export type ApplyForVendorResponse = {
  message: string;
};


