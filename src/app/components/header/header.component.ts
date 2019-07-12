import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs';

import { AppState, selectAuthState } from '../../store/app.states';
import { LogOut } from '../../store/actions/auth.actions';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  getState: Observable<any>;
  getStateSub: Subscription | null = null;
  isAuthenticated = false;
  user = null;

  constructor(private store: Store<AppState>, private authService: AuthService) {
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
    this.store.dispatch(new LogOut());
  }
}
