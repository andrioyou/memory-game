import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StreamEditComponent } from './stream-edit/stream-edit.component';

const routes: Routes = [
  {
    path: '',
    component: StreamEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StreamEditRoutingModule {}
