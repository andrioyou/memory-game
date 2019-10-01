import { Component } from '@angular/core';
import { creatorForm } from '../../form-creator.const';
import { FormsListService } from '../../services/forms-list.service';
import { FormElement } from '../../models/form-element.model';

@Component({
  selector: 'app-creator',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.scss']
})
export class CreatorComponent {
  creatorForm: FormElement = creatorForm;

  constructor(private formsListService: FormsListService) {}

  onAddFormItem(form: FormElement) {
    form.formId = new Date().getTime().toString();
    this.formsListService.addFormItem(form);
  }
}
