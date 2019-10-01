import { Component, OnInit, Input, ViewChild, ChangeDetectionStrategy, ViewChildren } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ITable } from '../../interfaces/table.interface';
import { IUser } from '../../interfaces/user.interface';
import { MatSort } from '@angular/material/sort';
import { SelectionModel } from '@angular/cdk/collections';
import { TableService } from '../../services/table.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent implements OnInit {
  @Input() table: ITable | null = null;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  dataSource!: MatTableDataSource<IUser>;
  displayedColumns: string[] = [];
  selection = new SelectionModel<IUser>(true, []);
  filter: { [key: string]: string } = {};
  countries: string[] = [];

  constructor(private tableService: TableService) {}

  ngOnInit() {
    if (this.table) {
      this.dataSource = new MatTableDataSource<IUser>(this.table.data);
      this.displayedColumns = this.table.columns.slice();
      this.displayedColumns.unshift('select');
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.countries = this.tableService.getCountries();
    }
  }

  filterByColumn(column: string, value: string): void {
    if (!this.table) {
      return;
    }

    if (value) {
      value = value.toLowerCase();
      this.filter[column] = value;
    } else {
      delete this.filter[column];
    }

    this.dataSource.data = this.table.data.filter(userIn => {
      let result = true;
      const user = userIn as any;
      for (const key of Object.keys(this.filter)) {
        if (
          user[key]
            .toString()
            .toLowerCase()
            .indexOf(this.filter[key]) === -1
        ) {
          result = false;
          break;
        }
      }
      return result;
    });
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ? this.selection.clear() : this.dataSource.data.forEach(row => this.selection.select(row));
  }

  checkboxLabel(row?: IUser): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id}`;
  }

  download(filename: string = 'test', type: string = 'text/plain') {
    const data = JSON.stringify(this.selection.selected, null, 2);
    const file = new Blob([data], { type });
    const a = document.createElement('a');
    const url = URL.createObjectURL(file);
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    }, 0);
  }
}
