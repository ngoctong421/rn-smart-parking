import { AsyncStorage } from 'react-native';

import contextFactory from './contextFactory';

import apiHelper from '../utils/apiHelper';
import { navigate, navigateReplace } from '../utils/navigationRef';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: true };
    case 'LOGIN_SUCCESS':
    case 'SIGNUP_SUCCESS':
    case 'SET_AUTH_ERROR':
      return { ...state, error: action.payload, loading: false };
    case 'CLEAR_AUTH_ERROR':
      return { ...state, error: '', loading: false };
    case 'TRY_LOGIN_FAIL':
      return { ...state, loading: false };
    case 'RESET_PASSWORD':
    case 'UPDATE_PASSWORD':
      return {
        ...state,
        error: '',
        token: '',
        loading: false,
        isSignIn: false,
      };
    case 'LOG_OUT':
      return {
        ...state,
        error: '',
        token: '',
        isSignIn: false,
        loading: false,
      };
    default:
      return state;
  }
};

const signIn = (dispatch) => {
  return async ({ email, password }) => {
    try {
      if (!email || !password) {
        throw new Error('Please enter email and password!');
      }

      const { data } = await apiHelper.post('/users/login', {
        email,
        password,
      });

      await AsyncStorage.setItem('token', data.user.token);

      dispatch({ type: 'LOGIN_SUCCESS', payload: data });

      navigateReplace('Tab');
    } catch (error) {
      const payload = error.response
        ? error.response.data.message
        : error.message;
        
      dispatch({ type: 'SET_AUTH_ERROR', payload });
    }
  };
};

const signUp = (dispatch) => async ({
  username,
  password,
  position,
  ID,
  email,
}) => {
  try {
    if (!username || !password || !position || !ID || !email) {
      throw new Error('Please enter all required fields!');
    }

    const { data } = await apiHelper.post('/users/signup', {
      username,
      password,
      position,
      ID,
      email,
    });

    dispatch({ type: 'SIGNUP_SUCCESS', payload: data });

    navigateReplace('Login');
  } catch (error) {
    const payload = error.response
      ? error.response.data.message
      : error.message;

    console.log(error, payload);

    dispatch({ type: 'SET_AUTH_ERROR', payload });
  }
};

const tryLocalSignIn = (dispatch) => async () => {
  const token = await AsyncStorage.getItem('token');

  if (token) {
    dispatch({ type: 'LOGIN_SUCCESS', payload: token });
    return;
  }

  dispatch({ type: 'TRY_LOGIN_FAIL' });
};

const clearError = (dispatch) => () => {
  dispatch({ type: 'CLEAR_AUTH_ERROR' });
};

const signOut = (dispatch) => async () => {
  await AsyncStorage.removeItem('token');

  dispatch({ type: 'LOG_OUT' });

  navigateReplace('Welcome');
};

const forgotPassword = (dispatch) => async ({ email }) => {
  try {
    if (!email) {
      throw new Error('Please enter email!');
    }

    await apiHelper.post('/users/forgotpassword', {
      email,
    });

    navigateReplace('ResetPassword');
  } catch (error) {
    const payload = error.response
      ? error.response.data.message
      : error.message;

    console.log(error, payload);

    dispatch({ type: 'SET_AUTH_ERROR', payload });
  }
};

const setLoading = (dispatch) => async () => {
  dispatch({ type: 'SET_LOADING' });
};

const resetPassword = (dispatch) => async ({ newpass, confirm, verify }) => {
  try {
    if (!newpass || !confirm || !verify) {
      throw new Error('Please enter all required fields!');
    }

    await apiHelper.post(`/users/forgotpasswordcheck`, {
      newpass,
      confirm,
      verify,
    });

    dispatch({ type: 'RESET_PASSWORD' });

    navigateReplace('Login');
  } catch (error) {
    const payload = error.response
      ? error.response.data.message
      : error.message;

    console.log(error, payload);

    dispatch({ type: 'SET_AUTH_ERROR', payload });
  }
};

const updatePassword = (dispatch) => async ({ oldpass, newpass }) => {
  try {
    if (!passwordCurrent || !password || !passwordConfirm) {
      throw new Error('Please enter password and and new password!');
    }

    await apiHelper.post(`/users/changepass`, {
      oldpass,
      newpass,
    });

    dispatch({ type: 'UPDATE_PASSWORD' });
  } catch (error) {
    const payload = error.response
      ? error.response.data.message
      : error.message;

    console.log(error, payload);

    dispatch({ type: 'SET_AUTH_ERROR', payload });
  }
};

export const { Provider, Context } = contextFactory(
  authReducer,
  {
    signIn,
    signUp,
    signOut,
    clearError,
    tryLocalSignIn,
    forgotPassword,
    setLoading,
    resetPassword,
    updatePassword,
  },
  { isSignIn: false, token: null, error: '', loading: false }
);
