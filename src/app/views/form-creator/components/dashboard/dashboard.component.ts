import { Component } from '@angular/core';
import { IForm } from '../../interfaces/form.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  selectedItem!: IForm;

  constructor() {}

  selectItem(item: IForm) {
    this.selectedItem = item;
  }
}
