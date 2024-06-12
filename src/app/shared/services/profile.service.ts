import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Profile } from '../interfaces/profile.interface';
import { BASE_URL } from '../constants';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  http = inject(HttpClient);

  getTestAccounts() {
    return this.http.get<Profile[]>(`${BASE_URL}account/test_accounts`);
  }

  getMe() {
    return this.http.get<Profile>(`${BASE_URL}account/me`);
  }
}
