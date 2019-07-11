import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectsRoutingModule } from './selects-routing.module';
import { SelectsComponent } from './selects/selects.component';

import { SELECTS } from './selects.const';

@NgModule({
  declarations: [SelectsComponent],
  imports: [CommonModule, SelectsRoutingModule],
  providers: [SELECTS]
})
export class SelectsModule {}
