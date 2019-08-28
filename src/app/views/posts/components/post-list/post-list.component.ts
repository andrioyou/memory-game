import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { IPost } from '../../interfaces/post.interface';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostListComponent implements OnInit {
  @Input() postsList!: IPost[];

  constructor() {}

  ngOnInit() {}
}
