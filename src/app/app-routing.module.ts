import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { LogInComponent } from './auth/components/log-in/log-in.component';
import { MyAccountComponent } from './auth/components/my-account/my-account.component';

import { HomePageComponent } from './shared/components/home-page/home-page.component';

// Auth
import { AuthGuardService as AuthGuard } from './auth/services/auth-guard.service';

const routes: Routes = [
  {
    path: 'memory-game',
    loadChildren: () => import('./memory-game/memory-game.module').then(mod => mod.MemoryGameModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'selects',
    loadChildren: () => import('./selects/selects.module').then(mod => mod.SelectsModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'guess-picture-name',
    loadChildren: () =>
      import('./guess-picture-name/guess-picture-name.module').then(mod => mod.GuessPictureNameModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'forms-layout',
    loadChildren: () => import('./forms-layout/forms-layout.module').then(mod => mod.FormsLayoutModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'todo',
    loadChildren: () => import('./todo/todo.module').then(mod => mod.TodoModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'my-account',
    component: MyAccountComponent,
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
