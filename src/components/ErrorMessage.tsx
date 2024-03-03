// src/components/ErrorMessage.tsx

import React from 'react';
import { FormikErrors, FormikTouched } from 'formik';

interface ErrorMessageProps {
  fieldName: string;
  errors: FormikErrors<{ [key: string]: any }>;
  touched: FormikTouched<{ [key: string]: any }>;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ fieldName, errors, touched }) => {
  let errorMessage: React.ReactNode = null;

  const fieldError = errors[fieldName];
  const isTouched = touched[fieldName];

  if (isTouched && fieldError) {
    errorMessage = typeof fieldError === 'string' ? fieldError : 'Invalid input';
  }

  return errorMessage ? <div>{errorMessage}</div> : null;
};

export default ErrorMessage;
