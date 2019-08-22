import { Component, OnInit } from '@angular/core';
import { IForm } from '../../interfaces/form.interface';
import { creatorItem } from '../../form-creator.const';
import { FormsListService } from '../../services/forms-list.service';

@Component({
  selector: 'app-creator',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.scss']
})
export class CreatorComponent implements OnInit {
  creatorItem: IForm = creatorItem;

  constructor(private formsListService: FormsListService) {}

  ngOnInit() {}

  addItemToList(item: IForm) {
    this.formsListService.addFormItem(item);
  }
}
