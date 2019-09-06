import { Component } from '@angular/core';
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
export class AuthNgxsComponent {
  @Select(AuthState) authState$!: Observable<AuthStateModel>;

  constructor(private store: Store) {}

  logIn(LoginData: LoginData) {
    this.store.dispatch(new Login(LoginData));
  }

  logOut() {
    this.store.dispatch(new Logout());
  }
}
