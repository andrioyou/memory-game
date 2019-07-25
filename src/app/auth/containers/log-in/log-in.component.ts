import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';
import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';
import { LogIn } from '../../store/auth.actions';
import { AuthState } from '../../store/auth.reducers';
import { selectAuthState } from '../../store/auth.states';

import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit, OnDestroy {
  getState: Observable<AuthState>;
  getStateSub: Subscription | null = null;
  errorMessage: string | null = null;
  isAuthenticated = false;

  constructor(private store: Store<AuthState>) {
    this.getState = this.store.select(selectAuthState);
  }

  ngOnInit() {
    this.getStateSub = this.getState.subscribe(state => {
      this.errorMessage = state.errorMessage;
      this.isAuthenticated = state.isAuthenticated;
    });
  }

  ngOnDestroy() {
    if (this.getStateSub) {
      this.getStateSub.unsubscribe();
    }
  }

  login(payload: User) {
    this.store.dispatch(LogIn(payload));
  }
}
