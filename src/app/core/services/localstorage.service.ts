import { Injectable } from '@angular/core';

@Injectable()
export class LocalstorageService {
  constructor() {}

  getToken() {
    return localStorage.getItem('token');
  }

  removeToken() {
    localStorage.removeItem('token');
  }
}
