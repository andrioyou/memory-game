import { ITable } from '../interfaces/table.interface';
import { IUser } from '../interfaces/user.interface';

export class Table implements ITable {
  name: string;
  columns: string[];
  data: IUser[];

  private getColumns(data: IUser[]) {
    const columns: string[] = [];
    if (data.length) {
      for (const key of Object.keys(data[0])) {
        columns.push(key);
      }
    }
    return columns;
  }

  constructor(props: { name: string; data: IUser[] }) {
    this.name = props.name;
    this.data = props.data;
    this.columns = this.getColumns(props.data);
  }
}
