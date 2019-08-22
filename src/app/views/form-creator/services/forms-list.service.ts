import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IForm } from '../interfaces/form.interface';
import { IElementBase } from '../interfaces/element-base.interface';
import { ElementSelect } from '../models/element-select.model';
import { ElementInput } from '../models/element-input.model';
import { ElementFormArray } from '../models/element-form-array.model';

@Injectable()
export class FormsListService {
  private storageName = 'forms-list';
  formsList$: BehaviorSubject<IForm[]> = new BehaviorSubject<IForm[]>(this.getFormsList());

  getFormsList(): IForm[] {
    const list = localStorage.getItem(this.storageName);
    return list ? JSON.parse(list) : [];
  }

  setFormsList(list: IForm[]) {
    localStorage.setItem(this.storageName, JSON.stringify(list));
    this.updateFormsList(list);
  }

  updateFormsList(list: IForm[]) {
    this.formsList$.next(list);
  }

  clearFormsList() {
    this.setFormsList([]);
  }

  getFormItem(name: string): IForm | null {
    const formsList = this.getFormsList();
    let form = null;
    formsList.forEach(item => {
      if (item.formName === name) {
        form = item;
      }
    });
    return form;
  }

  addFormItem(form: IForm) {
    const list = this.getFormsList();
    list.push(form);
    this.setFormsList(list);
  }

  removeFormItem(name: string) {
    let list = this.getFormsList();
    list = list.filter(item => item.formName !== name);
    this.setFormsList(list);
  }

  addDymmyToFormList() {
    const elements: IElementBase[] = [
      // new ElementInput({
      //   type: 'text',
      //   name: 'First name',
      //   label: 'First name',
      //   required: true,
      // }),

      // new ElementInput({
      //   type: 'text',
      //   name: 'Last name',
      //   label: 'Last name',
      // }),

      // new ElementSelect({
      //   options: ['1', '2', '3'],
      //   name: 'Quantity',
      //   label: 'Quantity',
      //   required: true,
      // }),

      // new ElementRadioButton({
      //   options: ['true', 'false'],
      //   name: 'Go with',
      //   label: 'Go with',
      // }),

      // new ElementInput({
      //   type: 'text',
      //   name: 'Your name',
      //   label: 'Your name',
      //   required: true,
      // }),

      // new ElementFormArray({
      //   name: 'Skills',
      //   label: 'Skills',
      //   elements: [
      //     new ElementInput({
      //       type: 'text',
      //       name: 'Name',
      //       label: 'Name',
      //       required: true,
      //     }),
      //     new ElementInput({
      //       type: 'text',
      //       name: 'Description',
      //       label: 'Description',
      //     }),
      //   ],
      // }),

      new ElementFormArray({
        name: 'Nested level 1',
        label: 'Nested level 1',
        elements: [
          new ElementInput({
            type: 'text',
            name: 'L 1',
            label: 'L 1'
          }),
          new ElementFormArray({
            name: 'Nested level 2',
            label: 'Nested level 2',
            elements: [
              new ElementInput({
                type: 'text',
                name: 'L 2',
                label: 'L 2'
              })
            ]
          })
        ]
      })
    ];

    const form: IForm = {
      formName: 'Nested arrays',
      elements
    };

    this.addFormItem(form);
  }
}
