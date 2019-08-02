import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalComponent } from './modal.component';

import { FormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ModalComponent],
      imports: [FormsModule, NgxMaskModule.forRoot()]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form should be valid if values item values were inserted', () => {
    // insert dummy item to form
    component.name = 'test';
    component.type = 'test';
    component.dateTodo = '01010101';
    fixture.detectChanges();
    expect(component.todoForm).toBeTruthy();
    if (component.todoForm) {
      expect(component.todoForm.valid).toBeTruthy();
    }
  });

  it('on submit form new item need to be emited to parent component', () => {
    // insert dummy item to form
    component.name = 'test';
    spyOn(component.addNewItem, 'emit');
    const resetSpy = spyOn(component, 'reset');
    component.onSubmit();
    expect(component.addNewItem.emit).toHaveBeenCalled();
    expect(resetSpy).toHaveBeenCalled();
  });

  it('should reset form and item after calling reset method', () => {
    component.reset();
    expect(component.item).toEqual(null);
  });
});
