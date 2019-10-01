import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { FormsListService } from '../../services/forms-list.service';
import { untilComponentDestroyed } from '@w11k/ngx-componentdestroyed';
import { FormElement } from '../../models/form-element.model';

@Component({
  selector: 'app-forms-list',
  templateUrl: './forms-list.component.html',
  styleUrls: ['./forms-list.component.scss']
})
export class FormsListComponent implements OnInit, OnDestroy {
  @Output() onFormSelect = new EventEmitter<FormElement>();

  formList: FormElement[] = [];
  currentId = '';

  constructor(private formsListService: FormsListService) {}

  ngOnInit() {
    this.formsListService
      .getFormsList()
      .pipe(untilComponentDestroyed(this))
      .subscribe(list => {
        this.formList = list;
        if (!this.currentId) {
          this.selectInitialFormItem();
        }
      });
  }

  ngOnDestroy() {}

  selectInitialFormItem() {
    if (this.formList.length) {
      this.selectFormItem(this.formList[0]);
    }
  }

  selectFormItem(form: FormElement) {
    this.currentId = form.formId;
    this.onFormSelect.emit(form);
  }

  removeFormItem(id: string) {
    this.formsListService.removeFormItem(id);
  }

  clearFormsList() {
    this.formsListService.clearFormsList();
  }

  addDummyForm() {
    this.formsListService.addDymmyToFormList();
  }
}
