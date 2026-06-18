'use client';

import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react';

export interface VendorStep1Data {
  name: string;
  email: string;
  phone: string;
  password: string;
  zone_id: string;
  autoGeneratePassword?: boolean;
  mailLoginCredentials?: boolean;
  changePasswordAllowed?: boolean;
}

export interface VendorStep2Data {
  logo?: File | string | null;
  business_license_front?: File | string | null;
  business_license_back?: File | string | null;
  national_id_passport_front?: File | string | null;
  national_id_passport_back?: File | string | null;
}

export interface VendorFormData {
  step1: VendorStep1Data | null;
  step2: VendorStep2Data | null;
  registrationDetails: VendorRegistrationDetails | null;
}

export interface VendorRegistrationDetails {
  vendorId: string;
  userId: string;
  name: string;
  email: string;
  phone: string;
  status: string;
  rejectionReason: string | null;
  zoneId: string;
  zoneName: string | null;
  companyName: string;
  companyDescription: string | null;
  companyOfficeAddress: string | null;
  companyContactPersonName: string | null;
  companyIndustry: string | null;
  companyCity: string | null;
  businessLicenceFront: string | null;
  businessLicenceBack: string | null;
  profilePhoto: string | null;
  nationalIdFront: string | null;
  nationalIdBack: string | null;
  stores: unknown[];
}

interface VendorFormContextType {
  currentStep: number;
  totalSteps: number;
  formData: VendorFormData;
  setStep1Data: (data: VendorStep1Data) => void;
  setStep2Data: (data: VendorStep2Data) => void;
  hydrateFromRegistrationDetails: (data: VendorRegistrationDetails) => void;
  nextStep: () => void;
  prevStep: () => void;
  goToStep: (step: number) => void;
  resetForm: () => void;
  canGoNext: boolean;
  canGoPrev: boolean;
}

const VendorFormContext = createContext<VendorFormContextType | undefined>(
  undefined,
);

export const useVendorFormContext = () => {
  const context = useContext(VendorFormContext);
  if (!context) {
    throw new Error(
      'useVendorFormContext must be used within VendorFormProvider',
    );
  }
  return context;
};

interface VendorFormProviderProps {
  children: ReactNode;
  totalSteps?: number;
}

export const VendorFormProvider: React.FC<VendorFormProviderProps> = ({
  children,
  totalSteps = 2,
}) => {
  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState<VendorFormData>({
    step1: null,
    step2: null,
    registrationDetails: null,
  });

  const setStep1Data = useCallback((data: VendorStep1Data) => {
    setFormData((prev) => ({ ...prev, step1: data }));
  }, []);

  const setStep2Data = useCallback((data: VendorStep2Data) => {
    setFormData((prev) => ({ ...prev, step2: data }));
  }, []);

  const hydrateFromRegistrationDetails = useCallback((data: VendorRegistrationDetails) => {
    setCurrentStep(1);
    setFormData({
      step1: {
        name: data.name ?? '',
        email: data.email ?? '',
        phone: data.phone ?? '',
        password: '',
        zone_id: data.zoneId ?? '',
        autoGeneratePassword: false,
        mailLoginCredentials: false,
        changePasswordAllowed: false,
      },
      step2: {
        logo: data.profilePhoto ?? null,
        business_license_front: data.businessLicenceFront ?? null,
        business_license_back: data.businessLicenceBack ?? null,
        national_id_passport_front: data.nationalIdFront ?? null,
        national_id_passport_back: data.nationalIdBack ?? null,
      },
      registrationDetails: data,
    });
  }, []);

  const nextStep = useCallback(() => {
    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1);
    }
  }, [currentStep, totalSteps]);

  const prevStep = useCallback(() => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  }, [currentStep]);

  const goToStep = useCallback((step: number) => {
    if (step >= 1 && step <= totalSteps) {
      setCurrentStep(step);
    }
  }, [totalSteps]);

  const resetForm = useCallback(() => {
    setCurrentStep(1);
    setFormData({
      step1: null,
      step2: null,
      registrationDetails: null,
    });
  }, []);

  const canGoNext = currentStep < totalSteps;
  const canGoPrev = currentStep > 1;

  const value: VendorFormContextType = {
    currentStep,
    totalSteps,
    formData,
    setStep1Data,
    setStep2Data,
    hydrateFromRegistrationDetails,
    nextStep,
    prevStep,
    goToStep,
    resetForm,
    canGoNext,
    canGoPrev,
  };

  return (
    <VendorFormContext.Provider value={value}>
      {children}
    </VendorFormContext.Provider>
  );
};
