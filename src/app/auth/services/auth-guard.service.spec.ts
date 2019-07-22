import { TestBed } from '@angular/core/testing';

import { AuthGuardService } from './auth-guard.service';

// http
import { HttpClientModule } from '@angular/common/http';

// router
import { RouterTestingModule } from '@angular/router/testing';

describe('AuthGuardService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule]
    })
  );

  it('should be created', () => {
    const service: AuthGuardService = TestBed.get(AuthGuardService);
    expect(service).toBeTruthy();
  });

  it('canActivate should return boolean value', () => {
    const service: AuthGuardService = TestBed.get(AuthGuardService);
    expect(typeof service.canActivate()).toBe('boolean');
  });
});
