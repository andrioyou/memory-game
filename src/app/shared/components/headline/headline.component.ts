import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-headline',
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.scss']
})
export class HeadlineComponent implements OnInit {
  @Output() logOut = new EventEmitter();
  @Input() authenticated = false;

  constructor() {}

  ngOnInit() {}

  onLogOut() {
    this.logOut.emit();
  }
}
