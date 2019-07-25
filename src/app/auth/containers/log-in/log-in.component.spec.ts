import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogInComponent } from './log-in.component';
import { FormsModule } from '@angular/forms';

// ngrx
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AuthEffects } from '../../store/auth.effects';
import { reducers } from '../../store/auth.states';

// http
import { HttpClientModule } from '@angular/common/http';

// router
import { RouterTestingModule } from '@angular/router/testing';

describe('LogInComponent', () => {
  let component: LogInComponent;
  let fixture: ComponentFixture<LogInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LogInComponent],
      imports: [
        FormsModule,
        EffectsModule.forRoot([AuthEffects]),
        StoreModule.forRoot(reducers),
        HttpClientModule,
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

  it('should render Log In text in a h1 tag', () => {
    const fixture = TestBed.createComponent(LogInComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Log in');
  });

  it('should has input with type email', () => {
    const fixture = TestBed.createComponent(LogInComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('input[type="email"]').length).toBe(1);
  });

  it('should has input with type password', () => {
    const fixture = TestBed.createComponent(LogInComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('input[type="password"]').length).toBe(1);
  });
});
