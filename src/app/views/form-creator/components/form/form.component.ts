import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';
import { BuilderService } from '../../services/builder.service';
import { IForm } from '../../interfaces/form.interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, OnChanges {
  @Input() item!: IForm;
  @Output() onSubmit = new EventEmitter<any>();

  form!: FormGroup;

  constructor(private builderService: BuilderService) {}

  ngOnInit() {
    this.setForm();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.item) {
      this.setForm();
    }
  }

  get formControls() {
    const controls: AbstractControl[] = [];
    Object.keys(this.form.controls).forEach(key => {
      controls.push(this.form.controls[key]);
    });
    return controls;
  }

  setForm() {
    if (this.item) {
      this.form = this.builderService.toFormGroup(this.item);
    }
  }

  submit() {
    this.onSubmit.emit(this.form.value);
  }
}
