import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// ngrx
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

// http
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

// routing
import { AppRoutingModule } from './app-routing.module';

// components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MyAccountComponent } from './components/my-account/my-account.component';

// auth
import { AuthService } from './services/auth.service';
import { AuthEffects } from './store/effects/auth.effects';
import { TokenInterceptor } from './services/token.interceptor';
import { ErrorInterceptor } from './services/token.interceptor';
import { AuthGuardService as AuthGuard } from './services/auth-guard.service';
import { reducers } from './store/app.states';

@NgModule({
  declarations: [AppComponent, HeaderComponent, LogInComponent, SignUpComponent, HomePageComponent, MyAccountComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    EffectsModule.forRoot([AuthEffects]),
    StoreModule.forRoot(reducers, {})
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
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
