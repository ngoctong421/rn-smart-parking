import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ToastAndroid,
} from 'react-native';

import { Context as AuthContext } from '../context/authContext';

import LoadingComponent from '../components/LoadingComponent';
import trimData from '../utils/trimData';
import { navigate, navigateReplace } from '../utils/navigationRef';

import mainlogo from '../assets/mainlogo.png';
import { useEffect } from 'react/cjs/react.development';


const LoginScreen = (props) => {
  const [inputData, setInputData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = inputData;

  const handleOnChange = (key) => (text) => {
    setInputData({ ...inputData, [key]: text });
  };

  const {
    signIn,
    clearError,
    setLoading,
    authError,
    loading,
  } = useContext(AuthContext);

  const handleOnSubmit = async () => {
    const cleanData = trimData(inputData);
    setInputData(cleanData);
    clearError();
    setLoading();
    signIn(cleanData);
  };

  useEffect(() => {
    if (authError !== '' && authError) {
      ToastAndroid.show(authError, ToastAndroid.SHORT, ToastAndroid.BOTTOM);
      clearError();
    }
  }, [authError])

  return (
    <View style={styles.container}>
      {loading && <LoadingComponent />}

      <Image source={mainlogo} style={styles.imagestyle} />

      <View style={styles.blockcontainer}>
        <Text style={styles.maintitle}>WELCOME BACK!</Text>

        <Text style={styles.subtitle}>LONG TIME NO SEE!</Text>

        <Text style={styles.textinfo}>Email</Text>
        <TextInput
          style={styles.inputstyle}
          value={email}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={handleOnChange('email')}
        />

        <Text style={styles.textinfo}>Password</Text>
        <TextInput
          style={styles.inputstyle}
          value={password}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          onChangeText={handleOnChange('password')}
        />

        <TouchableOpacity style={styles.buttonstyle} onPress={handleOnSubmit}>
          <Text style={styles.buttontext}>LOG IN</Text>
        </TouchableOpacity>

        <View style={styles.textcontainer}>
          <Text>Forgot your password?</Text>
          <TouchableOpacity
            onPress={() => {
              navigateReplace('ForgetPassword');
            }}
          >
            <Text style={styles.maintext}>Click here!</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.textcontainer}>
          <Text>Don't have an account?</Text>
          <TouchableOpacity
            onPress={() => {
              navigateReplace('SignUp');
            }}
          >
            <Text style={styles.subtext}>Sign up here!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 34,
    paddingBottom: 40,
    backgroundColor: '#9bebff',
  },
  imagestyle: {
    alignSelf: 'center',
    marginBottom: 30,
  },
  blockcontainer: {
    backgroundColor: '#cef5ff',
    borderRadius: 16,
    marginHorizontal: 20,
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  maintitle: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  subtitle: {
    color: '#0090fe',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
  },
  textinfo: {
    color: '#0090fe',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
    marginBottom: 4,
  },
  inputstyle: {
    backgroundColor: '#fff',
    color: '#0090fe',
    borderRadius: 16,
    paddingHorizontal: 20,
    paddingVertical: 12,
    fontSize: 16,
    marginBottom: 10,
    shadowColor: '#000',
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 2,
  },
  buttonstyle: {
    backgroundColor: '#49cbec',
    borderRadius: 16,
    marginBottom: 10,
    marginTop: 6,
  },
  buttontext: {
    color: '#fff',
    textAlign: 'center',
    paddingVertical: 8,
    fontSize: 26,
    fontWeight: 'bold',
  },
  subtext: {
    color: '#0090fe',
    textAlign: 'center',
    marginLeft: 5,
  },
  maintext: {
    color: '#ff6d6d',
    textAlign: 'center',
    marginLeft: 5,
  },
  textcontainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 2,
  },
});

export default LoginScreen;
