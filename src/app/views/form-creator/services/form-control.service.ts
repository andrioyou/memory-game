import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class FormControlService {
  constructor() {}

  toFormGroup(controls: any) {
    const group: any = {};
    controls.forEach((control: any) => {
      group[control.name] = control.required
        ? new FormControl(control.value || '', Validators.required)
        : new FormControl(control.value || '');
    });
    return new FormGroup(group);
  }
}
