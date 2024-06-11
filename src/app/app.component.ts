import { RouterOutlet } from '@angular/router';
import { Component, inject } from '@angular/core';
import { ProfileCardComponent } from './widgets/profile-card/profile-card.component';
import { ProfileService } from './shared/services/profile.service';
import { CommonModule } from '@angular/common';
import { Profile } from './shared/interfaces/profile.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ProfileCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  profileService = inject(ProfileService);
  profiles: Profile[] = [];

  constructor() {
    this.profileService.getTestAccounts().subscribe((val) => (this.profiles = val));
  }
}
