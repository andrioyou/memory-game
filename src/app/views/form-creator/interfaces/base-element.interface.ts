import { IDependency } from './dependency.interface';

export interface IBaseElement {
  name: string;
  label: string;
  value: string;
  required: boolean;
  dependencies: IDependency[];
}
