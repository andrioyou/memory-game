import { createAction, props } from '@ngrx/store';
import { User } from '../interfaces/user.interface';

export const LogIn = createAction('[Auth] Login', props<User>());
export const LogInSuccess = createAction('[Auth] Login Success', props<User>());
export const LogInFailure = createAction('[Auth] Login Failure', props());
export const LogOut = createAction('[Auth] Logout');
