import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

// components
import * as fromComponents from './components';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';

// directives
import { DebounceClickDirective } from './directives/debounce-click.directive';

// Material
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCheckboxModule } from '@angular/material/checkbox';

const material = [
  MatButtonModule,
  DragDropModule,
  MatFormFieldModule,
  MatSelectModule,
  MatDialogModule,
  MatCardModule,
  MatProgressBarModule,
  MatTableModule,
  MatInputModule,
  MatPaginatorModule,
  MatSortModule,
  MatCheckboxModule
];

@NgModule({
  declarations: [...fromComponents.components, DebounceClickDirective],
  imports: [CommonModule, RouterModule, ReactiveFormsModule, ...material],
  entryComponents: [ErrorDialogComponent],
  exports: [...fromComponents.components, ...material, ReactiveFormsModule]
})
export class SharedModule {}
