import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs';

import { User } from '../../models/user.model';
import { AppState, selectAuthState } from '../../store/app.states';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit, OnDestroy {
  getState: Observable<any>;
  getStateSub: Subscription | null = null;
  email: string | null = null;
  firstName: string | null = null;
  lastName: string | null = null;

  constructor(private store: Store<AppState>) {
    this.getState = this.store.select(selectAuthState);
  }

  ngOnInit() {
    this.getStateSub = this.getState.subscribe(state => {
      this.email = state.email;
      this.firstName = state.firstName;
      this.lastName = state.lastName;
    });
  }

  ngOnDestroy() {
    if (this.getStateSub) {
      this.getStateSub.unsubscribe();
    }
  }
}
