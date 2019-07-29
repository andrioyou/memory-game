import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// modules
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';

// ngrx
// import { EffectsModule } from '@ngrx/effects';
// import { StoreModule } from '@ngrx/store';

// routing
import { AppRoutingModule } from './app-routing.module';

// component
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, SharedModule, AuthModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
