import contextFactory from './contextFactory';

import apiHelper from '../utils/apiHelper';
import { navigate } from '../utils/navigationRef';

const userReducer = (state, action) => {
  switch (action.type) {
    case 'SET_APP_LOADING':
      return { ...state, appLoading: true };
    case 'SET_LOADING':
      return { ...state, loading: true };
    case 'GET_ME':
      console.log('Get me');
      return {
        ...state,
        user: action.payload,
        error: '',
        loading: false,
        appLoading: false,
      };
    case 'UPDATE_ME':
      console.log('Update user');
      return { ...state, user: action.payload, appLoading: false };
    case 'SET_USER_ERROR':
      return {
        ...state,
        error: action.payload,
        loading: false,
        appLoading: false,
      };
    case 'CLEAR_USER_ERROR':
      return { ...state, error: '', loading: false, appLoading: false };
    case 'CLEAR_USER':
      return {
        ...state,
        user: null,
        error: '',
        loading: false,
        appLoading: false,
      };
    default:
      return state;
  }
};

const getMe = (dispatch) => async (userId) => {
  try {
    const { data } = await apiHelper.get(`/users/getuser/${userId}`);

    dispatch({ type: 'GET_ME', payload: data.user });
  } catch (error) {
    const payload = error.response
      ? error.response.data.message
      : error.message;

    dispatch({ type: 'SET_USER_ERROR', payload });
  }
};

const updateMe = (dispatch) => async ({
  userId,
  username,
  position,
  ID,
  email,
}) => {
  try {
    if (!userId || !username || !position || !ID || !email) {
      throw new Error('Please tell us your infomation');
    }
    const { data } = await apiHelper.post(`/users/${userId}/updateuser`, {
      userId,
      username,
      position,
      ID,
      email,
    });

    dispatch({ type: 'UPDATE_ME', payload: data.user });

    navigate('MyInfo');
  } catch (error) {
    const payload = error.response
      ? error.response.data.message
      : error.message;

    dispatch({ type: 'SET_USER_ERROR', payload });
  }
};

const clearError = (dispatch) => () => {
  dispatch({ type: 'CLEAR_USER_ERROR' });
};

const setLoading = (dispatch) => async () => {
  dispatch({ type: 'SET_LOADING' });
};

const clearUser = (dispatch) => async () => {
  dispatch({ type: 'CLEAR_USER' });
};

const setAppLoading = (dispatch) => async () => {
  dispatch({ type: 'SET_APP_LOADING' });
};

export const { Provider, Context } = contextFactory(
  userReducer,
  {
    getMe,
    updateMe,
    clearError,
    setLoading,
    setAppLoading,
    clearUser,
  },
  {
    user: null,
    error: '',
    loading: false,
    appLoading: false,
  }
);
