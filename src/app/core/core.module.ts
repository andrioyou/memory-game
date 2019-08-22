import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from 'src/environments/environment';

// browser
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// ngrx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// ngxs
import { NgxsModule } from '@ngxs/store';

// services
import { LocalstorageService } from './services/localstorage.service';
import { ValidationService } from './services/validation.service';

// interceptors
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from '../core/interceptors/token.interceptor';
import { ErrorInterceptor } from '../core/interceptors/token.interceptor';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    NgxsModule.forRoot([], { developmentMode: !environment.production })
  ],
  providers: [
    LocalstorageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    },
    ValidationService
  ]
})
export class CoreModule {}
