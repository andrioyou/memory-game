import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import 'rxjs/add/operator/catch';
import { LocalstorageService } from '../services/localstorage.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private localstorageService: LocalstorageService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.localstorageService.getToken();
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    return next.handle(request);
  }
}

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private router: Router, private localstorageService: LocalstorageService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).catch((response: any) => {
      if (response instanceof HttpErrorResponse && response.status === 401) {
        this.localstorageService.removeToken();
      }
      return throwError(response);
    });
  }
}
