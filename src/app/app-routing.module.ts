import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'memory-game',
    loadChildren: () => import('./memory-game/memory-game.module').then(mod => mod.MemoryGameModule)
  },
  {
    path: 'selects',
    loadChildren: () => import('./selects/selects.module').then(mod => mod.SelectsModule)
  },
  {
    path: 'guess-picture-name',
    loadChildren: () => import('./guess-picture-name/guess-picture-name.module').then(mod => mod.GuessPictureNameModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
