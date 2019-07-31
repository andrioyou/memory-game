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
import { AuthGuard } from './guards/auth.guard';
import { reducer } from './store/auth.reducers';

@NgModule({
  declarations: [LogInComponent, LoginFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    StoreModule.forFeature('auth', reducer),
    EffectsModule.forFeature([AuthEffects])
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
