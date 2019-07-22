import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectsComponent } from './selects.component';

describe('SelectsComponent', () => {
  let component: SelectsComponent;
  let fixture: ComponentFixture<SelectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SelectsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('initially display one select', () => {
    if (component.selectsDisplayed.length) {
      expect(component.selectsDisplayed.length).toBe(1);
    } else {
      expect(component.selectsDisplayed.length).toBe(0);
    }
  });

  it('should display add button if more selects can be added', () => {
    component.ngOnInit();
    if (component.selectsDisplayed.length < component.selectsTagged.length) {
      expect(component.buttonAdd).toBeTruthy();
    } else {
      expect(component.buttonAdd).toBeFalsy();
    }
  });

  it('should display remove button if there is 2 or more selects displayed', () => {
    component.ngOnInit();
    if (component.selectsDisplayed.length < component.selectsTagged.length) {
      component.addSelect();
      expect(component.buttonRemove).toBeTruthy();
    } else {
      expect(component.buttonAdd).toBeFalsy();
    }
  });
});
