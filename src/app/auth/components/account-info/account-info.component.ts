import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.scss']
})
export class AccountInfoComponent implements OnInit {
  @Input() user: User | null = null;

  constructor() {}

  ngOnInit() {}
}
