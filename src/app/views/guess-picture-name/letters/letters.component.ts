import {
  Component,
  OnInit,
  OnChanges,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
  ChangeDetectionStrategy
} from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-letters',
  templateUrl: './letters.component.html',
  styleUrls: ['./letters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LettersComponent implements OnInit, OnChanges {
  @Input() word!: string;
  @Output() solved = new EventEmitter();

  randomLettersList: string[] = [];
  correctLettersList: string[] = [];

  constructor() {}

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
    event.previousContainer === event.container
      ? moveItemInArray(event.container.data, event.previousIndex, event.currentIndex)
      : transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
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
}
