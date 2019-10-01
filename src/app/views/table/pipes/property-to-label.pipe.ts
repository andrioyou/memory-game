import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'propertyToLabel'
})
export class PropertyToLabelPipe implements PipeTransform {
  transform(value: string): string {
    switch (value) {
      case 'id':
        return 'ID';
      case 'name':
        return 'Name';
      case 'email':
        return 'Email';
      case 'age':
        return 'Age';
      case 'dateOfBirth':
        return 'Date of birth';
      case 'country':
        return 'Country';
    }
    return value;
  }
}
