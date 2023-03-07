import { createFeatureSelector } from '@ngrx/store';
import { AuthReducerState } from './auth.state';

export const selectAuthFeature =
  createFeatureSelector<AuthReducerState>('AuthModule');
