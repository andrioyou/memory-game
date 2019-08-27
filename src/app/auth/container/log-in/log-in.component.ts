import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectAuthState } from '../../store/auth.states';
import { AuthState } from '../../store/auth.reducers';
import { LogIn } from '../../store/auth.actions';
import { LoginData } from '../../interfaces/login-data.interface';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {
  getState$: Observable<AuthState> = this.store.select(selectAuthState);

  constructor(private store: Store<AuthState>) {}

  login(payload: LoginData) {
    this.store.dispatch(LogIn(payload));
  }
}
