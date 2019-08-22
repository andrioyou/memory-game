import { IElementBase } from './element-base.interface';

export interface IForm {
  formName: string;
  elements: IElementBase[];
}
