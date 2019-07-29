import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private BASE_URL = 'https://cors-anywhere.herokuapp.com/https://secure-thicket-43598.herokuapp.com';

  constructor(private http: HttpClient) {}

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  hasToken(): boolean {
    return localStorage.getItem('token') ? true : false;
  }

  logIn(email: string, password: string) {
    const url = this.BASE_URL + '/users/login';
    return this.http.post(url, { email, password });
  }

  signUp(email: string, name: string, password: string) {
    const url = this.BASE_URL + '/users';
    return this.http.post(url, { email, name, password });
  }

  getUserInfo(): Observable<any> {
    const url = this.BASE_URL + '/users/me';
    return this.http.get(url);
  }
}
