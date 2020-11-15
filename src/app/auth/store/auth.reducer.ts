import { User } from '../user.model';
import * as authActions from './auth.actions';

export interface State {
  user: User,
  authError: string,
  loading: boolean
}

const initialState = {
  user: null,
  authError: null,
  loading: false
}

export function authReducer(state: State = initialState, action: authActions.AuthAction) {
  switch (action.type) {
    case authActions.SIGNUP: 
    case authActions.LOGIN: 
      return {
        ...state,
        authError: null,
        loading: true
      };

    case authActions.AUTHENTICATION_SUCCEED:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };

    case authActions.AUTHENTICATION_FAIL: 
      return {
        ...state,
        authError: action.payload,
        loading: false
      };

    case authActions.LOGOUT:
      return {
        ...state,
        user: null
      };

    default:
      return {
        ...state
      }
  }
}