import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SelectElement } from '../models/select-element.model';
import { InputElement } from '../models/input-element.model';
import { FormArrayElement } from '../models/form-array-element.model';
import { RadioButtonElement } from '../models/radio-button-element.model';
import { FormElement } from '../models/form-element.model';

@Injectable()
export class FormsListService {
  private storageName = 'forms-list';
  private formsListSubject: BehaviorSubject<FormElement[]> = new BehaviorSubject(this.getFormsStorageList());
  private formsList$ = this.formsListSubject.asObservable();

  private getFormsStorageList(): FormElement[] {
    const list = localStorage.getItem(this.storageName);
    return list ? JSON.parse(list) : [];
  }

  private setFormsStorageList(list: FormElement[]) {
    localStorage.setItem(this.storageName, JSON.stringify(list));
    this.updateFormsList(list);
  }

  private updateFormsList(list: FormElement[]) {
    this.formsListSubject.next(list);
  }

  getFormsList(): Observable<FormElement[]> {
    return this.formsList$;
  }

  getFormItem(id: string): FormElement | null {
    const formsList = this.getFormsStorageList();
    let form = null;
    formsList.forEach(item => {
      if (item.formId === id) {
        form = item;
      }
    });
    return form;
  }

  clearFormsList() {
    this.setFormsStorageList([]);
  }

  addFormItem(form: FormElement) {
    const list = this.getFormsStorageList();
    list.push(form);
    this.setFormsStorageList(list);
  }

  removeFormItem(id: string) {
    let list = this.getFormsStorageList();
    list = list.filter(form => form.formId !== id);
    this.setFormsStorageList(list);
  }

  addDymmyToFormList() {
    const elements: (FormArrayElement | InputElement | RadioButtonElement | SelectElement)[] = [
      // new InputElement({
      //   type: 'text',
      //   name: 'First name',
      //   label: 'First name',
      //   required: true,
      // }),

      // new InputElement({
      //   type: 'text',
      //   name: 'Last name',
      //   label: 'Last name',
      // }),

      // new SelectElement({
      //   options: ['1', '2', '3'],
      //   name: 'Quantity',
      //   label: 'Quantity',
      //   required: true,
      // }),

      // new RadioButtonElement({
      //   options: ['true', 'false'],
      //   name: 'Go with',
      //   label: 'Go with',
      // }),

      // new InputElement({
      //   type: 'text',
      //   name: 'Your name',
      //   label: 'Your name',
      //   required: true,
      // }),

      // new FormArrayElement({
      //   name: 'Skills',
      //   label: 'Skills',
      //   elements: [
      //     new InputElement({
      //       type: 'text',
      //       name: 'Name',
      //       label: 'Name',
      //       required: true,
      //     }),
      //     new InputElement({
      //       type: 'text',
      //       name: 'Description',
      //       label: 'Description',
      //     }),
      //   ],
      // }),

      new FormArrayElement({
        name: 'Nested level 1',
        label: 'Nested level 1',
        elements: [
          new InputElement({
            type: 'text',
            name: 'L 1',
            label: 'L 1'
          }),
          new FormArrayElement({
            name: 'Nested level 2',
            label: 'Nested level 2',
            elements: [
              new InputElement({
                type: 'text',
                name: 'L 2',
                label: 'L 2'
              })
            ]
          })
        ]
      })
    ];

    const form: FormElement = new FormElement({
      formName: 'Nested arrays',
      elements
    });

    this.addFormItem(form);
  }
}
