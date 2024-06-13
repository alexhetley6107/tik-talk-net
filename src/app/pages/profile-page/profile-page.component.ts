import { switchMap } from 'rxjs';
import { Component, inject } from '@angular/core';
import { ProfileService } from '../../shared/services/profile.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { toObservable } from '@angular/core/rxjs-interop';
import { ProfileHeaderComponent } from '../../widgets/profile-header/profile-header.component';
import { AsyncPipe } from '@angular/common';
import { SvgIconComponent } from '../../widgets/svg-icon/svg-icon.component';
import { ImgUrlPipe } from '../../shared/pipes/img-url.pipe';
import { PostComponent } from './post/post.component';
import { PostFeedComponent } from './post-feed/post-feed.component';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [
    ProfileHeaderComponent,
    AsyncPipe,
    SvgIconComponent,
    RouterLink,
    ImgUrlPipe,
    PostComponent,
    PostFeedComponent,
  ],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.scss',
})
export class ProfilePageComponent {
  profileService = inject(ProfileService);
  route = inject(ActivatedRoute);
  router = inject(Router);

  me$ = toObservable(this.profileService.me);
  subcribers$ = this.profileService.getSubscribersShortList(5);

  profile$ = this.route.params.pipe(
    switchMap(({ id }) => {
      // this.isMyPage.set(id === 'me' || id === this.profileService.me()?.id);
      if (id === 'me') return this.me$;

      return this.profileService.getAccount(id);
    })
  );
}
