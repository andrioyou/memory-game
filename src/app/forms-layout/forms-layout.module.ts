import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// routing
import { FormsLayoutRoutingModule } from './forms-layout-routing.module';

// components
import { FormsComponent } from './forms/forms.component';

// mask
import { NgxMaskModule } from 'ngx-mask';

// PrimeNG
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [FormsComponent],
  imports: [
    CommonModule,
    FormsLayoutRoutingModule,
    NgxMaskModule.forRoot(),
    FormsModule,
    ButtonModule,
    ReactiveFormsModule
  ]
})
export class FormsLayoutModule {}
