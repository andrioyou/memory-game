import { State, Store, StateContext, Action } from '@ngxs/store';
import { IPost } from '../interfaces/post.interface';
import { GetPosts, GetPost } from './posts.actions';
import { PostsService } from '../services/posts.service';
import { tap } from 'rxjs/operators';

export interface IPostsState {
  list: IPost[];
  activePost: IPost | null;
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
    return this.postsService.getPosts().pipe(tap((posts: IPost[]) => ctx.patchState({ list: posts })));
  }

  @Action(GetPost)
  getPost(ctx: StateContext<IPostsState>, { id }: { id: number }) {
    return this.postsService.getPost(id).pipe(tap((post: IPost) => ctx.patchState({ activePost: post })));
  }
}
