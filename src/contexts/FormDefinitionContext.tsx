import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import bookingFormSteps from '../formDefs/booking.json';

interface Field {
  name: string;
  label: string;
  type: string;
  required: boolean;
}

interface FormStep {
  step: number;
  stepName: string;
  fields: Field[];
}

// Specify that the context can hold either FormStep array or null
const FormDefinitionContext = createContext<FormStep[] | null>(null);

interface FormDefinitionProviderProps {
  children: ReactNode;
}

export const FormDefinitionProvider: React.FC<FormDefinitionProviderProps> = ({ children }) => {
    const [formDefinition, setFormDefinition] = useState<FormStep[] | null>(null);

    useEffect(() => {
        // Simulate fetching the form definition
        // Replace this with your actual logic to fetch or import the form definition
        setFormDefinition(bookingFormSteps as FormStep[]);
    }, []);

    return (
        <FormDefinitionContext.Provider value={formDefinition}>
            {children}
        </FormDefinitionContext.Provider>
    );
};

export const useFormDefinition = () => useContext(FormDefinitionContext);
