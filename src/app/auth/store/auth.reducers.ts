import { createReducer, on } from '@ngrx/store';
import { LogInSuccess, LogInFailure, LogOut } from './auth.actions';

import { User } from '../interfaces/user.interface';

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  errorMessage: string | null;
}

export const initialState: AuthState = {
  isAuthenticated: localStorage.getItem('token') ? true : false,
  user: null,
  email: localStorage.getItem('email'),
  firstName: localStorage.getItem('firstName'),
  lastName: localStorage.getItem('lastName'),
  errorMessage: null
};

export const reducer = createReducer(
  initialState,
  on(LogInSuccess, (state, action: User) => {
    return {
      ...state,
      isAuthenticated: true,
      user: {
        token: action.token,
        email: action.email,
        password: ''
      },
      errorMessage: null
    };
  }),
  on(LogInFailure, state => {
    return {
      ...state,
      errorMessage: 'Incorrect email and/or password.',
      isAuthenticated: false
    };
  }),
  on(LogOut, state => {
    return {
      ...state,
      isAuthenticated: false
    };
  })
);
