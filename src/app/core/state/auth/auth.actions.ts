import { createAction, props } from '@ngrx/store';
import { userForm, userModel } from 'src/app/core/models/auth.model';

export namespace AuthActions {
  export const LOG_IN = createAction('[AUTH] LOGIN', props<userForm>());

  export const LOG_IN_SUCCESS = createAction(
    '[AUTH] LOGIN_SUCCESS',
    props<{ user: userModel }>()
  );

  export const SET_USER_DATA = createAction(
    '[MANGAS] SET ALL USER DATA',
    props<{ user: userModel }>()
  );

  export const SING_UP = createAction('[AUTH] SING_UP', props<userForm>());

  export const SING_UP_SUCCESS = createAction(
    'AUTH] SING_UP SUCCESS',
    props<{ user: userModel }>()
  );

  export const LOG_OUT = createAction('[AUTH] LOG OUT');

  export const CHECK_CURRENT_TOKEN = createAction('[AUTH] CHECK_CURRENT_USER');
}
