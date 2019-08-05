import { Component, OnInit } from '@angular/core';
import { SignUpData } from '@app/auth/interfaces/sign-up-data.interface';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AuthState } from '../../store/auth.reducers';
import { selectAuthState } from '../../store/auth.states';
import { SignUp } from '../../store/auth.actions';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  getState$: Observable<AuthState> = this.store.select(selectAuthState);

  constructor(private store: Store<AuthState>) {}

  ngOnInit() {}

  signUp(payload: SignUpData) {
    this.store.dispatch(SignUp(payload));
  }
}
