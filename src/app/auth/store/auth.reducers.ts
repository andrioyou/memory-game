import { Action, createReducer, on } from '@ngrx/store';
import { LogInSuccess, LogInFailure, LogOut } from './auth.actions';

export interface AuthState {
  isAuthenticated: boolean;
  errorMessage: string;
}

export const initialState: AuthState = {
  isAuthenticated: localStorage.getItem('token') ? true : false,
  errorMessage: ''
};

const authReducer = createReducer(
  initialState,
  on(LogInSuccess, state => {
    return {
      ...state,
      isAuthenticated: true,
      errorMessage: ''
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

export function reducer(state: AuthState | undefined, action: Action) {
  return authReducer(state, action);
}
