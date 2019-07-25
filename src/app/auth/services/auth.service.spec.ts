import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { Observable } from 'rxjs/Observable';

// http
import { HttpClientModule } from '@angular/common/http';

// router
import { RouterTestingModule } from '@angular/router/testing';

describe('AuthService', () => {
  const service: AuthService = TestBed.get(AuthService);

  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule]
    })
  );

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should has getToken method which return the string from localstorage', () => {
    const token = service.getToken();
    expect(token).toBe(null);
  });
});
