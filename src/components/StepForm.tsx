// src/components/StepForm.tsx

import React from 'react';
import { Formik, Form, Field, FormikHelpers, FieldProps } from 'formik';
import { TextField, Button, Container } from '@mui/material';
import Paper from '@mui/material/Paper';
import * as Yup from 'yup';
import { useFormDefinition } from '../contexts/FormDefinitionContext';
import ErrorMessage from './ErrorMessage';
import MuiTextField from './MuiTextField';

interface StepFormProps {
  currentStep: number;
  setCurrentStep: (step: number) => void;
  formData: { [key: string]: any };
  setFormData: (formData: { [key: string]: any }) => void;
}

const StepForm: React.FC<StepFormProps> = ({ currentStep, setCurrentStep, formData, setFormData }) => {
  const formDefinition = useFormDefinition();
  const currentStepConfig = formDefinition?.find(config => config.step === currentStep);

  if (!currentStepConfig) return null;

  const validationSchema = Yup.object().shape(
    currentStepConfig.fields.reduce((acc: any, field: any) => {
      let validator = Yup.string(); // Default to string for simplicity, adjust based on field.type if needed

      if (field.type === 'string' && field.required) {
        validator = validator.required('This field is required');
      }

      // TODO: add more validation types based on field.type

      acc[field.name] = validator;
      return acc;
    }, {})
  );

  return (
    <Formik
      initialValues={formData}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        if (currentStep < (formDefinition?.length || 0)) {
          setCurrentStep(currentStep + 1);
        } else {
          // Final submit logic here
        }
        actions.setTouched({});
        actions.setSubmitting(false);
      }}
    >
      {formikProps => (
        <Form>
          {currentStepConfig.fields.map(field => (
            <div key={field.name}>
              <Field name={field.name}>
                {({ field: formikField }: FieldProps) => (
                  <MuiTextField
                    field={formikField}
                    form={formikProps}
                    label={field.label}
                    type={field.type}
                  />
                )}
              </Field>
              <ErrorMessage fieldName={field.name} errors={formikProps.errors} touched={formikProps.touched} />
            </div>
          ))}
          <Button type="button" onClick={() => setCurrentStep(currentStep - 1)} disabled={currentStep === 1}>Previous</Button>
          <Button type="submit" disabled={!formikProps.isValid} color="primary" variant="contained">Next</Button>
        </Form>
      )}
    </Formik>
  );
};

export default StepForm;
