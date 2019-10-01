import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { GetTableData } from '../../store/table.actions';
import { TableState, ITableState } from '../../store/table.state';

@Component({
  selector: 'app-table-container',
  templateUrl: './table-container.component.html',
  styleUrls: ['./table-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableContainerComponent implements OnInit {
  @Select(TableState) tableState$!: Observable<ITableState>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(new GetTableData());
  }
}
