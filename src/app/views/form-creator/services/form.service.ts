import { Injectable } from '@angular/core';

import { ElementSelect } from '../models/element-select';
import { ElementInput } from '../models/element-input';

@Injectable()
export class FormService {
  getControls() {
    const controls = [
      new ElementSelect({
        options: ['Red', 'Green', 'Yellow', 'Blue'],
        name: 'color',
        label: 'Color'
      }),

      new ElementInput({
        type: 'text',
        name: 'firstName',
        label: 'First name'
      })
    ];

    return controls;
  }
}
