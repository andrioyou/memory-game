import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { Select } from '../interfaces/select.interface';
import { selects } from '../selects.const';

@Component({
  selector: 'app-selects',
  templateUrl: './selects.component.html',
  styleUrls: ['./selects.component.scss']
})
export class SelectsComponent implements OnInit {
  @ViewChildren('selectEl') selectElements: any;

  selects: Select[] = selects;
  selectsTagged: Select[] = [];
  selectsTagActive: string | null = null;
  selectsDisplayed: Select[] = [];
  selectsValues: string[] = [];
  buttonAdd = false;
  buttonRemove = false;

  constructor() {
    if (this.selects.length) {
      this.selectsTagActive = this.selects[0].rotatingQuestionsTag;
    }
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
    if (this.selectsTagged.length) {
      this.selectsDisplayed.push(this.selectsTagged[0]);
    }
  }

  loadSelectsValues() {
    this.selectsValues = [];
    this.selectsDisplayed.forEach((element: Select) => {
      this.selectsValues.push(element.varName);
    });
  }

  selectChange(val: string, index: number, selIndex: number) {
    for (const select of this.selectsTagged) {
      if (select.varName === val) {
        this.selectsDisplayed[index] = select;
      }
    }
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
    if (lengthOfDisplayed < lengthOfTag) {
      for (const itemTagged of this.selectsTagged) {
        let found = false;
        for (const itemDisplayed of this.selectsDisplayed) {
          if (itemDisplayed.varName === itemTagged.varName) {
            found = true;
          }
        }
        if (!found) {
          this.selectsDisplayed.push(itemTagged);
          break;
        }
      }
    } else {
      this.buttonAdd = false;
    }
    if (this.selectsTagged.length === this.selectsDisplayed.length) {
      this.buttonAdd = false;
    }
    this.buttonRemove = true;

    // add value
    this.selectsValues.push('');
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
