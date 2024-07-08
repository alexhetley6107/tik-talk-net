import { Component, input } from '@angular/core';
import { AvatarCircleComponent } from '../../../widgets/avatar-circle/avatar-circle.component';
import { LastMessageRes } from '../../../shared/interfaces/chats.interface';

@Component({
  selector: 'button[chats]',
  standalone: true,
  imports: [AvatarCircleComponent],
  templateUrl: './chats-btn.component.html',
  styleUrl: './chats-btn.component.scss',
})
export class ChatsBtnComponent {
  chat = input<LastMessageRes>();
}
