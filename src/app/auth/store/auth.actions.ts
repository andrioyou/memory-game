import { createAction, props } from '@ngrx/store';

export const LogIn = createAction('[Auth] Login', props());
export const LogInSuccess = createAction('[Auth] Login Success', props());
export const LogInFailure = createAction('[Auth] Login Failure', props());
export const LogOut = createAction('[Auth] Logout');
