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
  errorMessage: string;
  successMessage: string;
}

export const initialState: AuthState = {
  isAuthenticated: localStorage.getItem('token') ? true : false,
  errorMessage: '',
  successMessage: ''
};

const authReducer = createReducer(
  initialState,
  on(LogIn, state => {
    return {
      ...state,
      errorMessage: ''
    };
  }),
  on(LogInSuccess, state => {
    return {
      ...state,
      isAuthenticated: true
    };
  }),
  on(LogInFailure, state => {
    return {
      ...state,
      errorMessage: 'Incorrect email and/or password.'
    };
  }),
  on(LogOut, state => {
    return {
      ...state,
      successMessage: ''
    };
  }),
  on(LogOutSuccess, state => {
    return {
      ...state,
      isAuthenticated: false
    };
  }),
  on(SignUp, state => {
    return {
      ...state,
      errorMessage: ''
    };
  }),
  on(SignUpSuccess, state => {
    return {
      ...state,
      successMessage: 'You have successfully signed up.'
    };
  }),
  on(SignUpFailure, state => {
    return {
      ...state,
      errorMessage: 'User validation failed'
    };
  })
);

export function reducer(state: AuthState | undefined, action: Action) {
  return authReducer(state, action);
}
