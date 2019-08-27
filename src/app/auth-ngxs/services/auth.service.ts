import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { AuthResponse } from '../interfaces/auth-response.interface';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  getToken(): string | null {
    return localStorage.getItem('auth-ngxs-token');
  }

  setToken(token: string) {
    localStorage.setItem('auth-ngxs-token', token);
  }

  hasToken(): boolean {
    return localStorage.getItem('auth-ngxs-token') ? true : false;
  }

  removeToken() {
    localStorage.removeItem('auth-ngxs-token');
  }

  logIn(email: string, password: string) {
    return this.http.post<AuthResponse>(`${environment.authUrl}/users/login`, { email, password });
  }

  logOut() {
    return this.http.post(`${environment.authUrl}/users/logout`, {});
  }

  signUp(email: string, name: string, password: string) {
    return this.http.post(`${environment.authUrl}/users`, { email, name, password });
  }
}
