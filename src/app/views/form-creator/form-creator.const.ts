import { IForm } from './interfaces/form.interface';

export const creatorItem: any = {
  formName: 'Creator form',
  elements: [
    {
      typeOfControl: 'input',
      name: 'formName',
      label: 'Form name',
      required: true
    },
    {
      typeOfControl: 'form-array',
      name: 'elements',
      label: 'Elements',
      required: true,
      elements: [
        {
          typeOfControl: 'select',
          options: ['input', 'select', 'radio-button'],
          name: 'typeOfControl',
          label: 'Type of element',
          value: 'input',
          required: true
        },
        {
          typeOfControl: 'input',
          type: 'text',
          name: 'name',
          label: 'Name',
          required: true
        },
        {
          typeOfControl: 'input',
          type: 'text',
          name: 'label',
          label: 'Label',
          required: true
        },
        {
          typeOfControl: 'input',
          type: 'text',
          name: 'value',
          label: 'Value'
        },
        {
          typeOfControl: 'radio-button',
          options: ['true', 'false'],
          name: 'required',
          label: 'Required'
        },
        {
          typeOfControl: 'select',
          options: ['text', 'email', 'number', 'password'],
          name: 'type',
          label: 'Type of input',
          value: 'text'
        }
      ]
    }
  ]
};
