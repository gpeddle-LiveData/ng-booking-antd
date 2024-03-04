// src/components/MuiTextField.tsx

import React from 'react';
import { TextField } from '@mui/material';
import { FieldInputProps, FormikProps } from 'formik';

interface MuiTextFieldProps {
  field: FieldInputProps<any>;
  form: FormikProps<any>;
  label: string;
  type: string;
}

const MuiTextField: React.FC<MuiTextFieldProps> = ({ field, form, label, type }) => {
  const errorText = form.touched[field.name] && form.errors[field.name] ? String(form.errors[field.name]) : '';
  return (
    <TextField
      {...field}
      label={label}
      type={type}
      helperText={errorText}
      error={!!form.touched[field.name] && !!form.errors[field.name]}
    />
  );
};

export default MuiTextField;
