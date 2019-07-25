import { createFeatureSelector } from '@ngrx/store';
import { AuthState, reducer } from './auth.reducers';

export const reducers: any = {
  auth: reducer
};

export const selectAuthState = createFeatureSelector<AuthState>('auth');
