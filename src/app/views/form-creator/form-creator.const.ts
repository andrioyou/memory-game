import { InputElement } from './models/input-element.model';
import { RadioButtonElement } from './models/radio-button-element.model';
import { SelectElement } from './models/select-element.model';
import { FormArrayElement } from './models/form-array-element.model';
import { FormElement } from './models/form-element.model';

export const creatorForm: FormElement = new FormElement({
  formName: 'Creator form',
  elements: [
    new InputElement({
      type: 'text',
      name: 'formId',
      label: 'Form ID',
      value: new Date().getTime().toString(),
      required: true,
      disabled: true
    }),
    new InputElement({
      type: 'text',
      name: 'formName',
      label: 'Form name',
      required: true
    }),
    new FormArrayElement({
      name: 'elements',
      label: 'Elements',
      required: true,
      elements: [
        new SelectElement({
          name: 'typeOfControl',
          options: ['input', 'select', 'radio-button', 'form-array'],
          label: 'Type of element',
          value: 'input',
          required: true
        }),
        new InputElement({
          name: 'name',
          label: 'Name',
          required: true
        }),
        new InputElement({
          name: 'label',
          label: 'Label',
          required: true
        }),
        new InputElement({
          name: 'value',
          label: 'Value'
        }),
        new RadioButtonElement({
          name: 'required',
          label: 'Required',
          value: 'false',
          options: ['true', 'false']
        }),
        new SelectElement({
          options: ['text', 'email', 'number', 'password'],
          name: 'type',
          label: 'Type of input',
          value: 'text',
          dependencies: [
            {
              target: 'typeOfControl',
              operator: 'equal',
              value: 'input'
            }
          ]
        }),
        new RadioButtonElement({
          name: 'disabled',
          label: 'Disabled',
          value: 'false',
          options: ['true', 'false'],
          dependencies: [
            {
              target: 'typeOfControl',
              operator: 'equal',
              value: 'input'
            }
          ]
        }),
        new FormArrayElement({
          name: 'options',
          label: 'Options',
          required: true,
          elements: [
            new InputElement({
              name: 'value',
              label: 'Value'
            })
          ]
        })
      ]
    })
  ]
});
