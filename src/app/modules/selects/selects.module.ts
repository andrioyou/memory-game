import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectsRoutingModule } from './selects-routing.module';
import { SelectsComponent } from './selects/selects.component';

@NgModule({
  declarations: [SelectsComponent],
  imports: [CommonModule, SelectsRoutingModule]
})
export class SelectsModule {}
