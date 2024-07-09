import { Component, inject, input } from '@angular/core';
import { ChatWorkspaceMessageComponent } from './chat-workspace-message/chat-workspace-message.component';
import { Chat } from '../../../../shared/interfaces/chats.interface';
import { ChatsService } from '../../../../shared/services/chats.service';
import { firstValueFrom } from 'rxjs';
import { MessageInputComponent } from '../../../../widgets/message-input/message-input.component';

@Component({
  selector: 'app-chat-workspace-messages-wrapper',
  standalone: true,
  imports: [ChatWorkspaceMessageComponent, MessageInputComponent],
  templateUrl: './chat-workspace-messages-wrapper.component.html',
  styleUrl: './chat-workspace-messages-wrapper.component.scss',
})
export class ChatWorkspaceMessagesWrapperComponent {
  chat = input.required<Chat>();

  chatsService = inject(ChatsService);

  messages = this.chatsService.activeChatMessages;

  async onSendMessage(messageText: string) {
    await firstValueFrom(this.chatsService.sendMessage(this.chat().id, messageText));

    await firstValueFrom(this.chatsService.getChatById(this.chat().id));
  }
}
