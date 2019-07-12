import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs';

import { User } from '../../models/user';
import { AppState, selectAuthState } from '../../store/app.states';
import { LogIn } from '../../store/actions/auth.actions';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit, OnDestroy {
  user: User;
  getState: Observable<any>;
  getStateSub: Subscription | null = null;
  errorMessage: string | null = null;
  isAuthenticated = false;

  constructor(private store: Store<AppState>) {
    this.getState = this.store.select(selectAuthState);
    this.user = new User();
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

  onSubmit(): void {
    const payload = {
      email: this.user.email,
      password: this.user.password
    };
    this.store.dispatch(new LogIn(payload));
  }
}
