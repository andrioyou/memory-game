import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { IForm } from '../../interfaces/form.interface';
import { FormsListService } from '../../services/forms-list.service';
import { untilComponentDestroyed } from '@w11k/ngx-componentdestroyed';

@Component({
  selector: 'app-forms-list',
  templateUrl: './forms-list.component.html',
  styleUrls: ['./forms-list.component.scss']
})
export class FormsListComponent implements OnInit, OnDestroy {
  @Output() onItemSelect = new EventEmitter<IForm>();

  list: IForm[] = [];
  item: IForm | null = null;
  currentName!: string;

  constructor(private formsListService: FormsListService) {}

  ngOnInit() {
    this.formsListService.formsList$.pipe(untilComponentDestroyed(this)).subscribe(formsList => {
      this.list = formsList;
      if (!this.currentName) {
        this.selectInitialFormItem();
      }
    });
  }

  ngOnDestroy() {}

  selectInitialFormItem() {
    if (this.list.length) {
      this.selectFormItem(this.list[0].formName);
    }
  }

  selectFormItem(name: string) {
    if (name === this.currentName) {
      return;
    }

    this.item = this.formsListService.getFormItem(name);
    if (this.item) {
      this.currentName = name;
      this.onItemSelect.emit(this.item);
    }
  }

  removeFormItem(name: string) {
    this.formsListService.removeFormItem(name);
  }

  addDummyForm() {
    this.formsListService.addDymmyToFormList();
  }

  clearFormsList() {
    this.formsListService.clearFormsList();
  }
}
