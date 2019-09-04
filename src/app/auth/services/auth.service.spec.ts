import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('AuthService', () => {
  let httpTestingController: HttpTestingController | null = null;
  let service: AuthService | null = null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService]
    });

    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(AuthService);
  });

  afterEach(() => {
    if (httpTestingController) {
      httpTestingController.verify();
    }
  });

  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });

  it('should has getToken method which return the string from localstorage', () => {
    const service: AuthService = TestBed.get(AuthService);
    const token = service.getToken();
    expect(token).toBe(null);
  });

  it('login returned Observable should match the right data', () => {
    const mockResp = {
      token: '1234',
      user: {}
    };

    if (service && httpTestingController) {
      service.logIn('test', 'test').subscribe((resp: any) => {
        expect(resp.token).toEqual('1234');
      });

      const req = httpTestingController.expectOne(
        'https://cors-anywhere.herokuapp.com/https://secure-thicket-43598.herokuapp.com/users/login'
      );

      expect(req.request.method).toEqual('POST');

      req.flush(mockResp);
    }
  });

  it('login returned Observable should match the right data', () => {
    const mockResp = {
      token: '1234',
      user: {}
    };

    if (service && httpTestingController) {
      service.logIn('test', 'test').subscribe((resp: any) => {
        expect(resp.token).toEqual('1234');
      });

      const req = httpTestingController.expectOne(
        'https://cors-anywhere.herokuapp.com/https://secure-thicket-43598.herokuapp.com/users/login'
      );

      expect(req.request.method).toEqual('POST');

      req.flush(mockResp);
    }
  });

  it('signup returned Observable should match the right data', () => {
    const mockResp = {
      token: '1234',
      user: {}
    };

    if (service && httpTestingController) {
      service.signUp('test', 'test', 'test').subscribe((resp: any) => {
        expect(resp.token).toEqual('1234');
      });

      const req = httpTestingController.expectOne(
        'https://cors-anywhere.herokuapp.com/https://secure-thicket-43598.herokuapp.com/users'
      );

      expect(req.request.method).toEqual('POST');

      req.flush(mockResp);
    }
  });
});
