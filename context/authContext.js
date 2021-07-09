import { AsyncStorage } from 'react-native';

import contextFactory from './contextFactory';

import apiHelper from '../utils/apiHelper';
import { navigate, navigateReplace, navigatePop } from '../utils/navigationRef';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return {
        ...state,
        loading: true,
      };
    case 'LOGIN_SUCCESS':
      console.log('Login');
      return {
        ...state,
        isSignIn: true,
        token: action.payload,
        authError: '',
        loading: false,
      };
    case 'SIGNUP_SUCCESS':
      console.log('Signup');
      return {
        ...state,
        authError: '',
        loading: false,
      };
    case 'SET_AUTH_ERROR':
      return {
        ...state,
        authError: action.payload,
        loading: false,
      };
    case 'CLEAR_AUTH_ERROR':
      return { ...state, authError: '', loading: false };
    case 'TRY_LOGIN_FAIL':
      return { ...state, loading: false };
    case 'RESET_PASSWORD':
      console.log('Reset Password');
    case 'UPDATE_PASSWORD':
      console.log('Update Password');
      return {
        ...state,
        authError: '',
        loading: false,
      };
    case 'LOG_OUT':
      console.log('Logout');
      return {
        ...state,
        isSignIn: false,
        authError: '',
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
        throw new Error('Please enter your email and password!');
      }

      const { data } = await apiHelper.post('/users/login', {
        email,
        password,
      });

      await AsyncStorage.setItem('token', data.token);

      dispatch({ type: 'LOGIN_SUCCESS', payload: data.token });

      navigateReplace('Tab', {
        screen: 'Profile',
        params: {
          userId: data._id,
        },
      });
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
  plate
}) => {
  try {
    if (!username || !password || !position || !ID || !email || !plate) {
      throw new Error('Please enter all required fields!');
    }

    const { data } = await apiHelper.post('/users/signup', {
      username,
      password,
      position,
      ID,
      email,
      plate
    });

    dispatch({ type: 'SIGNUP_SUCCESS', payload: data });

    navigateReplace('Login');
  } catch (error) {
    const payload = error.response
      ? error.response.data.message
      : error.message;

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

  navigateReplace('Login');
};

const forgotPassword = (dispatch) => async ({ email }) => {
  try {
    // if (!email) {
    //   throw new Error('Please enter your email!');
    // }

    // await apiHelper.post('/users/forgotpassword', {
    //   email,
    // });

    navigateReplace('ResetPassword', { email });
  } catch (error) {
    const payload = error.response
      ? error.response.data.message
      : error.message;

    dispatch({ type: 'SET_AUTH_ERROR', payload });
  }
};

const setLoading = (dispatch) => async () => {
  dispatch({ type: 'SET_LOADING' });
};

const resetPassword = (dispatch) => async ({
  email,
  newpass,
  confirm,
  verify,
}) => {
  try {
    if (!email || !newpass || !confirm || !verify) {
      throw new Error('Please enter all required fields!');
    }

    await apiHelper.post(`/users/forgotpasswordcheck`, {
      email,
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

    dispatch({ type: 'SET_AUTH_ERROR', payload });
  }
};

const updatePassword = (dispatch) => async ({userId, oldpass, newpass , reenterpass}) => {
  try {
    if ( !reenterpass || !oldpass || !newpass) {
      throw new Error('Please enter all required fields!');
    }

    await apiHelper.post(`/users/changepass/${userId}`, {
      oldpass,
      newpass,
      reenterpass,
    });

    dispatch({ type: 'UPDATE_PASSWORD' });

    navigate('MyInfo');
  } catch (error) {
    const payload = error.response
      ? error.response.data.message
      : error.message;

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
  { isSignIn: false, token: null, authError: '', loading: false }
);
