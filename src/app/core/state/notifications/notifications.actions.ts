import { createAction, props } from '@ngrx/store';

export namespace NotificationActions {
  export const SHOW_OK_MESSAGE = createAction(
    '[NOTIFICATION OK] SHOW OK MESSAGE',
    props<{ message: string }>()
  );

  export const SHOW_WARNING_MESSAGE = createAction(
    '[NOTIFICATION WARNING] SHOW WARNING MESSAGE',
    props<{ message: string }>()
  );

  export const SHOW_INFO_MESSAGE = createAction(
    '[NOTIFICATION INFO] SHOW INFO MESSAGE',
    props<{ message: string }>()
  );

  export const DONE = createAction('[NOTIFICATION DONE] DONE');
}
