import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { LogInComponent } from './containers/log-in/log-in.component';
import { MyAccountComponent } from './containers/my-account/my-account.component';

// routing
import { RouterModule } from '@angular/router';

// ngrx
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

// forms
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

// http
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

// auth
import { AuthService } from './services/auth.service';
import { AuthEffects } from './store/auth.effects';
import { TokenInterceptor } from './services/token.interceptor';
import { ErrorInterceptor } from './services/token.interceptor';
import { AuthGuardService as AuthGuard } from './services/auth-guard.service';
import { reducers } from './store/auth.states';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { AccountInfoComponent } from './components/account-info/account-info.component';

@NgModule({
  declarations: [LogInComponent, MyAccountComponent, LoginFormComponent, AccountInfoComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    EffectsModule.forRoot([AuthEffects]),
    StoreModule.forRoot(reducers)
  ],
  providers: [
    AuthService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }
  ]
})
export class AuthModule {}
