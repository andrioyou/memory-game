import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuessWindowComponent } from './guess-window.component';

describe('GuessWindowComponent', () => {
  let component: GuessWindowComponent;
  let fixture: ComponentFixture<GuessWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GuessWindowComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuessWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
