import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.scss']
})
export class AccountInfoComponent implements OnInit {
  @Input() email = '';
  @Input() firstName = '';
  @Input() lastName = '';

  constructor() {}

  ngOnInit() {}
}
