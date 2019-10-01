import { Component } from '@angular/core';
import { FormElement } from '../../models/form-element.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  selectedForm!: FormElement;

  constructor() {}

  selectForm(form: FormElement) {
    this.selectedForm = form;
  }
}
