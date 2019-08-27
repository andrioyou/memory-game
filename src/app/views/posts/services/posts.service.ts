import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@src/environments/environment';
import { IPost } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get<IPost[]>(`${environment.dataUrl}/posts`);
  }

  getPost(id: number) {
    return this.http.get<IPost>(`${environment.dataUrl}/posts/${id}`);
  }
}
