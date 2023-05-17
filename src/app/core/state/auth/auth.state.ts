import { ActionReducerMap } from '@ngrx/store';
import { userModel } from '../../models/auth.model';
import { AuthReducer } from './auth.reducer';

export interface AuthReducerState {
  user: userModel;
}

export const AUTH_REDUCERS: ActionReducerMap<AuthReducerState> = {
  user: AuthReducer,
};
