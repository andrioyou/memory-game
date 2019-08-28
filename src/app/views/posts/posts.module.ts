import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { NgxsModule } from '@ngxs/store';
import { PostsState } from './store/posts.state';
import { PostsService } from './services/posts.service';

import { PostListContainerComponent } from './containers/post-list-container/post-list-container.component';
import { PostDetailContainerComponent } from './containers/post-detail-container/post-detail-container.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { PostListComponent } from './components/post-list/post-list.component';

@NgModule({
  declarations: [PostListContainerComponent, PostDetailContainerComponent, PostDetailComponent, PostListComponent],
  imports: [CommonModule, PostsRoutingModule, NgxsModule.forFeature([PostsState])],
  providers: [PostsService]
})
export class PostsModule {}
