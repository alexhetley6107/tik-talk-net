import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { BASE_URL } from '../constants';
import { CommentCreateDto, Post, PostComment, PostCreateDto } from '../interfaces/post.interface';
import { map, switchMap, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  http = inject(HttpClient);

  url = `${BASE_URL}post`;

  posts = signal<Post[]>([]);

  createPost(payload: PostCreateDto) {
    return this.http.post<Post>(`${this.url}/`, payload).pipe(
      switchMap(() => {
        return this.fetchPosts();
      })
    );
  }

  fetchPosts() {
    return this.http.get<Post[]>(`${this.url}/`).pipe(tap((res) => this.posts.set(res.reverse())));
  }

  createComment(payload: CommentCreateDto) {
    return this.http.post<PostComment>(`${BASE_URL}comment/`, payload);
  }

  getCommentsByPostId(postId: number) {
    return this.http.get<Post>(`${this.url}/${postId}`).pipe(map((res) => res.comments.reverse()));
  }
}
