import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFormComponent } from './login-form.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginData } from '../../interfaces/login-data.interface';

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginFormComponent],
      imports: [FormsModule, ReactiveFormsModule],
      providers: []
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render Log In text in a h1 tag', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Log in');
  });

  it('should has input with type email', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('input[type="email"]').length).toBe(1);
  });

  it('should has input with type password', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('input[type="password"]').length).toBe(1);
  });

  it('after form submit login data shoud contain values', () => {
    component.loginForm.patchValue({
      email: 'test',
      password: 'test'
    });
    component.onSubmit();
    expect(component.loginData).toBeTruthy();
  });
});
