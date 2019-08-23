import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-dynamic-forms',
  templateUrl: './dynamic-forms.component.html',
  styleUrls: ['./dynamic-forms.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicFormsComponent {
  form: FormGroup;
  levels: string[] = ['High', 'Middle', 'Low'];
  test = '';
  forbiddenSkillNames = ['test', '123'];

  constructor(private fb: FormBuilder) {
    this.form = new FormGroup({
      skills: new FormArray([this.newSkillGroup], Validators.required)
    });
  }

  get newSkillGroup(): FormGroup {
    return this.fb.group({
      name: new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
      experience: new FormControl(null),
      proficiency: new FormControl(null)
    });
  }

  get formArray() {
    return this.form.get('skills') as FormArray;
  }

  get controls() {
    return this.formArray.controls;
  }

  addItem() {
    this.formArray.push(this.newSkillGroup);
  }

  removeItem(i: number) {
    this.formArray.removeAt(i);
  }

  forbiddenNames(constrol: FormControl): { [s: string]: boolean } | null {
    if (this.forbiddenSkillNames.indexOf(constrol.value) !== -1) {
      return { ['nameIsForbidden']: true };
    }
    return null;
  }
}
