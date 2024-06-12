import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { Profile } from '../interfaces/profile.interface';
import { BASE_URL } from '../constants';
import { map, tap } from 'rxjs';
import { Pageble } from '../interfaces/pageble.interface';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  http = inject(HttpClient);
  url = `${BASE_URL}account`;

  me = signal<Profile | null>(null);

  getTestAccounts() {
    return this.http.get<Profile[]>(`${this.url}/test_accounts`);
  }

  getMe() {
    return this.http.get<Profile>(`${this.url}/me`).pipe(tap((res) => this.me.set(res)));
  }

  getAccount(id: string) {
    return this.http.get<Profile>(`${this.url}/${id}`);
  }

  getSubscribersShortList(subsAmount = 3) {
    return this.http
      .get<Pageble<Profile>>(`${this.url}/subscribers/`)
      .pipe(map((res) => res.items.slice(0, subsAmount)));
  }
}
