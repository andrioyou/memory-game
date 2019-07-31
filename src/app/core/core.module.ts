import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// browser
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// ngrx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [],
  imports: [CommonModule, BrowserModule, BrowserAnimationsModule, StoreModule.forRoot({}), EffectsModule.forRoot([])]
})
export class CoreModule {}
