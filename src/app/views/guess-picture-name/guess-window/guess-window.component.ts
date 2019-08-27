import { Component } from '@angular/core';
import { pictures } from '../guess-picture-name.const';
import { Picture } from '../interfaces/picture.interface';

@Component({
  selector: 'app-guess-window',
  templateUrl: './guess-window.component.html',
  styleUrls: ['./guess-window.component.scss']
})
export class GuessWindowComponent {
  title = 'Guess picture name';
  pictures: Picture[] = pictures;
  currentIndex = 0;
  isWin = false;

  constructor() {}

  nextPicture() {
    if (this.currentIndex + 1 < this.pictures.length) {
      this.currentIndex++;
    } else {
      this.complete();
    }
  }

  complete() {
    this.isWin = true;
    this.title = 'Сongratulations! you won!';
  }

  restart() {
    this.isWin = false;
    this.title = 'Guess picture name';
    this.currentIndex = 0;
  }
}
