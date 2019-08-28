import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListContainerComponent } from './containers/post-list-container/post-list-container.component';
import { PostDetailContainerComponent } from './containers/post-detail-container/post-detail-container.component';

const routes: Routes = [
  {
    path: '',
    component: PostListContainerComponent
  },
  {
    path: ':id',
    component: PostDetailContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule {}
