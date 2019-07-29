import { Action, createReducer, on } from '@ngrx/store';
import { LogInSuccess, LogInFailure, LogOut } from './auth.actions';

// import { User } from '../interfaces/user.interface';

export interface AuthState {
  isAuthenticated: boolean;
  errorMessage: string | null;
}

export const initialState: AuthState = {
  isAuthenticated: localStorage.getItem('token') ? true : false,
  errorMessage: null
};

const authReducer = createReducer(
  initialState,
  on(LogInSuccess, state => {
    return {
      ...state,
      isAuthenticated: true,
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

export function reducer(state: AuthState | undefined, action: Action) {
  return authReducer(state, action);
}
