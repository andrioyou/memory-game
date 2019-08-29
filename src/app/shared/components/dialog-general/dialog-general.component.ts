import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-dialog-general',
  templateUrl: './dialog-general.component.html',
  styleUrls: ['./dialog-general.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogGeneralComponent {
  @Input() title!: string;
  @Input() cancelButtonLabel!: string;
  @Input() confirmButtonLabel!: string;
  @Input() dataToReturn: any = true;

  constructor() {}
}
