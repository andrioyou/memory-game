import { Component, OnInit, OnChanges, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-letters',
  templateUrl: './letters.component.html',
  styleUrls: ['./letters.component.scss']
})
export class LettersComponent implements OnInit, OnChanges {
  @Input() word = '';
  @Output() solved = new EventEmitter();

  randomLettersList: string[] = [];
  correctLettersList = [];

  ngOnInit() {
    this.initLetters();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.word) {
      this.initLetters();
    }
  }

  initLetters() {
    this.correctLettersList = [];
    this.randomLettersList = this.shuffleArray(this.word.split(''));
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
    this.checkResult();
  }

  checkResult() {
    if (this.correctLettersList.join('') === this.word) {
      this.solved.emit();
    }
  }

  shuffleArray(array: string[]) {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  constructor() {}
}
