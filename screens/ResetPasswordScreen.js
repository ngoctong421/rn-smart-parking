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

import passwordlogo from '../assets/resetpasslogo.png';
import { useEffect } from 'react/cjs/react.development';

const ResetPasswordScreen = (props) => {
  const { email } = props.route.params;

  const [inputData, setInputData] = useState({
    newpass: '',
    confirm: '',
    verify: '',
  });

  const { newpass, confirm, verify } = inputData;

  const handleOnChange = (key) => (text) => {
    setInputData({ ...inputData, [key]: text });
  };

  const {
    resetPassword,
    clearError,
    setLoading,
    isSignIn,
    token,
    authError,
    loading,
  } = useContext(AuthContext);

  const handleOnSubmit = () => {
    const cleanData = trimData(inputData);
    setInputData(cleanData);
    clearError();
    setLoading();
    resetPassword({ email, newpass, confirm, verify });
  };

  if (authError !== '' && authError) {
    ToastAndroid.show(authError, ToastAndroid.SHORT, ToastAndroid.BOTTOM);
    clearError();
  }

  return (
    <View style={styles.container}>
      <Image source={passwordlogo} style={styles.imagestyle} />

      <Text style={styles.titlestyle}>Reset Password</Text>

      <Text style={styles.textinfo}>New Password</Text>
      <TextInput
        style={styles.inputstyle}
        value={newpass}
        autoCapitalize="none"
        secureTextEntry={true}
        autoCorrect={false}
        onChangeText={handleOnChange('newpass')}
      />

      <Text style={styles.textinfo}>Re-enter New Password</Text>
      <TextInput
        style={styles.inputstyle}
        value={confirm}
        autoCapitalize="none"
        secureTextEntry={true}
        autoCorrect={false}
        onChangeText={handleOnChange('confirm')}
      />

      <Text style={styles.textinfo}>Verification Code</Text>
      <TextInput
        style={styles.inputstyle}
        value={verify}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={handleOnChange('verify')}
      />

      <TouchableOpacity style={styles.buttonstyle} onPress={handleOnSubmit}>
        <Text style={styles.buttontext}>CONFIRM</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#a2ecff',
  },
  imagestyle: {
    alignSelf: 'center',
    marginBottom: 16,
  },
  titlestyle: {
    color: '#6b6b6b',
    textAlign: 'center',
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  textinfo: {
    color: '#6b6b6b',
    fontSize: 16,
    marginLeft: 50,
    marginBottom: 4,
  },
  inputstyle: {
    backgroundColor: '#fff',
    borderRadius: 16,
    marginHorizontal: 36,
    paddingVertical: 12,
    paddingHorizontal: 20,
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
    backgroundColor: '#ffe888',
    marginHorizontal: 36,
    borderRadius: 16,
    marginTop: 16,
  },
  buttontext: {
    color: '#ffb31d',
    paddingVertical: 12,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ResetPasswordScreen;
