import { IFormElement } from '../interfaces/form-element.interface';
import { FormArrayElement } from './form-array-element.model';
import { InputElement } from './input-element.model';
import { RadioButtonElement } from './radio-button-element.model';
import { SelectElement } from './select-element.model';

export class FormElement implements IFormElement {
  formId: string;
  formName: string;
  elements: (FormArrayElement | InputElement | RadioButtonElement | SelectElement)[];

  constructor(settings: {
    formName: string;
    elements: (FormArrayElement | InputElement | RadioButtonElement | SelectElement)[];
  }) {
    this.formId = new Date().getTime().toString();
    this.formName = settings.formName;
    this.elements = settings.elements;
  }
}
