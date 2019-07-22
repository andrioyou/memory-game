import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { LogInComponent } from './components/log-in/log-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { MyAccountComponent } from './components/my-account/my-account.component';

// routing
import { RouterModule } from '@angular/router';

// ngrx
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

// forms
import { FormsModule } from '@angular/forms';

// http
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

// auth
import { AuthService } from './services/auth.service';
import { AuthEffects } from './store/effects/auth.effects';
import { TokenInterceptor } from './services/token.interceptor';
import { ErrorInterceptor } from './services/token.interceptor';
import { AuthGuardService as AuthGuard } from './services/auth-guard.service';
import { reducers } from './store/app.states';

@NgModule({
  declarations: [LogInComponent, SignUpComponent, MyAccountComponent],
  imports: [
    CommonModule,
    FormsModule,
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
