// src/components/TextField.tsx

import React from 'react';
import { Field, FieldProps, FieldInputProps, FormikProps } from 'formik';
import { Input, Form } from 'antd';

interface TextFieldProps {
    field: FieldInputProps<any>;
    form: FormikProps<any>;
    label: string;
    type: string;
}

const TextField: React.FC<TextFieldProps> = ({ field, form, label, type }) => {
    const errorMessage = form.touched[field.name] && form.errors[field.name] ? String(form.errors[field.name]) : '';

    return (
        <Form.Item
            label={label} // This sets the label above the input field
            validateStatus={errorMessage ? 'error' : ''}
            help={errorMessage || ''}
        >
            <Field name={field.name}>
                {({ field: { onChange, onBlur, value, name } }: FieldProps) => (
                    <Input 
                        id={name}
                        onChange={onChange}
                        onBlur={onBlur}
                        value={value}
                        name={name}
                        type={type}
                    />
                )}
            </Field>
        </Form.Item>
    );
};

export default TextField;
