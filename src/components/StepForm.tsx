// src/components/StepForm.tsx

import React from 'react';
import { Formik, Form, Field, FieldProps } from 'formik';
import { Button, Box } from '@mui/material';
import * as Yup from 'yup';
import { useFormDefinition } from '../contexts/FormDefinitionContext';
import ErrorMessage from './ErrorMessage';
//import MuiTextField from './MuiTextField';
import TextField from './TextField';

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
        <Box sx={{ margin: '0px', width: '100%' }}> {/* Adjust this box to control the form's position */}
          <Form>
            {currentStepConfig.fields.map(field => (
              <div key={field.name}>
                <Field name={field.name}>
                  {({ field: formikField }: FieldProps) => (
                    <TextField
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
            <div style={{ marginTop: '20px' }}>
              <Button type="button" onClick={() => setCurrentStep(currentStep - 1)} disabled={currentStep === 1}>Previous</Button>
              <Button type="submit" disabled={!formikProps.isValid} color="primary" variant="contained">Next</Button>
            </div>
          </Form>
        </Box>
      )}
    </Formik>
  );
};

export default StepForm;
