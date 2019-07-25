import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';

import { Store } from '@ngrx/store';
import { selectAuthState } from '../../../auth/store/auth.states';
import { LogOut } from '../../../auth/store/auth.actions';
import { AuthState } from '../../../auth/store/auth.reducers';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  getState: Observable<AuthState>;
  getStateSub: Subscription | null = null;
  isAuthenticated = false;

  constructor(private store: Store<AuthState>, private authService: AuthService) {
    this.getState = this.store.select(selectAuthState);
  }

  ngOnInit() {
    this.getStateSub = this.getState.subscribe(state => {
      this.isAuthenticated = state.isAuthenticated;
    });
  }

  ngOnDestroy() {
    if (this.getStateSub) {
      this.getStateSub.unsubscribe();
    }
  }

  logOut(): void {
    this.store.dispatch(LogOut());
  }
}
