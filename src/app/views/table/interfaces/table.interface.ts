import { IUser } from './user.interface';

export interface ITable {
  name: string;
  columns: string[];
  data: IUser[];
}
