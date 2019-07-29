import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAccountComponent } from './my-account.component';
import { AccountInfoComponent } from '../../components/account-info/account-info.component';

// ngrx
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AuthEffects } from '../../store/auth.effects';
import { reducer } from '../../store/auth.reducers';

// http
import { HttpClientTestingModule } from '@angular/common/http/testing';

// router
import { RouterTestingModule } from '@angular/router/testing';

describe('MyAccountComponent', () => {
  let component: MyAccountComponent;
  let fixture: ComponentFixture<MyAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MyAccountComponent, AccountInfoComponent],
      imports: [
        EffectsModule.forRoot([AuthEffects]),
        StoreModule.forRoot({ auth: reducer }),
        HttpClientTestingModule,
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
