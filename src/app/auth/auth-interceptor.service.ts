import { HttpInterceptor, HttpRequest, HttpHandler, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { take, exhaustMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.reducer';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  constructor(
    private authService: AuthService,
    private store: Store<AppState>
  ) {}

  intercept(request: HttpRequest<any>, handler: HttpHandler) {
    return this.store.select('auth').pipe(
      take(1),
      exhaustMap(
        authState => {
          if (authState.user) {
            let modifiedRequest = request.clone({
              params: new HttpParams().set('auth', authState.user.token)
            });

            return handler.handle(modifiedRequest);
          }

          return handler.handle(request);
        }
      )
    )
    // return this.authService.user.pipe(
    //   take(1),
    //   exhaustMap(
    //     user => {
    //       if (user) {
    //         let modifiedRequest = request.clone({
    //           params: new HttpParams().set('auth', user.token)
    //         });

    //         return handler.handle(modifiedRequest);
    //       }

    //       return handler.handle(request);
    //     }
    //   )
    // )
  }
}