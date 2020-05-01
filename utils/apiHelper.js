import axios from 'axios';
import { AsyncStorage } from 'react-native';

const instance = axios.create({
  baseURL: 'https://10.0.2.2:3000',
});

instance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('token');

    if (token) {
      // eslint-disable-next-line no-param-reassign
      config.headers.authorization = `Bearer ${token}`;
    }

    return config;
  },

  (err) => {
    return Promise.reject(err);
  }
);
export default instance;
