import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfoComponent {
  @Input() active!: number;
  @Input() length!: number;

  constructor() {}
}
