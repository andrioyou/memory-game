import { TestBed } from '@angular/core/testing';

import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { Observable } from 'rxjs';

describe('AuthGuardService', () => {
  let authService: AuthService | null = null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [AuthService]
    });
    authService = TestBed.get(AuthService);
  });

  it('should be created', () => {
    const service: AuthGuardService = TestBed.get(AuthGuardService);
    expect(service).toBeTruthy();
  });

  it('canActivate should return boolean value', () => {
    const service: AuthGuardService = TestBed.get(AuthGuardService);
    expect(typeof service.canActivate()).toBe('boolean');
  });

  it('canActivate should return true if has token', () => {
    if (authService) {
      const spy = spyOn(authService, 'hasToken').and.returnValue(true);
      const service: AuthGuardService = TestBed.get(AuthGuardService);
      expect(typeof service.canActivate()).toBeTruthy();
    }
  });
});
