import { Component, OnInit, ViewChildren } from '@angular/core';
import { Select } from '../interfaces/select.interface';
import { SELECTS } from '../selects.const';

@Component({
  selector: 'app-selects',
  templateUrl: './selects.component.html',
  styleUrls: ['./selects.component.scss']
})
export class SelectsComponent implements OnInit {
  @ViewChildren('selectEl') selectElements: any;
  selects: Select[] = [];
  selectsTagged: Select[] = [];
  selectsTagActive: string;
  selectsDisplayed: Select[] = [];
  selectsValues: string[] = [];
  buttonAdd: boolean;
  buttonRemove: boolean;

  constructor(private selectsConst: SELECTS) {
    this.selects = selectsConst.selects;
    this.selectsTagActive = this.selects[0].rotatingQuestionsTag;
    this.buttonAdd = false;
    this.buttonRemove = false;
  }

  ngOnInit() {
    this.initSelects();
  }

  initSelects() {
    this.loadSelectsTagged();
    this.loadSelectsDisplayed();
    this.loadSelectsValues();
  }

  loadSelectsTagged() {
    this.selectsTagged = [];
    this.selects.forEach((element: Select) => {
      if (this.selectsTagActive === element.rotatingQuestionsTag) {
        this.selectsTagged.push(element);
      }
    });

    // Check whether to enable more button
    if (this.selectsTagged.length > 1) {
      this.buttonAdd = true;
    }
  }

  loadSelectsDisplayed() {
    this.selectsDisplayed = [];
    this.selectsDisplayed.push(this.selectsTagged[0]);
  }

  loadSelectsValues() {
    this.selectsValues = [];
    this.selectsDisplayed.forEach((element: Select) => {
      this.selectsValues.push(element.varName);
    });
  }

  selectChange(val: string, index: number, selIndex: number) {
    this.selectsValues[index] = this.selectElements._results[index].nativeElement.value;

    // switch to another tag
    if (index === 0 && this.selectsTagActive !== this.selects[selIndex].rotatingQuestionsTag) {
      this.selectsTagActive = this.selects[selIndex].rotatingQuestionsTag;
      this.initSelects();
    }
  }

  addSelect() {
    const lengthOfDisplayed = this.selectsDisplayed.length;
    const lengthOfTag = this.selectsTagged.length;
    lengthOfDisplayed < lengthOfTag
      ? this.selectsDisplayed.push(this.selectsTagged[lengthOfDisplayed])
      : (this.buttonAdd = false);
    if (this.selectsTagged.length === this.selectsDisplayed.length) {
      this.buttonAdd = false;
    }
    this.buttonRemove = true;

    // TODO: remove setting value.

    // Set value
    // for (const el of this.selectsTagged) {
    //   if (!(this.selectsValues.indexOf(el.varName) > -1)) {
    //     this.selectsValues.push(el.varName);
    //     break;
    //   }
    // }
  }

  removeSelect(i: number) {
    this.selectsDisplayed.splice(i, 1);
    this.selectsValues.splice(i, 1);
    this.buttonAdd = true;
    if (this.selectsDisplayed.length === 1) {
      this.buttonRemove = false;
    }
  }
}
