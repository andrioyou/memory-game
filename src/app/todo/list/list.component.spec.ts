import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';
import { ModalComponent } from './modal/modal.component';

import { FormsModule } from '@angular/forms';

import { NgxMaskModule } from 'ngx-mask';

import { TodoService } from './../todo.service';

import { Item } from '../interfaces/item.interface';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListComponent, ModalComponent],
      imports: [FormsModule, NgxMaskModule.forRoot()],
      providers: [TodoService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open modal window on button Add new click', () => {
    const compiled = fixture.debugElement.nativeElement;
    const addButton = compiled.querySelector('.add-new-item');
    addButton.click();
    expect(component.modalOpened).toBeTruthy();
  });

  it('should remove one item on button Remove click', () => {
    // add dummy item
    const item: Item = {
      name: 'test',
      type: 'test',
      dateCreated: 'test',
      dateTodo: 'test'
    };
    component.addItem({ item, index: null });
    expect(component.list.length).toEqual(1);

    // remove dummy item on button click
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const removeButton = compiled.querySelector('button.remove');
    removeButton.click();
    fixture.detectChanges();

    expect(component.list.length).toEqual(0);
  });

  it('should opem modal window and edit item on button Edit click', () => {
    // add dummy item
    const item: Item = {
      name: 'test',
      type: 'test',
      dateCreated: 'test',
      dateTodo: 'test'
    };
    component.addItem({ item, index: null });
    fixture.detectChanges();

    // edit item on button click
    const spy = spyOn(component, 'openModal').and.callThrough();
    const compiled = fixture.debugElement.nativeElement;
    const removeButton = compiled.querySelector('button.edit');
    removeButton.click();
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
    expect(component.editableItem).toBeTruthy();
    expect(component.editableItemIndex).toBeGreaterThanOrEqual(0);
  });
});
