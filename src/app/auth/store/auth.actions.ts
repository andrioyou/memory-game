import { createAction, props } from '@ngrx/store';

export const LogIn = createAction('[Auth] Login', props());
export const LogInSuccess = createAction('[Auth] Login Success', props());
export const LogInFailure = createAction('[Auth] Login Failure', props());
export const LogOut = createAction('[Auth] Logout');
export const LogOutSuccess = createAction('[Auth] Logout Sucess');
export const SignUp = createAction('[Auth] SignUp', props());
export const SignUpSuccess = createAction('[Auth] SignUp Success', props());
export const SignUpFailure = createAction('[Auth] SignUp Failure', props());
