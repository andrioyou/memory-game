import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.scss']
})
export class ElementComponent implements OnInit {
  @Input() control!: any;
  @Input() form!: FormGroup;

  constructor() {}

  get isValid() {
    return this.form.controls[this.control.key].valid;
  }

  ngOnInit() {}
}
