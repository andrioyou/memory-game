import { State, Action, StateContext, Store, NgxsOnInit } from '@ngxs/store';
import { GetTableData } from './table.actions';
import { TableService } from '../services/table.service';
import { ITable } from '../interfaces/table.interface';

export interface ITableState {
  table: ITable | null;
}

@State<ITableState>({
  name: 'table',
  defaults: {
    table: null
  }
})
export class TableState implements NgxsOnInit {
  constructor(private tableService: TableService) {}

  ngxsOnInit(ctx: StateContext<ITableState>) {}

  @Action(GetTableData)
  getTableData(ctx: StateContext<ITableState>) {
    ctx.patchState({
      table: this.tableService.getTable()
    });
  }
}
