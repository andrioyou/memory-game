export interface IDependency {
  target: string;
  operator: 'equal' | 'not equal';
  value: string;
}
