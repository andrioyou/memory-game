import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  skillsForm: FormGroup;
  proficiencyLevels: string[] = ['High', 'Middle', 'Low'];
  skillsValue = '';

  constructor(private fb: FormBuilder) {
    this.skillsForm = new FormGroup({
      skills: new FormArray([this.getSkillFormGroup()])
    });
  }

  ngOnInit() {
    // this.skillsForm.valueChanges.subscribe(value => console.log(value));
  }

  getSkillFormGroup(): FormGroup {
    return this.fb.group({
      name: new FormControl(null, [Validators.required]),
      experience: new FormControl(null, [Validators.required]),
      proficiency: new FormControl(null)
    });
  }

  addSkill() {
    (this.skillsForm.get('skills') as FormArray).push(this.getSkillFormGroup());
  }

  removeSkill(i: number) {
    (this.skillsForm.get('skills') as FormArray).removeAt(i);
  }

  onSubmit() {
    this.skillsValue = this.skillsForm.value;
  }

  getSkillValidity(i: number, skillName: string) {
    const skills = this.skillsForm.get('skills');
    if (skills) {
      const skillsItem = skills.get(i.toString());
      if (skillsItem) {
        console.log(skillsItem.get(skillName));
      }
    }
    return false;
  }

  get controls() {
    return (this.skillsForm.get('skills') as FormArray).controls;
  }
}
