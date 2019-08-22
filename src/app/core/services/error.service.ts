import { Injectable } from '@angular/core';
import { BehaviorSubject, timer } from 'rxjs';

@Injectable()
export class ErrorService {
  source = new BehaviorSubject<string>('');

  constructor() {
    // const counter = timer(0, 1000);
    // counter.subscribe((time: number) => {
    //   if (time % 5 === 0) {
    //     this.source.next('Something went wrong');
    //   }
    // });
  }
}
