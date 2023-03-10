import { createAction, props } from '@ngrx/store';
import { userModel } from '../../models/auth.model';

export namespace AuthActions {
  export const LOG_IN = createAction(
    '[AUTH LOGIN] LOGIN',
    props<{ email: string; password: string }>()
  );

  export const LOG_IN_SUCCESS = createAction(
    '[AUTH LOGIN] LOGIN_SUCCESS',
    props<{ user: userModel }>()
  );

  export const SING_UP = createAction(
    '[AUTH SING_UP] SING_UP',
    props<{ email: string; password: string }>()
  );

  export const SING_UP_SUCCESS = createAction(
    '[AUTH SING_UP] SING_UP SUCCESS',
    props<{ user: userModel }>()
  );

  export const CHECK_CURRENT_TOKEN = createAction('[AUTH] CHECK_CURRENT_USER');
}
