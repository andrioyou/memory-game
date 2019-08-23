import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-elements-list',
  templateUrl: './elements-list.component.html',
  styleUrls: ['./elements-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ElementsListComponent {
  constructor() {}
}
