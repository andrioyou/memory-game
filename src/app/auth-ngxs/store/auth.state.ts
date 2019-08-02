import { State, Action, StateContext, Store, NgxsOnInit } from '@ngxs/store';
import { Login, LoginSuccess, LoginFailure, Logout } from './auth.action';
import { AuthService } from '../services/auth.service';
import { tap } from 'rxjs/operators';
import { AuthResponse } from '../interfaces/auth-response.interface';
import { HttpErrorResponse } from '@angular/common/http';

export interface AuthStateModel {
  isAuthenticated: boolean;
  errorMessage: string;
}

@State<AuthStateModel>({
  name: 'auth',
  defaults: {
    isAuthenticated: false,
    errorMessage: ''
  }
})
export class AuthState implements NgxsOnInit {
  constructor(private store: Store, private authService: AuthService) {}

  ngxsOnInit(ctx: StateContext<AuthStateModel>) {
    ctx.patchState({
      isAuthenticated: this.authService.hasToken()
    });
  }

  @Action(Login)
  Login(ctx: StateContext<AuthStateModel>, action: Login) {
    return this.authService.logIn(action.loginData.email, action.loginData.password).pipe(
      tap(
        (response: AuthResponse) => {
          this.store.dispatch(new LoginSuccess(response.token));
        },
        (error: HttpErrorResponse) => {
          this.store.dispatch(new LoginFailure(error));
        }
      )
    );
  }

  @Action(LoginSuccess)
  LoginSuccess(ctx: StateContext<AuthStateModel>, action: LoginSuccess) {
    this.authService.setToken(action.token);
    ctx.patchState({
      isAuthenticated: true,
      errorMessage: ''
    });
  }

  @Action(LoginFailure)
  LoginFailure(ctx: StateContext<AuthStateModel>, action: LoginFailure) {
    ctx.patchState({
      errorMessage: action.error.error
    });
  }

  @Action(Logout)
  Logout(ctx: StateContext<AuthStateModel>, action: Logout) {
    return this.authService.logOut().pipe(
      tap(
        (response: any) => {
          this.authService.removeToken();
          ctx.patchState({
            isAuthenticated: false
          });
        },
        (error: HttpErrorResponse) => {
          ctx.patchState({
            errorMessage: JSON.stringify(error.error)
          });
        }
      )
    );
  }
}
