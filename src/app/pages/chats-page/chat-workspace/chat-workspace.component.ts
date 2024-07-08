import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ChatWorkspaceHeaderComponent } from './chat-workspace-header/chat-workspace-header.component';
import { ChatWorkspaceMessagesWrapperComponent } from './chat-workspace-messages-wrapper/chat-workspace-messages-wrapper.component';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { ChatsService } from '../../../shared/services/chats.service';
import { ProfileService } from '../../../shared/services/profile.service';

@Component({
  selector: 'app-chat-workspace',
  standalone: true,
  imports: [ChatWorkspaceHeaderComponent, ChatWorkspaceMessagesWrapperComponent, AsyncPipe],
  templateUrl: './chat-workspace.component.html',
  styleUrl: './chat-workspace.component.scss',
})
export class ChatWorkspaceComponent {
  route = inject(ActivatedRoute);
  chatsService = inject(ChatsService);
  me = inject(ProfileService);

  // activeChat$ = this.route.params.pipe(switchMap(({ id }) => this.chatsService.getChatById(id)));
}
