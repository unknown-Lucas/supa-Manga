import { createReducer, on } from '@ngrx/store';
import { AuthActions } from './auth.actions';
import { User, userModel } from 'src/app/core/models/auth.model';

const initialState: userModel = {
  isLogged: false,
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
      isLogged: true,
      user: (user?.user ?? user) as User,
    };
  }),
  on(AuthActions.SET_USER_DATA, (state, { user }) => {
    return {
      ...state,
      user: (user?.user ?? user) as User,
    };
  }),

  on(AuthActions.LOG_OUT, (state) => {
    return {
      ...initialState,
    };
  })
);
