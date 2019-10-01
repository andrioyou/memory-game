import { IBaseElement } from '../interfaces/base-element.interface';
import { IDependency } from '../interfaces/dependency.interface';

export class InputElement implements IBaseElement {
  readonly typeOfControl = 'input';
  name: string;
  label: string;
  value: string;
  required: boolean;
  dependencies: IDependency[];
  type: 'text' | 'email' | 'number' | 'password';
  disabled?: boolean;

  constructor(settings: {
    name: string;
    label: string;
    value?: string;
    required?: boolean;
    dependencies?: IDependency[];
    type?: 'text' | 'email' | 'number' | 'password';
    disabled?: boolean;
  }) {
    this.name = settings.name;
    this.label = settings.label;
    this.value = settings.value || '';
    this.required = settings.required || false;
    this.dependencies = settings.dependencies || [];
    this.type = settings.type || 'text';
    this.disabled = settings.disabled || false;
  }
}
