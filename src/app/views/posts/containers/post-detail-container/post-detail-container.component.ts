import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { untilComponentDestroyed } from '@w11k/ngx-componentdestroyed';
import { PostsState, IPostsState } from '../../store/posts.state';
import { ClearPost, GetPost, GetPostComments, ClearPostComments } from '../../store/posts.actions';

@Component({
  selector: 'app-post-detail-container',
  templateUrl: './post-detail-container.component.html',
  styleUrls: ['./post-detail-container.component.scss']
})
export class PostDetailContainerComponent implements OnInit, OnDestroy {
  @Select(PostsState) state$!: Observable<IPostsState>;

  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.pipe(untilComponentDestroyed(this)).subscribe((params: Params) => {
      if (params.id) {
        this.store.dispatch(new GetPost(params.id));
        this.store.dispatch(new GetPostComments(params.id));
      }
    });
  }

  ngOnDestroy() {
    this.store.dispatch(new ClearPost());
    this.store.dispatch(new ClearPostComments());
  }
}
