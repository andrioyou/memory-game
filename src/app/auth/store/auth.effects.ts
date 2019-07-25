import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

// ngrx effects
import { Actions, createEffect, ofType } from '@ngrx/effects';

// rxjs
import { Observable } from 'rxjs/Observable';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import 'rxjs/add/observable/of';

// actions
import { LogIn, LogInSuccess, LogInFailure, LogOut } from './auth.actions';

// service
import { AuthService } from '../services/auth.service';

// user
import { User } from '../interfaces/user.interface';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private authService: AuthService, private router: Router) {}

  logIn$ = createEffect(() => {
    return this.actions$.pipe(
      ofType('[Auth] Login'),
      mergeMap((payload: User) => {
        return this.authService.logIn(payload.email, payload.password).pipe(
          map((user: User) => {
            return LogInSuccess({
              token: user.token,
              email: user.email,
              password: user.password,
              firstName: user.firstName,
              lastName: user.lastName
            });
          }),
          catchError(error => Observable.of(LogInFailure({ error })))
        );
      })
    );
  });

  LogInSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType('[Auth] Login Success'),
        tap((user: User) => {
          localStorage.setItem('email', user.email);
          if (user.token) {
            localStorage.setItem('token', user.token);
          }
          if (user.firstName) {
            localStorage.setItem('firstName', user.firstName);
          }
          if (user.lastName) {
            localStorage.setItem('lastName', user.lastName);
          }
          this.router.navigateByUrl('/');
        })
      );
    },
    { dispatch: false }
  );

  LogInFailure$ = createEffect(
    () => {
      return this.actions$.pipe(ofType('[Auth] Login Success'));
    },
    { dispatch: false }
  );

  LogOut$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType('[Auth] Logout'),
        tap(user => {
          localStorage.removeItem('token');
          localStorage.removeItem('email');
          localStorage.removeItem('firstName');
          localStorage.removeItem('lastName');
          this.router.navigateByUrl('/');
        })
      );
    },
    { dispatch: false }
  );
}
