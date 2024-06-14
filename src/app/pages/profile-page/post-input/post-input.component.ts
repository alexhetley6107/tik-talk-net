import { Component, EventEmitter, HostBinding, Output, Renderer2, inject, input } from '@angular/core';
import { AvatarCircleComponent } from '../../../widgets/avatar-circle/avatar-circle.component';
import { ProfileService } from '../../../shared/services/profile.service';
import { NgIf } from '@angular/common';
import { SvgIconComponent } from '../../../widgets/svg-icon/svg-icon.component';
import { FormsModule } from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import { PostService } from '../../../shared/services/post.service';

@Component({
  selector: 'app-post-input',
  standalone: true,
  imports: [AvatarCircleComponent, NgIf, SvgIconComponent, FormsModule],
  templateUrl: './post-input.component.html',
  styleUrl: './post-input.component.scss',
})
export class PostInputComponent {
  postService = inject(PostService);
  r2 = inject(Renderer2);
  profile = inject(ProfileService).me;

  isCommentInput = input(false);
  postId = input<number>(0);

  @Output() created = new EventEmitter();

  @HostBinding('class.comment')
  get isComment() {
    return this.isCommentInput();
  }

  postText = '';
  onTextAreaInput(event: Event) {
    const textarea = event.target as HTMLTextAreaElement;

    this.r2.setStyle(textarea, 'height', 'auto');
    this.r2.setStyle(textarea, 'height', textarea.scrollHeight + 'px');
  }

  onCreatePost() {
    if (!this.postText) return;

    if (this.isCommentInput()) {
      firstValueFrom(
        this.postService.createComment({
          text: this.postText,
          authorId: this.profile()!.id,
          postId: this.postId(),
        })
      ).then(() => {
        this.postText = '';
        this.created.emit();
      });
      return;
    }

    firstValueFrom(
      this.postService.createPost({
        title: 'Клевый пост',
        content: this.postText,
        authorId: this.profile()!.id,
      })
    ).then(() => {
      this.postText = '';
    });
  }
}
