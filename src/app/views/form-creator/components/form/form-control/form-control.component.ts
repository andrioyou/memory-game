import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, AbstractControl, FormArray } from '@angular/forms';
import { BuilderService } from '@app/views/form-creator/services/builder.service';
import { FormArrayElement } from '../../../models/form-array-element.model';
import { InputElement } from '../../../models/input-element.model';
import { RadioButtonElement } from '../../../models/radio-button-element.model';
import { SelectElement } from '../../../models/select-element.model';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.scss']
})
export class FormControlComponent implements OnInit {
  @Input() form!: FormGroup;
  @Input() element!: FormArrayElement | InputElement | RadioButtonElement | SelectElement;

  constructor(private builderService: BuilderService) {}

  ngOnInit() {}

  get isVisible(): boolean {
    if (!this.element.dependencies) {
      return true;
    }
    let visibleStatus = true;
    this.element.dependencies.forEach(dependency => {
      const control = this.form.get(dependency.target);
      if (!control) {
        return true;
      }
      if (dependency.operator === 'equal') {
        if (control.value !== dependency.value) {
          visibleStatus = false;
        }
      }
      if (dependency.operator === 'not equal') {
        if (control.value === dependency.value) {
          console.log('test2');
          visibleStatus = false;
        }
      }
    });
    return visibleStatus;
  }

  get isValid() {
    return this.form.controls[this.element.name].valid;
  }

  get formArrayControls() {
    const formArray = this.form.get(this.element.name) as FormGroup;
    const controls: AbstractControl[] = [];
    if (formArray) {
      Object.keys(formArray.controls).forEach((key: string) => {
        controls.push(formArray.controls[key]);
      });
    }
    return controls;
  }

  addFormArrayItem() {
    const formArray = this.form.get(this.element.name) as FormArray;
    if (formArray) {
      formArray.push(this.builderService.toFormGroup(this.element));
    }
  }

  removeFormArrayItem(i: number) {
    const formArray = this.form.get(this.element.name) as FormArray;
    if (formArray) {
      formArray.removeAt(i);
    }
  }
}
