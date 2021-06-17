import axios from 'axios';
import  AsyncStorage from '@react-native-community/async-storage';

const instance = axios.create({
  baseURL: 'http://c87705a28652.ngrok.io',
  // baseURL: 'https://votan-sparking.herokuapp.com/',
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
