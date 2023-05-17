import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthReducerState } from './auth.state';

export const selectAuthFeature =
  createFeatureSelector<AuthReducerState>('AuthModule');

export const isUserLogged = createSelector(
  selectAuthFeature,
  (state: AuthReducerState) => {
    return state.user.user?.id ? true : false;
  }
);
