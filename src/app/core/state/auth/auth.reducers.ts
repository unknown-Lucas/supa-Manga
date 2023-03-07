import { createReducer, on } from '@ngrx/store';
import { AuthModel } from '../../models/auth.model';
import { AuthActions } from './auth.actions';

const initialState: AuthModel = {
  email: '',
  data: { favs: [], username: '' },
};

export const AuthReducer = createReducer<AuthModel>(
  initialState,
  on(AuthActions.LOG_IN_SUCCESS, (state, { authData }) => {
    return {
      ...state,
    };
  })
);
