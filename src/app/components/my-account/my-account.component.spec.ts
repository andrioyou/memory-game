import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAccountComponent } from './my-account.component';

// ngrx
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AuthEffects } from '../../store/effects/auth.effects';
import { reducers } from '../../store/app.states';

// http
import { HttpClientModule } from '@angular/common/http';

// router
import { RouterTestingModule } from '@angular/router/testing';

describe('MyAccountComponent', () => {
  let component: MyAccountComponent;
  let fixture: ComponentFixture<MyAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MyAccountComponent],
      imports: [
        EffectsModule.forRoot([AuthEffects]),
        StoreModule.forRoot(reducers),
        HttpClientModule,
        RouterTestingModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
