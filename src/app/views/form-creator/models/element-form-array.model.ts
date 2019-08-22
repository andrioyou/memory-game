import { IElementBase } from '../interfaces/element-base.interface';

export class ElementFormArray implements IElementBase {
  typeOfControl = 'form-array';
  name: string;
  value: string;
  label: string;
  required: boolean;
  elements: IElementBase[];

  constructor(settings: {
    name: string;
    value?: string;
    label?: string;
    required?: boolean;
    elements: IElementBase[];
  }) {
    this.name = settings.name;
    this.value = settings.value || '';
    this.label = settings.label || '';
    this.required = !!settings.required;
    this.elements = settings.elements;
  }
}
