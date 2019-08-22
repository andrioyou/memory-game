import { Component, OnInit } from '@angular/core';
import { IForm } from '../../interfaces/form.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  selectedItem!: IForm;

  constructor() {}

  ngOnInit() {}

  selectItem(item: IForm) {
    this.selectedItem = item;
  }
}
