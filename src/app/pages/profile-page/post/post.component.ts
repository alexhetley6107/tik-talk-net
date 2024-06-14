import { Component, OnInit, inject, input, signal } from '@angular/core';
import { Post, PostComment } from '../../../shared/interfaces/post.interface';
import { AvatarCircleComponent } from '../../../widgets/avatar-circle/avatar-circle.component';
import { DatePipe } from '@angular/common';
import { SvgIconComponent } from '../../../widgets/svg-icon/svg-icon.component';
import { PostService } from '../../../shared/services/post.service';
import { CommentComponent } from './comment/comment.component';
import { PostInputComponent } from '../post-input/post-input.component';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [AvatarCircleComponent, DatePipe, SvgIconComponent, CommentComponent, PostInputComponent],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
})
export class PostComponent implements OnInit {
  postService = inject(PostService);
  post = input<Post>();

  comments = signal<PostComment[]>([]);

  async ngOnInit() {
    this.comments.set(this.post()!.comments.reverse());
  }

  async onCreated() {
    const comments = await firstValueFrom(this.postService.getCommentsByPostId(this.post()!.id));
    this.comments.set(comments);
  }
}
