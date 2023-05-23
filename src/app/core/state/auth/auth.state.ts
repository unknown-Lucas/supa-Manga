import { ActionReducerMap } from '@ngrx/store';
import { AuthReducer } from './auth.reducer';
import { userModel } from 'src/app/core/models/auth.model';

export interface AuthReducerState {
  user: userModel;
}

export const AUTH_REDUCERS: ActionReducerMap<AuthReducerState> = {
  user: AuthReducer,
};
