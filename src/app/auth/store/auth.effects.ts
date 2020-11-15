import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth.service';
import { User } from '../user.model';
import * as AuthActions from './auth.actions';


export interface AuthResponse {
  kind?: string,
  idToken: string,
  email: string,
  refreshToken: string,
  expiresIn: string,
  localId: string,
  registered?: boolean
}

@Injectable()
export class AuthEffects {
  @Effect()
  authLogin = this.actions$.pipe( // this observable is automatically subscribed by ngrx to observe actions thus it must not be dead
    ofType(AuthActions.LOGIN),
    switchMap( // whenever a login_start action is subcribe, we will subcribe a post (with switchmap we also cancel the old post subscription if it was not completed)
      (action: AuthActions.Login) => this.http.post<AuthResponse>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + environment.firebaseAPIKey,
        {
          email: action.payload.email,
          password: action.payload.password,
          returnSecureToken: true
        }
      )
        .pipe(  // since dont want the outter observable to die since http cant have error, we pipe right inside and then manipulate so that the result is always a non-error observable
          tap(
            response => {
              this.authService.setLogoutTimer(+response.expiresIn * 1000);
            }
          ),
          map(handleSuccess),
          catchError(handleFailure)
        )
    ),

  );

  @Effect()
  authSignup = this.actions$.pipe(
    ofType(AuthActions.SIGNUP),
    switchMap(
      (action: AuthActions.Signup) => this.http.post<AuthResponse>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + environment.firebaseAPIKey,
        {
          email: action.payload.email,
          password: action.payload.password,
          returnSecureToken: true
        }
      )
        .pipe(
          tap(
            response => {
              this.authService.setLogoutTimer(+response.expiresIn * 1000);
            }
          ),
          map(handleSuccess),
          catchError(handleFailure)
        )
    ),

  );

  @Effect({ dispatch: false })
  authSucceed = this.actions$.pipe(
    ofType(AuthActions.AUTHENTICATION_SUCCEED),
    tap(
      () => {
        this.router.navigate(['/']);
      }
    )
  )

  @Effect()
  authAutoLogin = this.actions$.pipe(
    ofType(AuthActions.AUTO_LOGIN),
    map(
      () => {
        const userData = JSON.parse(localStorage.getItem('userData'));

        if (!userData) {
          return {type: 'Dummy'};
        }

        const loadedUser = new User(
          userData.email,
          userData.id,
          userData._token,
          new Date(userData._tokenExpirationDate) // because this is a string after parsing
        );

        if (loadedUser.token) {
          const duaration = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
          this.authService.setLogoutTimer(duaration);
          return new AuthActions.AuthenticationSucceed(loadedUser);
        }

        return {type: 'Dummy'};
      }
    )
  )

  @Effect({ dispatch: false })
  authLogout = this.actions$.pipe(
    ofType(AuthActions.LOGOUT),
    tap(
      () => {
        this.authService.clearLogoutTimer();
        localStorage.removeItem('userData');
        this.router.navigate(['/auth']);
      }
    )
  )

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private router: Router,
    private authService: AuthService
  ) { }
}

// NOTES:
// the overall observable should nerver die
// typically with effects we will return action as observable
// in that case if that is something has error like http requests we would want to use process response and error internally as above then the outmost observable can not die
// in case we dont want to cancel the old observable we use switchmap
// in case we just need to return an action we may just use map()

function handleSuccess(response: AuthResponse) {
  const expirationDate = new Date(new Date().getTime() + +response.expiresIn * 1000);
  const user = new User(
    response.email,
    response.localId,
    response.idToken,
    expirationDate
  );
  localStorage.setItem('userData', JSON.stringify(user));
  return new AuthActions.AuthenticationSucceed(user);
}

function handleFailure(error: HttpErrorResponse) {
  let errorMessage = 'An unknow error has occurred.';

  if (error.error && error.error.error) {
    switch (error.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This email has been taken.';
        break;
      case 'EMAIL_NOT_FOUND':
      case 'INVALID_PASSWORD':
        errorMessage = 'Incorrect email or password.';
        break;
    }
  }

  return of(new AuthActions.AuthenticationFail(errorMessage));
}