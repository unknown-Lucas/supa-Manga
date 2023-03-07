import { ActionReducerMap } from '@ngrx/store';
import { AuthModel } from '../../models/auth.model';
import { AuthReducer } from './auth.reducers';

export interface AuthReducerState {
  auth: AuthModel;
}

export const AUTH_REDUCERS: ActionReducerMap<AuthReducerState> = {
  auth: AuthReducer,
};
