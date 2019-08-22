import { Injectable } from '@angular/core';
import { FormGroup, AbstractControl, FormArray, FormControl, Validators } from '@angular/forms';
import { IElementBase } from '../interfaces/element-base.interface';

@Injectable({
  providedIn: 'root'
})
export class BuilderService {
  constructor() {}

  toFormGroup(item: any): FormGroup {
    const elements = item.elements;
    const group: { [key: string]: AbstractControl } = {};

    elements.forEach((element: IElementBase) => {
      if (element.elements) {
        group[element.name] = new FormArray([this.toFormGroup(element)]);
      } else {
        group[element.name] =
          element.required && element.required.toString() === 'true'
            ? new FormControl(element.value, Validators.required)
            : new FormControl(element.value);
      }
    });
    return new FormGroup(group);
  }
}
