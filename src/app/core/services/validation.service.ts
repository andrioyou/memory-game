import { Injectable } from '@angular/core';
import { ISignature } from '../interfaces';

@Injectable()
export class ValidationService {
  static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
    const config: ISignature = {
      required: 'This field is required',
      minlength: `Minimum length ${validatorValue.requiredLength}`,
      maxlength: `Maximum length ${validatorValue.requiredLength}`,
      min: `Minimum value is ${validatorValue.min}`,
      max: `Maximum value should be less then ${validatorValue.max}`,
      duplicated: `This value already exists in the list.`
    };

    return config[validatorName];
  }
}
