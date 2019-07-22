import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  number: number | null = null;
  date: number | null = null;
  time: number | null = null;
  mixed: number | null = null;

  constructor() {}

  ngOnInit() {}
}
