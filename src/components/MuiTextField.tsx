// src/components/MuiTextField.tsx

import React from 'react';
import { FieldProps } from 'formik';
import { TextField } from '@mui/material';

interface MuiTextFieldProps extends FieldProps {
  label: string;
}

const MuiTextField: React.FC<MuiTextFieldProps> = ({ field, form, label, ...props }) => {
  const errorText = form.touched[field.name] && form.errors[field.name];
  const helperText = typeof errorText === 'string' ? errorText : '';

  return (
    <TextField
      {...field}
      {...props}
      label={label}
      helperText={helperText}
      error={!!errorText}
    />
  );
};

export default MuiTextField;
export type { MuiTextFieldProps };
