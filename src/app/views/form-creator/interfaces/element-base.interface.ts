export interface IElementBase {
  typeOfControl: string;
  name: string;
  value: string;
  label: string;
  required: boolean;
  elements?: IElementBase[];
}
