import axios from 'axios';
import  AsyncStorage from '@react-native-community/async-storage';

const instance = axios.create({
  baseURL: 'http://ea49fb0e3e4c.ngrok.io',
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
