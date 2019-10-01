import { FormArrayElement } from '../models/form-array-element.model';
import { InputElement } from '../models/input-element.model';
import { RadioButtonElement } from '../models/radio-button-element.model';
import { SelectElement } from '../models/select-element.model';

export interface IFormElement {
  formId: string;
  formName: string;
  elements: (FormArrayElement | InputElement | RadioButtonElement | SelectElement)[];
}
