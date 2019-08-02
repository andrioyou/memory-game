import { LoginData } from '../interfaces/login-data.interface';
import { HttpErrorResponse } from '@angular/common/http';

export class Login {
  static readonly type = '[Auth] Login';
  constructor(public loginData: LoginData) {}
}

export class LoginSuccess {
  static readonly type = '[Auth] Login Success';
  constructor(public token: string) {}
}

export class LoginFailure {
  static readonly type = '[Auth] Login Failure';
  constructor(public error: HttpErrorResponse) {}
}

export class Logout {
  static readonly type = '[Auth] Logout';
  constructor() {}
}
