import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.reducer';
import * as AuthActions from './store/auth.actions';


@Injectable({ providedIn: 'root' })
export class AuthService {
  private logoutTimer: any;

  constructor(
    private store: Store<AppState>
    ) { }

  clearLogoutTimer() {
    if (this.logoutTimer) {
      clearTimeout(this.logoutTimer);
    }
  }

  setLogoutTimer(duaration: number) {
    this.logoutTimer = setTimeout(() => {
      this.store.dispatch(new AuthActions.Logout());
    }, duaration);
  }

}