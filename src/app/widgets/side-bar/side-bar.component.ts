import { Component, inject } from '@angular/core';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';
import { SubscriberCardComponent } from './subscriber-card/subscriber-card.component';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ImgUrlPipe } from '../../shared/pipes/img-url.pipe';
import { ProfileService } from '../../shared/services/profile.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [SvgIconComponent, SubscriberCardComponent, AsyncPipe, JsonPipe, RouterLink, ImgUrlPipe, RouterLinkActive],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss',
})
export class SideBarComponent {
  profileService = inject(ProfileService);
  subcribers$ = this.profileService.getSubscribersShortList();

  me = this.profileService.me;

  menuItems = [
    {
      label: 'Моя страница',
      icon: 'home',
      link: 'profile/me',
    },
    {
      label: 'Чаты',
      icon: 'chats',
      link: 'chats',
    },
    {
      label: 'Поиск',
      icon: 'search',
      link: 'search',
    },
  ];

  ngOnInit() {
    firstValueFrom(this.profileService.getMe());
  }
}
