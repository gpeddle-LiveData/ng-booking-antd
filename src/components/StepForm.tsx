// src/components/StepForm/StepForm.tsx

import React from 'react';
import { Formik, Form, Field, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import formConfig, { FieldConfig } from '../formConfig';
import ErrorMessage from './ErrorMessage';

interface StepFormProps {
  currentStep: number;
  setCurrentStep: (step: number) => void;
  formData: { [key: string]: any };
  setFormData: (formData: { [key: string]: any }) => void;
}

const StepForm: React.FC<StepFormProps> = ({ currentStep, setCurrentStep, formData, setFormData }) => {
  const currentStepConfig = formConfig.find(config => config.step === currentStep);

  if (!currentStepConfig) return null;

  const validationSchema = Yup.object().shape(
    currentStepConfig.fields.reduce((acc: any, field: FieldConfig) => {
      let validator = Yup.string(); // Default to string for simplicity, adjust based on field.type if needed

      if (field.validationType === 'string' && field.required) {
        validator = validator.required('This field is required');
      }

      // TODO: more validation types 

      acc[field.name] = validator;
      return acc;
    }, {})
  );

  const handleNext = (values: { [key: string]: any }, actions: FormikHelpers<{ [key: string]: any }>) => {
    if (currentStep < formConfig.length) {
      setCurrentStep(currentStep + 1);
    } else {
      // Final submit logic here
    }
    actions.setTouched({});
    actions.setSubmitting(false);
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <Formik
      initialValues={formData}
      validationSchema={validationSchema}
      onSubmit={handleNext}
    >
      {({ errors, touched, isValid, handleSubmit }) => (
        <Form>
          {currentStepConfig.fields.map(field => (
            <div key={field.name}>
              <label htmlFor={field.name}>{field.label}</label>
              <Field name={field.name} type={field.type} />
              <ErrorMessage fieldName={field.name} errors={errors} touched={touched} />
            </div>
          ))}
          <button type="button" onClick={handlePrevious} disabled={currentStep === 1}>Previous</button>
          <button type="submit" disabled={!isValid}>Next</button>
        </Form>
      )}
    </Formik>
  );
};

export default StepForm;
