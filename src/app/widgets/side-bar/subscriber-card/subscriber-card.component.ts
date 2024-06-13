import { Component, Input } from '@angular/core';
import { ImgUrlPipe } from '../../../shared/pipes/img-url.pipe';
import { Profile } from '../../../shared/interfaces/profile.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-subscriber-card',
  standalone: true,
  imports: [ImgUrlPipe, RouterLink],
  templateUrl: './subscriber-card.component.html',
  styleUrl: './subscriber-card.component.scss',
})
export class SubscriberCardComponent {
  @Input() profile!: Profile;
}
