import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { ChatWorkspaceHeaderComponent } from './chat-workspace-header/chat-workspace-header.component';
import { ChatWorkspaceMessagesWrapperComponent } from './chat-workspace-messages-wrapper/chat-workspace-messages-wrapper.component';

@Component({
  selector: 'app-chat-workspace',
  standalone: true,
  imports: [ChatWorkspaceHeaderComponent, ChatWorkspaceMessagesWrapperComponent,  AsyncPipe],
  templateUrl: './chat-workspace.component.html',
  styleUrl: './chat-workspace.component.scss',
})
export class ChatWorkspaceComponent {}
