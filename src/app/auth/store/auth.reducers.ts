import { Action, createReducer, on } from '@ngrx/store';
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

export interface AuthState {
  isAuthenticated: boolean;
  verification: boolean;
  errorMessage: string;
  successMessage: string;
}

export const initialState: AuthState = {
  isAuthenticated: localStorage.getItem('token') ? true : false,
  errorMessage: '',
  successMessage: '',
  verification: false
};

const authReducer = createReducer(
  initialState,
  on(LogIn, state => {
    return {
      ...state,
      verification: true,
      errorMessage: ''
    };
  }),
  on(LogInSuccess, state => {
    return {
      ...state,
      isAuthenticated: true,
      verification: false
    };
  }),
  on(LogInFailure, state => {
    return {
      ...state,
      errorMessage: 'Incorrect email and/or password.',
      verification: false
    };
  }),
  on(LogOut, state => {
    return {
      ...state,
      verification: true,
      successMessage: ''
    };
  }),
  on(LogOutSuccess, state => {
    return {
      ...state,
      isAuthenticated: false,
      verification: false
    };
  }),
  on(SignUp, state => {
    return {
      ...state,
      verification: true,
      errorMessage: ''
    };
  }),
  on(SignUpSuccess, state => {
    return {
      ...state,
      successMessage: 'You have successfully signed up.',
      verification: false
    };
  }),
  on(SignUpFailure, state => {
    return {
      ...state,
      errorMessage: 'User validation failed',
      verification: false
    };
  })
);

export function reducer(state: AuthState | undefined, action: Action) {
  return authReducer(state, action);
}
