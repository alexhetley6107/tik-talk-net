import { Component, inject } from '@angular/core';
import { ChatsService } from '../../../shared/services/chats.service';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { map, startWith, switchMap } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { ChatsBtnComponent } from '../chats-btn/chats-btn.component';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-chats-list',
  standalone: true,
  imports: [ChatsBtnComponent, FormsModule, ReactiveFormsModule, AsyncPipe, RouterLink, RouterLinkActive],
  templateUrl: './chats-list.component.html',
  styleUrl: './chats-list.component.scss',
})
export class ChatsListComponent {
  chatsService = inject(ChatsService);

  filterChatsControl = new FormControl('');

  chats$ = this.chatsService.getMyChats().pipe(
    switchMap((chats) => {
      return this.filterChatsControl.valueChanges.pipe(
        startWith(''),
        map((inputValue) => {
          return chats.filter((chat) => {
            return `${chat.userFrom.lastName} ${chat.userFrom.firstName}`
              .toLowerCase()
              .includes(inputValue?.toLowerCase() ?? '');
          });
        })
      );
    })
  );
}
