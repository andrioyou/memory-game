import { Component, OnInit, OnDestroy } from '@angular/core';
import { untilComponentDestroyed } from '@w11k/ngx-componentdestroyed';
import { ErrorService } from '@app/core/services/error.service';

@Component({
  selector: 'app-error',
  template: '<p *ngIf="errorMessage">{{ errorMessage }}</p>',
  styles: [
    `
      p {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: white;
        border: 1px solid red;
        border-radius: 15px;
        padding: 15px;
      }
    `
  ]
})
export class ErrorComponent implements OnInit, OnDestroy {
  errorMessage = '';

  constructor(private errorService: ErrorService) {}

  ngOnInit() {
    this.errorService.source.pipe(untilComponentDestroyed(this)).subscribe(text => this.setErrorMessage(text));
  }

  ngOnDestroy() {}

  setErrorMessage(text: string) {
    this.errorMessage = text;
    setTimeout(() => (this.errorMessage = ''), 2000);
  }
}
