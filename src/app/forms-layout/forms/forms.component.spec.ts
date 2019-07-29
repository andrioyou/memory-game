import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsComponent } from './forms.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';

describe('FormsComponent', () => {
  let component: FormsComponent;
  let fixture: ComponentFixture<FormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormsComponent],
      imports: [FormsModule, ReactiveFormsModule, NgxMaskModule.forRoot()]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form should has skills group', () => {
    const skills = component.skillsForm.get('skills');
    expect(skills).toBeTruthy();
  });

  it('form skills length should increment on AddSkill', () => {
    const skills = component.skillsForm.get('skills');
    if (skills) {
      const length = skills.value.length;
      component.addSkill();
      expect(skills.value.length).toEqual(length + 1);
    }
  });

  it('form skills length should decrement on removeSkill', () => {
    const skills = component.skillsForm.get('skills');
    if (skills) {
      const length = skills.value.length;
      component.removeSkill(0);
      expect(skills.value.length).toEqual(length - 1);
    }
  });

  it('after submit result should display in components html', () => {
    const skills = component.skillsForm.get('skills');
    if (skills) {
      component.onSubmit();
      expect(component.skillsValue).toBeTruthy();
    } else {
      expect(false).toBeTruthy();
    }
  });
});
