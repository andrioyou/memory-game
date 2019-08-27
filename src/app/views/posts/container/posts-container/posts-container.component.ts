import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { PostsState, IPostsState } from '../../store/posts.state';
import { PostsService } from '../../services/posts.service';
import { IPost } from '../../interfaces/post.interface';
import { GetPosts, GetPost } from '../../store/posts.actions';

@Component({
  selector: 'app-posts-container',
  templateUrl: './posts-container.component.html',
  styleUrls: ['./posts-container.component.scss']
})
export class PostsContainerComponent implements OnInit {
  @Select(PostsState) state$!: Observable<IPostsState>;
  list: IPost[] | null = null;

  constructor(private store: Store, private postsService: PostsService) {}

  ngOnInit() {
    this.store.dispatch(new GetPosts());
    this.state$.subscribe(state => (this.list = state.list));
  }
}
