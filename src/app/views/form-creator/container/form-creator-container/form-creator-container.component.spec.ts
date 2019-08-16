import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCreatorContainerComponent } from './form-creator-container.component';

describe('FormCreatorContainerComponent', () => {
  let component: FormCreatorContainerComponent;
  let fixture: ComponentFixture<FormCreatorContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormCreatorContainerComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCreatorContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
