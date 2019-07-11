import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { User } from '../models/user';

@Injectable()
export class AuthService {
  private BASE_URL = 'https://my-json-server.typicode.com/andrioyou/my-json-server';

  constructor(private http: HttpClient) {}

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  hasToken(): boolean {
    return localStorage.getItem('token') ? true : false;
  }

  logIn(email: string, password: string): Observable<any> {
    const url = `${this.BASE_URL}/login`;
    // return this.http.get<User>(url, { email, password });
    return this.http.get(url);
  }

  signUp(email: string, password: string): Observable<User> {
    const url = `${this.BASE_URL}/register`;
    return this.http.post<User>(url, { email, password });
  }

  getStatus(): Observable<User> {
    const url = `${this.BASE_URL}/status`;
    return this.http.get<User>(url);
  }
}
