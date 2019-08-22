import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormControl, FormArray } from '@angular/forms';
import { BuilderService } from '@app/views/form-creator/services/builder.service';
import { IElementBase } from '@app/views/form-creator/interfaces/element-base.interface';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.scss']
})
export class FormControlComponent implements OnInit {
  @Input() form!: FormGroup;
  @Input() element!: IElementBase;

  constructor(private builderService: BuilderService) {}

  ngOnInit() {}

  get isValid() {
    return this.form.controls[this.element.name].valid;
  }

  get formArrayControls() {
    const formArray = this.form.get(this.element.name) as FormArray;
    const controls: AbstractControl[] = [];
    if (formArray) {
      Object.keys(formArray.controls).forEach((key: any) => {
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
