import { State, Store, StateContext, Action } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { IPost } from '../interfaces/post.interface';
import { IComment } from '../interfaces/comment.interface';
import { GetPosts, GetPost, ClearPost, GetPostComments, ClearPostComments } from './posts.actions';
import { PostsService } from '../services/posts.service';

export interface IPostsState {
  // post list page
  list: IPost[];

  // post detail page
  post: IPost | null;
  comments: IComment[] | null;
}

@State<IPostsState>({
  name: 'posts',
  defaults: {
    list: [],
    post: null,
    comments: null
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
    return this.postsService.getPost(id).pipe(tap((post: IPost) => ctx.patchState({ post })));
  }

  @Action(GetPostComments)
  getPostComments(ctx: StateContext<IPostsState>, { id }: { id: number }) {
    return this.postsService.getPostComments(id).pipe(tap((comments: IComment[]) => ctx.patchState({ comments })));
  }

  @Action(ClearPost)
  clearPost(ctx: StateContext<IPostsState>) {
    ctx.patchState({ post: null });
  }

  @Action(ClearPostComments)
  clearPostComments(ctx: StateContext<IPostsState>) {
    ctx.patchState({ comments: null });
  }
}
