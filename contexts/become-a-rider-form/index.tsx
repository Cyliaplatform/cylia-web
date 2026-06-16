'use client';

import React, { createContext, ReactNode, useContext, useState } from 'react';

export interface Step1Data {
  name: string;
  email: string;
  phone: string;
  autoGeneratePassword:boolean;
  password:string
}

export interface Step2Data {
  driver_license_front: File | null;
  driver_license_back: File | null;
  national_id_passport_front: File | null;
  national_id_passport_back: File | null;
  vehicle_registration_front: File | null;
  vehicle_registration_back: File | null;
  profile_image: File | null;
}

export interface Step3Data {
  model_year_limit: number | null;
  is_four_wheeler: boolean;
  air_conditioning: boolean;
  no_cosmetic_damage: boolean;
  vehicle_type_id: string;
  zone_id: string;
  licenseNumber: string;
}

// Complete Driver Form Data
export interface DriverFormData {
  step1: Step1Data | null;
  step2: Step2Data | null;
  step3: Step3Data | null;
}

interface DriverFormContextType {
  currentStep: number;
  totalSteps: number;
  formData: DriverFormData;
  setStep1Data: (data: Step1Data) => void;
  setStep2Data: (data: Step2Data) => void;
  setStep3Data: (data: Step3Data) => void;
  nextStep: () => void;
  prevStep: () => void;
  goToStep: (step: number) => void;
  resetForm: () => void;
  canGoNext: boolean;
  canGoPrev: boolean;
}

const DriverFormContext = createContext<DriverFormContextType | undefined>(
  undefined,
);

export const useDriverFormContext = () => {
  const context = useContext(DriverFormContext);
  if (!context) {
    throw new Error(
      'useDriverFormContext must be used within DriverFormProvider',
    );
  }
  return context;
};

interface DriverFormProviderProps {
  children: ReactNode;
  totalSteps?: number;
}

export const DriverFormProvider: React.FC<DriverFormProviderProps> = ({
  children,
  totalSteps = 3,
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<DriverFormData>({
    step1: null,
    step2: null,
    step3: null,
  });

  const setStep1Data = (data: Step1Data) => {
    setFormData((prev) => ({ ...prev, step1: data }));
  };

  const setStep2Data = (data: Step2Data) => {
    setFormData((prev) => ({ ...prev, step2: data }));
  };

  const setStep3Data = (data: Step3Data) => {
    setFormData((prev) => ({ ...prev, step3: data }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const goToStep = (step: number) => {
    if (step >= 1 && step <= totalSteps) {
      setCurrentStep(step);
    }
  };

  const resetForm = () => {
    setCurrentStep(1);
    setFormData({
      step1: null,
      step2: null,
      step3: null,
    });
  };

  const canGoNext = currentStep < totalSteps;
  const canGoPrev = currentStep > 1;

  const value: DriverFormContextType = {
    currentStep,
    totalSteps,
    formData,
    setStep1Data,
    setStep2Data,
    setStep3Data,
    nextStep,
    prevStep,
    goToStep,
    resetForm,
    canGoNext,
    canGoPrev,
  };

  return (
    <DriverFormContext.Provider value={value}>
      {children}
    </DriverFormContext.Provider>
  );
};
