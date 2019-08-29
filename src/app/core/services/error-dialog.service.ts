import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '@src/app/shared/components/error-dialog/error-dialog.component';

@Injectable()
export class ErrorDialogService {
  constructor(public dialog: MatDialog) {}

  setError(title: string, desc: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: {
        title,
        desc
      }
    });
  }
}
