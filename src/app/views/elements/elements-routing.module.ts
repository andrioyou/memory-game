import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElementsListComponent } from './elements-list/elements-list.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { InputsComponent } from './inputs/inputs.component';
import { DynamicFormsComponent } from './dynamic-forms/dynamic-forms.component';

const routes: Routes = [
  {
    path: '',
    component: ElementsListComponent,
    children: [
      {
        path: 'buttons',
        component: ButtonsComponent
      },
      {
        path: 'inputs',
        component: InputsComponent
      },
      {
        path: 'dynamic-forms',
        component: DynamicFormsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElementsRoutingModule {}
