// src/hooks/useStepForm.tsx

import { useState } from 'react';

interface UseStepFormProps {
  initialStep?: number;
  totalSteps: number;
}

function useStepForm({ initialStep = 1, totalSteps }: UseStepFormProps) {
  const [currentStep, setCurrentStep] = useState(initialStep);

  // Move to the next step
  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  // Move to the previous step
  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Jump to a specific step
  const goToStep = (step: number) => {
    if (step >= 1 && step <= totalSteps) {
      setCurrentStep(step);
    }
  };

  return {
    currentStep,
    nextStep,
    prevStep,
    goToStep,
  };
}

export default useStepForm;
