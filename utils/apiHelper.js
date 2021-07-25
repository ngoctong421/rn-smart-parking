import axios from 'axios';
import  AsyncStorage from '@react-native-async-storage/async-storage';

const instance = axios.create({
  baseURL: 'http://sparking-env.eba-3qp6imve.us-east-2.elasticbeanstalk.com/',
  // baseURL: 'https://votan-sparking.herokuapp.com/',
})

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
