import axios from 'axios';
import { AsyncStorage } from 'react-native';

const instance = axios.create({
  baseURL: 'http://b4e9fe67dbec.ngrok.io',
});

instance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('token');

    if (token) {
      // eslint-disable-next-line no-param-reassign
      config.headers.authorization = token;
    }

    return config;
  },

  (err) => {
    return Promise.reject(err);
  }
);

export default instance;
