import { IBaseElement } from '../interfaces/base-element.interface';
import { IDependency } from '../interfaces/dependency.interface';

export class FormArrayElement implements IBaseElement {
  readonly typeOfControl = 'form-array';
  name: string;
  label: string;
  elements: IBaseElement[];
  value: string;
  required: boolean;
  dependencies: IDependency[];

  constructor(settings: {
    name: string;
    label: string;
    elements: IBaseElement[];
    value?: string;
    required?: boolean;
    dependencies?: IDependency[];
  }) {
    this.name = settings.name;
    this.label = settings.label;
    this.elements = settings.elements;
    this.value = settings.value || '';
    this.required = settings.required || false;
    this.dependencies = settings.dependencies || [];
  }
}
