import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormControlService } from '../../services/form-control.service';
import { FormService } from '../../services/form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  controls: any = [];
  form!: FormGroup;

  constructor(private fcs: FormControlService, private fs: FormService) {}

  ngOnInit() {
    this.controls = this.fs.getControls();
    this.form = this.fcs.toFormGroup(this.controls);
  }
}
