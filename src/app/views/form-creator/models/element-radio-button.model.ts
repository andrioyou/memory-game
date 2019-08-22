import { IElementBase } from '../interfaces/element-base.interface';

export class ElementRadioButton implements IElementBase {
  typeOfControl = 'radio-button';
  options: string[];
  name: string;
  value: string;
  label: string;
  required: boolean;

  constructor(settings: { options: string[]; name: string; value?: string; label?: string; required?: boolean }) {
    this.options = settings.options || [];
    this.name = settings.name;
    this.value = settings.value || '';
    this.label = settings.label || '';
    this.required = !!settings.required;
  }
}
