import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { environment } from '../../../../environments/environment';

@Injectable()
export class AccountService {
  constructor(private http: HttpClient) {}

  getAccountInfo() {
    return this.http.get<User>(`${environment.apiUrl}/users/me`);
  }
}
