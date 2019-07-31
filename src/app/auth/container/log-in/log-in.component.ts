import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable } from 'rxjs';
import { untilComponentDestroyed } from '@w11k/ngx-componentdestroyed';

import { Store } from '@ngrx/store';
import { LogIn } from '../../store/auth.actions';
import { AuthState } from '../../store/auth.reducers';
import { selectAuthState } from '../../store/auth.states';

import { LoginData } from '../../interfaces/login-data.interface';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit, OnDestroy {
  getState$: Observable<AuthState> = this.store.select(selectAuthState);
  verification = false;

  constructor(private store: Store<AuthState>) {}

  ngOnInit() {
    this.getState$.pipe(untilComponentDestroyed(this)).subscribe(() => (this.verification = false));
  }

  ngOnDestroy() {}

  login(payload: LoginData) {
    this.verification = true;
    this.store.dispatch(LogIn(payload));
  }
}
