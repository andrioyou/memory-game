import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxsModule } from '@ngxs/store';
import { PostsRoutingModule } from './posts-routing.module';

import { PostsService } from './services/posts.service';

import { PostsContainerComponent } from './container/posts-container/posts-container.component';
import { PostsListComponent } from './components/post-list/posts-list.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { PostsState } from './store/posts.state';

@NgModule({
  declarations: [PostsContainerComponent, PostsListComponent, PostDetailsComponent],
  imports: [CommonModule, PostsRoutingModule, NgxsModule.forFeature([PostsState])],
  providers: [PostsService]
})
export class PostsModule {}
