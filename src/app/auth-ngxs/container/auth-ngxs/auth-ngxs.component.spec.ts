import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthNgxsComponent } from './auth-ngxs.component';

describe('AuthNgxsComponent', () => {
  let component: AuthNgxsComponent;
  let fixture: ComponentFixture<AuthNgxsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AuthNgxsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthNgxsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
