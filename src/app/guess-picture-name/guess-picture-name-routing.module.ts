import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuessWindowComponent } from './guess-window/guess-window.component';

const routes: Routes = [
  {
    path: '',
    component: GuessWindowComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuessPictureNameRoutingModule {}
