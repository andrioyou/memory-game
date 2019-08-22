import { IElementBase } from '../interfaces/element-base.interface';

export class ElementInput implements IElementBase {
  typeOfControl = 'input';
  type: string;
  name: string;
  value: string;
  label: string;
  required: boolean;

  constructor(settings: {
    type: 'text' | 'email' | 'number' | 'password';
    name: string;
    value?: string;
    label?: string;
    required?: boolean;
  }) {
    this.type = settings.type;
    this.name = settings.name;
    this.value = settings.value || '';
    this.label = settings.label || '';
    this.required = !!settings.required;
  }
}
