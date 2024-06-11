import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Profile } from '../interfaces/profile.interface';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  http = inject(HttpClient);
  url = 'https://icherniakov.ru/yt-course/';

  constructor() {}

  getTestAccounts() {
    return this.http.get<Profile[]>(`${this.url}account/test_accounts`);
  }
}
