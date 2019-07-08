import { Component, OnInit } from '@angular/core';
import { PICTURES } from '../guess-picture-name.const';
import { Picture } from '../interfaces/picture.interface';

@Component({
  selector: 'app-guess-window',
  templateUrl: './guess-window.component.html',
  styleUrls: ['./guess-window.component.scss']
})
export class GuessWindowComponent implements OnInit {
  pictures: Picture[] = [];
  message = 'Guess picture name';
  currentEl = 0;
  win = false;

  constructor(private picturesConst: PICTURES) {
    this.pictures = picturesConst.pictures;
  }

  nextPicture() {
    if (!(this.currentEl + 1 >= this.pictures.length)) {
      this.currentEl++;
    } else {
      this.complete();
    }
  }

  complete() {
    this.win = true;
    this.message = 'Сongratulations! you won!';
  }

  restart() {
    this.win = false;
    this.message = 'Guess picture name';
    this.currentEl = 0;
  }

  ngOnInit() {}
}
