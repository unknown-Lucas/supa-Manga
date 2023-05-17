import { createReducer, on } from '@ngrx/store';
import { User, userModel } from '../../models/auth.model';
import { AuthActions } from './auth.actions';

const initialState: userModel = {
  access_token: '',
  token_type: 'bearer',
  expires_in: 3600,
  refresh_token: '',
  user: {
    id: '',
    aud: '',
    role: '',
    email: '',
    email_confirmed_at: new Date(),
    phone: '',
    confirmation_sent_at: new Date(),
    confirmed_at: new Date(),
    last_sign_in_at: new Date(),
    app_metadata: {
      provider: '',
      providers: [],
    },
    user_metadata: {},
    identities: [
      {
        id: '',
        user_id: '',
        identity_data: {
          email: '',
          sub: '',
        },
        provider: '',
        last_sign_in_at: new Date(),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ],
    created_at: new Date(),
    updated_at: new Date(),
  },
};

export const AuthReducer = createReducer<userModel>(
  initialState,
  on(AuthActions.LOG_IN_SUCCESS, (state, { user }) => {
    const token = localStorage.getItem('Auth');
    if (!token) {
      localStorage.setItem('Auth', user.access_token);
      localStorage.setItem('savedAt', new Date().getTime().toString());
      localStorage.setItem(
        'expiratesAt',
        String(Number(user.expires_in) * 1000 + Number(new Date().getTime()))
      );
    }
    return {
      ...state,
      user: (user?.user ?? user) as any,
    };
  }),
  on(AuthActions.SET_USER_DATA, (state, { user }) => {
    return {
      ...state,
      user: (user?.user ?? user) as User,
    };
  })
);
