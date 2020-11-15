import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from '../store/app.reducer';
import * as AuthActions from './store/auth.actions';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit, OnDestroy {
  isLoginMode = true;
  authForm: FormGroup;
  isLoading = false;
  error: string = null;

  private authSubscription: Subscription;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.authSubscription = this.store.select('auth').subscribe(
      authState => {
        this.isLoading = authState.loading;
        this.error = authState.authError;
      }
    );
  }

  initForm() {
    this.authForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z0-9]{6,18}$')])
    })
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit() {
    if (this.authForm.valid) {
      const value = this.authForm.value;

      if (this.isLoginMode) {
        this.store.dispatch(new AuthActions.Login({
          email: value.email, 
          password: value.password
        }));
      } else {
        this.store.dispatch(new AuthActions.Signup({
          email: value.email, 
          password: value.password
        }));
      }
    }
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }

}
