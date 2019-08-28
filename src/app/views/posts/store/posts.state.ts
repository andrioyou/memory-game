import { State, Store, StateContext, Action } from '@ngxs/store';
import { tap, mergeMap, filter, map } from 'rxjs/operators';
import { IPost } from '../interfaces/post.interface';
import { IComment } from '../interfaces/comment.interface';
import { GetPosts, GetPost, ClearPost } from './posts.actions';
import { PostsService } from '../services/posts.service';

export interface IPostsState {
  list: IPost[];
  activePost: {
    post: IPost;
    comments: IComment[];
  } | null;
}

@State<IPostsState>({
  name: 'posts',
  defaults: {
    list: [],
    activePost: null
  }
})
export class PostsState {
  constructor(private store: Store, private postsService: PostsService) {}

  @Action(GetPosts)
  getPosts(ctx: StateContext<IPostsState>) {
    const list = ctx.getState().list;
    if (!list.length) {
      return this.postsService.getPosts().pipe(tap((list: IPost[]) => ctx.patchState({ list })));
    }
  }

  @Action(GetPost)
  getPost(ctx: StateContext<IPostsState>, { id }: { id: number }) {
    return this.postsService
      .getPost(id)
      .pipe(
        mergeMap(() =>
          this.postsService
            .getPostComments(id)
            .pipe(map((comments: IComment[]) => comments.filter(comment => comment.postId === +id)))
        )
      )
      .pipe(
        tap((result: any) => {
          console.log(result);
        })
      );
    // this.postsService.getPost(id).pipe(
    //   tap((post: IPost) => {
    //     ctx.patchState({ activePost: { post, comments: [] } });
    //   })
    // );
  }

  @Action(ClearPost)
  clearPost(ctx: StateContext<IPostsState>) {
    ctx.patchState({ activePost: null });
  }
}
