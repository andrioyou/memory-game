import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Image } from '../models/image.model';

@Component({
  selector: 'app-memory-game',
  templateUrl: './memory-game.component.html',
  styleUrls: ['./memory-game.component.scss']
})
export class MemoryGameComponent implements OnInit {
  images: object[] = [];
  stopwatch = 0;
  stopwatchInterval: any;
  score = 0;
  gridImages: Image[] = [];
  gridSize = 4;
  gridLength = 0;
  gridLengthArr: number[] = [];
  gridMaxLength = 32;
  gridCompleted = false;
  gridClickable = true;
  comparePictureId: number | null = null;
  compareIndex: number | null = null;
  transitionTime = 1000;

  constructor(private domSanitizer: DomSanitizer) {}

  ngOnInit() {
    this.loadImagesUrls();
    this.loadGrid();
  }

  startStopwatch() {
    if (this.stopwatchInterval) return;
    this.stopwatchInterval = setInterval(() => {
      this.stopwatch++;
    }, 1000);
  }

  stopStopwatch() {
    clearInterval(this.stopwatchInterval);
    this.stopwatchInterval = undefined;
  }

  clearStopwatch() {
    this.stopwatch = 0;
  }

  clearScore() {
    this.score = 0;
  }

  loadImagesUrls() {
    for (let i = 1; i <= this.gridMaxLength; i++) {
      let url: string | object = 'assets/images/img' + i + '.jpg';
      url = this.domSanitizer.bypassSecurityTrustStyle(`url(${url})`);
      this.images.push(url);
    }
  }

  loadGrid() {
    this.gridLength = this.gridSize * this.gridSize;
    this.gridLengthArr = Array(this.gridLength)
      .fill(0)
      .map((x, i) => i);
    this.gridImages = [];
    for (let i = 0; i < this.gridLength; i++) {
      const imageIndex = Math.floor(i / 2);
      const gridImage: Image = {
        url: this.images[imageIndex],
        pictureId: imageIndex,
        show: false,
        opened: false
      };
      this.gridImages.push(gridImage);
    }
    this.shuffleArray(this.gridImages);
  }

  changeGridSize(val: number) {
    this.compareIndex = null;
    this.comparePictureId = null;
    this.gridImages.forEach(item => {
      item.show = false;
      item.opened = false;
    });
    let time = this.transitionTime;
    if (!this.stopwatchInterval) time = 0;
    this.stopStopwatch();
    this.clearStopwatch();
    this.clearScore();
    setTimeout(() => {
      this.gridSize = val;
      this.loadGrid();
    }, time);
  }

  checkGridComplete() {
    let complete = true;
    for (const image of this.gridImages) {
      if (!image.opened) {
        complete = false;
        break;
      }
    }
    if (complete) this.gridComplete();
  }

  gridComplete() {
    this.gridCompleted = true;
    this.stopStopwatch();
  }

  restartGrid() {
    this.changeGridSize(this.gridSize);
    this.gridCompleted = false;
  }

  showItem(index: number) {
    if (!this.gridClickable) return;
    this.startStopwatch();
    this.compareImagesPair(index);
    this.checkGridComplete();
  }

  compareImagesPair(index: number) {
    // if cliecked is already showed
    if (index === this.compareIndex || this.gridImages[index].opened) return;

    // show item
    this.gridImages[index].show = true;

    if (this.comparePictureId === null || this.compareIndex === null) {
      this.comparePictureId = this.gridImages[index].pictureId;
      this.compareIndex = index;
    } else {
      let time = this.transitionTime;
      this.gridClickable = false;
      if (this.gridImages[index].pictureId === this.comparePictureId && this.compareIndex !== null) {
        this.gridImages[index].opened = true;
        this.gridImages[this.compareIndex].opened = true;
        this.increaseScore();
        time = 0;
      }
      setTimeout(() => {
        this.gridImages[index].show = false;
        if (this.compareIndex !== null) this.gridImages[this.compareIndex].show = false;
        this.comparePictureId = null;
        this.compareIndex = null;
        this.gridClickable = true;
      }, time);
    }
  }

  increaseScore() {
    let dif = Math.floor((100 - this.stopwatch) / 10);
    if (dif < 0) dif = 0;
    this.score += dif + 20;
  }

  shuffleArray(array: any[]) {
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
