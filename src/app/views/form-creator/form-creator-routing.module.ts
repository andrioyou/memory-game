import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormCreatorContainerComponent } from './container/form-creator-container/form-creator-container.component';

const routes: Routes = [
  {
    path: '',
    component: FormCreatorContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormCreatorRoutingModule {}
