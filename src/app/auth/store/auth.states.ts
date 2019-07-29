import { createFeatureSelector } from '@ngrx/store';
import { AuthState } from './auth.reducers';

export const selectAuthState = createFeatureSelector<AuthState>('auth');
