import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.reducer';
import * as AuthActions from '../auth/store/auth.actions';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private userSub: Subscription;
  isAuthenticated = false;
  
  constructor(
    private dataStorageService: DataStorageService,
    private authService: AuthService,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.userSub = this.store.select('auth').subscribe(
      authState => {
        this.isAuthenticated = !!authState.user;
      }
    );
    // this.userSub = this.authService.user.subscribe(
    //   user => {
    //     this.isAuthenticated = !!user;
    //   }
    // );
  }

  onLogout() {
    this.store.dispatch(new AuthActions.Logout);
  }

  onSave() {
    this.dataStorageService.storeRecipes();
  }

  onFetch() {
    this.dataStorageService.fetchRecipes().subscribe();
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}