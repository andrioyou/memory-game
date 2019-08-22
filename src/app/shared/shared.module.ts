import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import * as fromComponents from './components';

// Material
import { MatButtonModule } from '@angular/material/button';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  declarations: [...fromComponents.components],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    DragDropModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  exports: [
    ...fromComponents.components,
    ReactiveFormsModule,
    DragDropModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule
  ]
})
export class SharedModule {}
