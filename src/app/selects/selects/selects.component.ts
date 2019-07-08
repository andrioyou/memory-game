import { Component, OnInit, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-selects',
  templateUrl: './selects.component.html',
  styleUrls: ['./selects.component.scss']
})
export class SelectsComponent implements OnInit {
  selects: any = [
    {
      rotatingQuestionsTag: 'A',
      varName: '$Q0',
      title: 'A question 1',
      answerOptions: ['option-1', 'option-2', 'option-3']
    },
    {
      rotatingQuestionsTag: 'A',
      varName: '$Q1',
      title: 'A question 2',
      answerOptions: ['option-1', 'option-2', 'option-3']
    },
    {
      rotatingQuestionsTag: 'A',
      varName: '$Q2',
      title: 'A question 3',
      answerOptions: ['option-1', 'option-2', 'option-3']
    },
    {
      rotatingQuestionsTag: 'B',
      varName: '$Q3',
      title: 'B question 1',
      answerOptions: ['option-1', 'option-2', 'option-3']
    },
    {
      rotatingQuestionsTag: 'B',
      varName: '$Q4',
      title: 'B question 2',
      answerOptions: ['option-1', 'option-2', 'option-3']
    },
    {
      rotatingQuestionsTag: 'B',
      varName: '$Q5',
      title: 'B question 3',
      answerOptions: ['option-1', 'option-2', 'option-3']
    }
  ];
  selectsByTag: any;
  selectsToDisplay: any;
  selectedValues: string[] = [];
  activeTag: any = this.selects[0].rotatingQuestionsTag;
  showMoreButton = false;
  removeButton = false;
  @ViewChildren('selectEl') selectElements: any;

  constructor() {}

  ngOnInit() {
    this.initSelects();
  }

  initSelects() {
    this.loadSelectsTag();
    this.loadSelectsDisplayed();
    this.loadSelectedValues();
    if (this.selectsByTag.length > 1) this.showMoreButton = true;
  }

  loadSelectsTag() {
    this.selectsByTag = [];
    this.selects.forEach((element: any) => {
      if (this.activeTag === element.rotatingQuestionsTag) {
        this.selectsByTag.push(element);
      }
    });
  }

  loadSelectsDisplayed() {
    this.selectsToDisplay = [];
    this.selectsToDisplay.push(this.selectsByTag[0]);
  }

  loadSelectedValues() {
    this.selectedValues = [];
    this.selectsToDisplay.forEach((element: any) => {
      this.selectedValues.push(element.varName);
    });
  }

  selectChange(val: string, index: number, selIndex: number) {
    this.selectedValues[index] = this.selectElements._results[index].nativeElement.value;
    console.log(this.selectedValues);
    // switch to another tag
    if (index === 0 && this.activeTag !== this.selects[selIndex].rotatingQuestionsTag) {
      this.activeTag = this.selects[selIndex].rotatingQuestionsTag;
      this.initSelects();
    }
  }

  showNextSelect() {
    const lengthOfDisplayed = this.selectsToDisplay.length;
    const lengthOfTag = this.selectsByTag.length;
    if (lengthOfDisplayed < lengthOfTag) {
      this.selectsToDisplay.push(this.selectsByTag[lengthOfDisplayed]);
    } else {
      this.showMoreButton = false;
    }
    if (this.selectsByTag.length === this.selectsToDisplay.length) this.showMoreButton = false;
    this.removeButton = true;

    // Set next select val
    for (const el of this.selectsByTag) {
      if (!(this.selectedValues.indexOf(el.varName) > -1)) {
        this.selectedValues.push(el.varName);
        break;
      }
    }
  }

  removeSelect(i: number) {
    this.selectsToDisplay.splice(i, 1);
    this.selectedValues.splice(i, 1);
    this.showMoreButton = true;
    if (this.selectsToDisplay.length === 1) this.removeButton = false;
  }
}
