import { Component, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';
import { BuilderService } from '../../services/builder.service';
import { FormElement } from '../../models/form-element.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnChanges {
  @Input() formElement!: FormElement;
  @Input() resetOnSubmit = false;
  @Output() onSubmit = new EventEmitter<any>();

  form!: FormGroup;

  constructor(private builderService: BuilderService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.formElement) {
      this.setForm();
    }
  }

  setForm() {
    if (this.formElement) {
      this.form = this.builderService.toFormGroup(this.formElement);
    }
  }

  formControls() {
    const controls: AbstractControl[] = [];
    Object.keys(this.form.controls).forEach(key => {
      controls.push(this.form.controls[key]);
    });
    return controls;
  }

  submit() {
    this.onSubmit.emit(this.form.value);
    if (this.resetOnSubmit) {
      this.form.reset();
    }
  }
}
