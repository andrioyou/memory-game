import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectsRoutingModule } from './selects-routing.module';
import { SelectsComponent } from './selects/selects.component';
import { SharedModule } from '@src/app/shared/shared.module';

@NgModule({
  declarations: [SelectsComponent],
  imports: [CommonModule, SharedModule, SelectsRoutingModule]
})
export class SelectsModule {}
