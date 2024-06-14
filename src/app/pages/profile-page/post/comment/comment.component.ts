import { Component, input } from '@angular/core';
import { AvatarCircleComponent } from '../../../../widgets/avatar-circle/avatar-circle.component';
import { DatePipe } from '@angular/common';
import { PostComment } from '../../../../shared/interfaces/post.interface';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [AvatarCircleComponent, DatePipe],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.scss',
})
export class CommentComponent {
  comment = input<PostComment>();
}
