// src/components/TextField.tsx

import React from 'react';
import { Field,FieldInputProps,FormikProps} from 'formik'

interface TextFieldProps {
  field: FieldInputProps<any>;
  form: FormikProps<any>;
  label: string;
  type: string;
}

const TextField: React.FC<TextFieldProps> = ({ field, form, label, type }) => {
  const errorText = form.touched[field.name] && form.errors[field.name] ? String(form.errors[field.name]) : '';
  return (
    <div>
    <label htmlFor={field.name}>{label}</label>
    <Field
      {...field}
      label={label}
      type={type}
      helperText={errorText}
      error={!!form.touched[field.name] && !!form.errors[field.name]}
    />
    </div>
  );
};

export default TextField;