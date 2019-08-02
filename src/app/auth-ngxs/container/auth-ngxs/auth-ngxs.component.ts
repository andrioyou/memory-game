import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { AuthState, AuthStateModel } from '../../store/auth.state';
import { Observable } from 'rxjs';
import { LoginData } from '../../interfaces/login-data.interface';
import { Login, Logout } from '../../store/auth.action';

@Component({
  selector: 'app-auth-ngxs',
  templateUrl: './auth-ngxs.component.html',
  styleUrls: ['./auth-ngxs.component.scss']
})
export class AuthNgxsComponent implements OnInit {
  @Select(AuthState) authState$!: Observable<AuthStateModel>;

  state!: AuthStateModel;
  isLoading = false;

  constructor(private store: Store) {}

  ngOnInit() {
    this.authState$.subscribe(state => {
      this.state = state;
      this.isLoading = false;
    });
  }

  logIn(LoginData: LoginData) {
    this.isLoading = true;
    this.store.dispatch(new Login(LoginData));
  }

  logOut() {
    this.isLoading = true;
    this.store.dispatch(new Logout());
  }
}
