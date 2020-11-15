import { Action } from '@ngrx/store';
import { User } from '../user.model';


export const SIGNUP = '[auth]SIGNUP';
export const LOGIN = '[auth]LOGIN';
export const AUTHENTICATION_SUCCEED = '[auth]AUTHENTICATION_SUCCEED';
export const AUTHENTICATION_FAIL = '[auth]AUTHENTICATION_FAIL';
export const LOGOUT = '[auth]LOGOUT';
export const AUTO_LOGIN = '[auth]AUTO_LOGIN';


export class Signup implements Action {
  readonly type = SIGNUP;
  
  constructor(public payload: {email: string, password: string}) {}
}

export class Login implements Action {
  readonly type = LOGIN;
  
  constructor(public payload: {email: string, password: string}) {}
}

export class AuthenticationSucceed implements Action {
  readonly type = AUTHENTICATION_SUCCEED;

  constructor(public payload: User) {}
}

export class AuthenticationFail implements Action {
  readonly type = AUTHENTICATION_FAIL;

  constructor(public payload: string) {}
}

export class Logout implements Action {
  readonly type = LOGOUT;
}

export class AutoLogin implements Action {
  readonly type = AUTO_LOGIN;
}


export type AuthAction = Login 
  | Signup
  | Login
  | AuthenticationSucceed
  | AuthenticationFail
  | Logout 
  | AutoLogin
;