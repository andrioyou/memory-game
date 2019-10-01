import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StreamEditRoutingModule } from './stream-edit-routing.module';
import { StreamEditComponent } from './stream-edit/stream-edit.component';

@NgModule({
  declarations: [StreamEditComponent],
  imports: [CommonModule, StreamEditRoutingModule]
})
export class StreamEditModule {}
