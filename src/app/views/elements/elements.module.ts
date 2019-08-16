import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementsRoutingModule } from './elements-routing.module';

import { ElementsListComponent } from './elements-list/elements-list.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { InputsComponent } from './inputs/inputs.component';
import { DynamicFormsComponent } from './dynamic-forms/dynamic-forms.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [ElementsListComponent, ButtonsComponent, InputsComponent, DynamicFormsComponent],
  imports: [
    CommonModule,
    ElementsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    NgxMaskModule.forRoot()
  ],
  bootstrap: [ElementsListComponent]
})
export class ElementsModule {}
