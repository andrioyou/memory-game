import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { HeadlineComponent } from './../../components/headline/headline.component';

// ngrx
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AuthEffects } from '../../../auth/store/auth.effects';
import { reducer } from '../../../auth/store/auth.reducers';

// http
import { HttpClientTestingModule } from '@angular/common/http/testing';

// router
import { RouterTestingModule } from '@angular/router/testing';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent, HeadlineComponent],
      imports: [
        EffectsModule.forRoot([AuthEffects]),
        StoreModule.forRoot({ auth: reducer }),
        HttpClientTestingModule,
        RouterTestingModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should has base href link', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('[routerLink=""]').length).toBeGreaterThan(0);
  });
});
