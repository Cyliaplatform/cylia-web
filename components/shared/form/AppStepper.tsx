'use client';

import { motion } from 'framer-motion';

export interface StepItem {
  number: number;
  title: string;
  description?: string;
}

export interface AppStepperProps {
  steps: StepItem[];
  currentStep: number;
  className?: string;
  stepNumberClassName?: string;
  stepTitleClassName?: string;
  stepDescriptionClassName?: string;
  lineHeight?: string;
  circleSize?: string;
}

const AppStepper = ({
  steps,
  currentStep,
  className = '',
  stepNumberClassName,
  stepTitleClassName,
  stepDescriptionClassName,
  lineHeight = 'h-20',
  circleSize = 'w-14 h-14',
}: AppStepperProps) => {
  return (
    <div className={`relative ${className}`}>
      {steps.map((step, index) => (
        <div key={step.number} className="relative">
          <div className="flex items-start gap-3 sm:gap-4 md:gap-6">
            <div className="relative flex-shrink-0 z-10">
              <motion.div
                className={`${circleSize} flex items-center justify-center rounded-full text-sm font-semibold sm:text-base md:text-xl ${
                  stepNumberClassName ||
                  (currentStep >= step.number
                    ? 'bg-white border-2 border-primary text-primary'
                    : 'bg-white text-gray-400 border-2 border-gray-300')
                }`}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{
                  scale: currentStep === step.number ? 1.1 : 1,
                  opacity: 1,
                }}
                transition={{
                  duration: 0.3,
                  type: 'spring',
                  stiffness: 200,
                }}
              >
                {step.number < 10 ? `0${step.number}` : step.number}
              </motion.div>
            </div>

            {/* Content */}
            <div className="flex-1 pb-12 sm:pb-16 md:pb-20">
              <motion.h3
                className={
                  stepTitleClassName ||
                  `mb-1 text-base font-semibold sm:text-lg ${
                    currentStep >= step.number
                      ? 'text-gray-900'
                      : 'text-gray-400'
                  }`
                }
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                {step.title}
              </motion.h3>
              {step.description && (
                <motion.p
                  className={
                    stepDescriptionClassName ||
                    'max-w-[22ch] text-xs text-gray-500 sm:text-sm'
                  }
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.1 }}
                >
                  {step.description}
                </motion.p>
              )}
            </div>
          </div>

          {/* Connecting Line */}
          {index < steps.length - 1 && (
            <div
              className={`absolute left-7 top-14 w-0.5 ${lineHeight} -translate-x-1/2`}
            >
              <div className="absolute inset-0 border-l-2 border-dashed border-gray-300"></div>
              <motion.div
                className="absolute inset-0 border-l-2 border-primary origin-top"
                initial={{ scaleY: 0 }}
                animate={{
                  scaleY: currentStep > step.number ? 1 : 0,
                }}
                transition={{
                  duration: 0.5,
                  ease: 'easeInOut',
                }}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AppStepper;
