import { TestBed, async, inject } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuard]
    });
  });

  it('should ...', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));

  // it('should be created', () => {
  //   const service: AuthGuardService = TestBed.get(AuthGuardService);
  //   expect(service).toBeTruthy();
  // });

  // it('canActivate should return boolean value', () => {
  //   const service: AuthGuardService = TestBed.get(AuthGuardService);
  //   expect(typeof service.canActivate()).toBe('boolean');
  // });

  // it('canActivate should return true if has token', () => {
  //   if (authService) {
  //     const spy = spyOn(authService, 'hasToken').and.returnValue(true);
  //     const service: AuthGuardService = TestBed.get(AuthGuardService);
  //     expect(typeof service.canActivate()).toBeTruthy();
  //   }
  // });
});
