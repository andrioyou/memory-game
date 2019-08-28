import { Component, Input } from '@angular/core';
import { IPost } from '../../interfaces/post.interface';
import { Location } from '@angular/common';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent {
  @Input() post!: IPost;

  constructor(private location: Location) {}

  goBack(e: Event) {
    e.preventDefault();
    this.location.back();
  }
}
