import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { PostsState, IPostsState } from '../../store/posts.state';
import { GetPosts } from '../../store/posts.actions';

@Component({
  selector: 'app-post-list-container',
  templateUrl: './post-list-container.component.html',
  styleUrls: ['./post-list-container.component.scss']
})
export class PostListContainerComponent implements OnInit {
  @Select(PostsState) state$!: Observable<IPostsState>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(new GetPosts());
  }
}
