import axios from 'axios';
import { AsyncStorage } from 'react-native';

const instance = axios.create({
  baseURL: 'http://1ae83229.ngrok.io',
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
