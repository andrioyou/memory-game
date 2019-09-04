import { State, StateContext, Action } from '@ngxs/store';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError, combineLatest } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { ErrorDialogService } from '@src/app/core/services/error-dialog.service';
import { PostsService } from '../services/posts.service';
import { IPost } from '../interfaces/post.interface';
import { IComment } from '../interfaces/comment.interface';
import { GetPosts, GetPost, ClearPost } from './posts.actions';

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
  constructor(private postsService: PostsService, public errorDialogService: ErrorDialogService) {}

  handleHttpError(error: HttpErrorResponse) {
    this.errorDialogService.setError(error.name, error.message);
    return throwError(error);
  }

  @Action(GetPosts)
  getPosts(ctx: StateContext<IPostsState>) {
    const list = ctx.getState().list;
    if (!list.length) {
      return this.postsService.getPosts().pipe(
        tap((list: IPost[]) => ctx.patchState({ list })),
        catchError((error: HttpErrorResponse) => {
          return this.handleHttpError(error);
        })
      );
    }
  }

  @Action(GetPost)
  getPost(ctx: StateContext<IPostsState>, { id }: { id: number }) {
    return combineLatest(this.postsService.getPost(id), this.postsService.getPostComments(id)).pipe(
      tap(([post, comments]) => {
        ctx.patchState({
          post,
          comments
        });
      }),
      catchError((error: HttpErrorResponse) => {
        return this.handleHttpError(error);
      })
    );
  }

  @Action(ClearPost)
  clearPost(ctx: StateContext<IPostsState>) {
    ctx.patchState({
      post: null,
      comments: null
    });
  }
}
