import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthReducerState } from './auth.state';

export const selectAuthFeature =
  createFeatureSelector<AuthReducerState>('AuthModule');

export const selectIsUserLogged = createSelector(
  selectAuthFeature,
  (state: AuthReducerState) => {
    console.log(state);
    return state.user.isLogged;
  }
);

export const selectActualUserId = createSelector(
  selectAuthFeature,
  (state: AuthReducerState) => {
    return state.user.user.id;
  }
);
