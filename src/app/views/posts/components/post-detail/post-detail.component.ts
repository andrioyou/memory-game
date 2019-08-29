import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { IPost } from '../../interfaces/post.interface';
import { Location } from '@angular/common';
import { IComment } from '../../interfaces/comment.interface';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostDetailComponent {
  @Input() post!: IPost;
  @Input() comments!: IComment[];

  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }
}
