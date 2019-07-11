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
  user: User = new User();
  getState: Observable<any>;
  getStateSub: Subscription | null = null;
  errorMessage: string | null = null;
  hasToken = false;

  constructor(private store: Store<AppState>, authService: AuthService) {
    this.getState = this.store.select(selectAuthState);
    this.hasToken = authService.hasToken();
  }

  ngOnInit() {
    this.getStateSub = this.getState.subscribe(state => {
      this.errorMessage = state.errorMessage;
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
