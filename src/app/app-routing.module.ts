import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';
import { HomePageComponent } from './components/home-page/home-page.component';

import { AuthGuardService as AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
  {
    path: 'memory-game',
    loadChildren: () => import('./modules/memory-game/memory-game.module').then(mod => mod.MemoryGameModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'selects',
    loadChildren: () => import('./modules/selects/selects.module').then(mod => mod.SelectsModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'guess-picture-name',
    loadChildren: () =>
      import('./modules/guess-picture-name/guess-picture-name.module').then(mod => mod.GuessPictureNameModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'log-in',
    component: LogInComponent
  },
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
