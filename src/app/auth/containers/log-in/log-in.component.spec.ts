import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogInComponent } from './log-in.component';
import { LoginFormComponent } from '../../components/login-form/login-form.component';

// ngrx
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AuthEffects } from '../../store/auth.effects';
import { reducer } from '../../store/auth.reducers';

// modules
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

describe('LogInComponent', () => {
  let component: LogInComponent;
  let fixture: ComponentFixture<LogInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LogInComponent, LoginFormComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        EffectsModule.forRoot([AuthEffects]),
        StoreModule.forRoot({ auth: reducer }),
        HttpClientTestingModule,
        RouterTestingModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('after login submit verification should be true', () => {
    fixture = TestBed.createComponent(LogInComponent);
    component = fixture.componentInstance;
    component.login({ email: 'test', password: 'test' });
    expect(component.verification).toBeTruthy();
  });
});
