import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

// ngrx effects
import { Actions, createEffect, ofType } from '@ngrx/effects';

// rxjs
import { Observable } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import 'rxjs/add/observable/of';

// actions
import {
  LogIn,
  LogInSuccess,
  LogInFailure,
  LogOut,
  LogOutSuccess,
  SignUp,
  SignUpSuccess,
  SignUpFailure
} from './auth.actions';

// service
import { AuthService } from '../services/auth.service';

// interfaces
import { LoginData } from '../interfaces/login-data.interface';
import { AuthResponse } from '../interfaces/auth-response.interface';
import { SignUpData } from '../interfaces/sign-up-data.interface';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private authService: AuthService, private router: Router) {}

  logIn$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(LogIn.type),
      mergeMap((payload: LoginData) => {
        return this.authService.logIn(payload.email, payload.password).pipe(
          map((response: any) => LogInSuccess(response)),
          catchError(error => Observable.of(LogInFailure(error)))
        );
      })
    );
  });

  LogInSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(LogInSuccess.type),
        tap((response: AuthResponse) => {
          localStorage.setItem('token', response.token);
          this.router.navigateByUrl('/');
        })
      );
    },
    { dispatch: false }
  );

  LogInFailure$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(LogInFailure.type)
        // tap((error) => console.log(error))
      );
    },
    { dispatch: false }
  );

  LogOut$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(LogOut.type),
      mergeMap(() => {
        return this.authService.logOut().pipe(map(() => LogOutSuccess()));
      })
    );
  });

  LogOutSucess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(LogOutSuccess.type),
        tap(() => {
          localStorage.removeItem('token');
          this.router.navigateByUrl('/');
        })
      );
    },
    { dispatch: false }
  );

  SignUp$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SignUp.type),
      mergeMap((payload: SignUpData) => {
        return this.authService.signUp(payload.email, payload.name, payload.password).pipe(
          map((response: any) => SignUpSuccess(response)),
          catchError((error: any) => Observable.of(SignUpFailure(error)))
        );
      })
    );
  });
}
