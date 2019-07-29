import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

// import { of } from 'rxjs';

describe('AuthService', () => {
  // let httpClientSpy: { get: jasmine.Spy } | null = null;
  // let authService: AuthService | null = null;
  let httpTestingController: HttpTestingController | null = null;
  let service: AuthService | null = null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService]
    });
    // httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    // authService = new AuthService(httpClientSpy as any);

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

  it('getUserInfo returned Observable should match the right data', () => {
    const mockUser = {
      name: 'Test',
      createAt: '12:00:00'
    };

    if (service && httpTestingController) {
      service.getUserInfo().subscribe((resp: any) => {
        expect(resp.name).toEqual('Test');
      });

      const req = httpTestingController.expectOne(
        'https://cors-anywhere.herokuapp.com/https://secure-thicket-43598.herokuapp.com/users/me'
      );

      expect(req.request.method).toEqual('GET');

      req.flush(mockUser);
    }
  });
});
