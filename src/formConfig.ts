// src/formConfig.ts

interface FieldConfig {
  name: string;
  label: string;
  type: string;
  validationType: string;
  required: boolean;
}

interface StepConfig {
  step: number;
  fields: FieldConfig[];
}

const formConfig: StepConfig[] = [
  {
    step: 1,
    fields: [
      {
        name: "firstName",
        label: "First Name",
        type: "text",
        validationType: "string",
        required: true,
      },
      // Add more fields for step 1
    ],
  },
  {
    step: 2,
    fields: [
      {
        name: "address",
        label: "Address",
        type: "text",
        validationType: "string",
        required: true,
      },
      // Add more fields for step 2
    ],
  },
  // Add more steps as needed
];

export default formConfig;
export type { StepConfig, FieldConfig };
