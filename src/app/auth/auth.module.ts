import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { LogInComponent } from './container/log-in/log-in.component';
import { LoginFormComponent } from './components/login-form/login-form.component';

// routing
import { RouterModule } from '@angular/router';

// ngrx
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

// forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// http
import { HttpClientModule } from '@angular/common/http';

// auth
import { AuthService } from './services/auth.service';
import { AuthEffects } from './store/auth.effects';
import { AuthGuard } from './guards/auth.guard';
import { reducer } from './store/auth.reducers';
import { SignUpFormComponent } from './components/sign-up-form/sign-up-form.component';
import { SignUpComponent } from './container/sign-up/sign-up.component';

@NgModule({
  declarations: [LogInComponent, LoginFormComponent, SignUpFormComponent, SignUpComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    StoreModule.forFeature('auth', reducer),
    EffectsModule.forFeature([AuthEffects])
  ],
  providers: [AuthService, AuthGuard]
})
export class AuthModule {}
