import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Keyboard,
} from 'react-native';

import { Context as AuthContext } from '../context/authContext';

import trimData from '../utils/trimData';
import { navigate, navigateReplace } from '../utils/navigationRef';

import passwordlogo from '../assets/resetpasslogo.png';

const ForgetPasswordScreen = (props) => {
  const [inputData, setInputData] = useState({
    email: '',
  });

  const { email } = inputData;

  const handleOnChange = (key) => (text) => {
    setInputData({ ...inputData, [key]: text });
  };

  const { forgotPassword } = useContext(AuthContext);

  const handleOnSubmit = () => {
    const cleanData = trimData(inputData);
    setInputData(cleanData);
    Keyboard.dismiss();
    forgotPassword({ email });
  };

  return (
    <View style={styles.container}>
      <Image source={passwordlogo} style={styles.imagestyle} />

      <Text style={styles.titlestyle}>Forget Password</Text>

      <Text style={styles.textinfo}>Email :</Text>
      <TextInput
        style={styles.inputstyle}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={handleOnChange('email')}
      />

      <TouchableOpacity style={styles.buttonstyle} onPress={handleOnSubmit}>
        <Text style={styles.buttontext}>SEND REQUEST</Text>
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
  },
  buttontext: {
    color: '#ffb31d',
    paddingVertical: 12,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ForgetPasswordScreen;
