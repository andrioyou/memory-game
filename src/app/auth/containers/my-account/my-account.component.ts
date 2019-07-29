import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { AuthService } from '../../services/auth.service';

import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit {
  userData$: Observable<User> | null = null;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.userData$ = this.authService.getUserInfo();
  }
}
