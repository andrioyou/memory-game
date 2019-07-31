import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable } from 'rxjs';
import { untilComponentDestroyed } from '@w11k/ngx-componentdestroyed';

import { Store } from '@ngrx/store';
import { selectAuthState } from '../../auth/store/auth.states';
import { AuthState } from '../../auth/store/auth.reducers';
import { LogOut } from '../../auth/store/auth.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  getState: Observable<AuthState> = this.store.select(selectAuthState);
  isAuthenticated = false;

  constructor(private store: Store<AuthState>) {}

  ngOnInit() {
    this.getState
      .pipe(untilComponentDestroyed(this))
      .subscribe(state => (this.isAuthenticated = state.isAuthenticated));
  }

  ngOnDestroy() {}

  logOut(): void {
    this.store.dispatch(LogOut());
  }
}
