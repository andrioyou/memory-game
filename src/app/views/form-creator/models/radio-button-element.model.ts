import { IBaseElement } from '../interfaces/base-element.interface';
import { IDependency } from '../interfaces/dependency.interface';

export class RadioButtonElement implements IBaseElement {
  readonly typeOfControl = 'radio-button';
  name: string;
  label: string;
  value: string;
  required: boolean;
  dependencies: IDependency[];
  options: string[];

  constructor(settings: {
    name: string;
    label: string;
    value?: string;
    required?: boolean;
    dependencies?: IDependency[];
    options: string[];
  }) {
    this.name = settings.name;
    this.label = settings.label;
    this.options = settings.options;
    this.value = settings.value || '';
    this.required = settings.required || false;
    this.dependencies = settings.dependencies || [];
  }
}
