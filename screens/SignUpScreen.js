import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  Picker,
  Keyboard,
} from 'react-native';

import { Context as AuthContext } from '../context/authContext';

import trimData from '../utils/trimData';
import { navigate, navigateReplace } from '../utils/navigationRef';

import avatar from '../assets/profileavatar.png';

const SignUpScreen = () => {
  const [inputData, setInputData] = useState({
    username: '',
    password: '',
    ID: '',
    email: '',
  });

  const { username, password, ID, email } = inputData;

  const handleOnChange = (key) => (text) => {
    setInputData({ ...inputData, [key]: text });
  };

  const [position, setPosition] = useState('');

  const { signUp } = useContext(AuthContext);

  const handleOnSubmit = () => {
    const cleanData = trimData(inputData);
    setInputData(cleanData);
    Keyboard.dismiss();
    signUp({ username, password, position, ID, email });
  };

  return (
    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.titlestyle}>LET'S GET STARTED!</Text>

        <Image source={avatar} style={styles.imagestyle} />

        <View style={styles.blockcontainer}>
          <Text style={styles.textinfo}>Username :</Text>
          <TextInput
            style={styles.inputstyle}
            value={username}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={handleOnChange('username')}
          />

          <Text style={styles.textinfo}>Password :</Text>
          <TextInput
            style={styles.inputstyle}
            value={password}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
            onChangeText={handleOnChange('password')}
          />

          <Text style={styles.textinfo}>You are a :</Text>
          <View style={styles.pickerstyle}>
            <Picker
              mode="dialog"
              selectedValue={position}
              onValueChange={(itemValue) => setPosition(itemValue)}
            >
              <Picker.Item label="Teacher" value="teacher" color="#0090fe" />
              <Picker.Item label="Student" value="student" color="#0090fe" />
            </Picker>
          </View>

          <Text style={styles.textinfo}>Your ID number :</Text>
          <TextInput
            style={styles.inputstyle}
            value={ID}
            keyboardType={'number-pad'}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={handleOnChange('ID')}
          />

          <Text style={styles.textinfo}>Email :</Text>
          <TextInput
            style={styles.inputstyle}
            value={email}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={handleOnChange('email')}
          />
        </View>

        <TouchableOpacity style={styles.buttonstyle} onPress={handleOnSubmit}>
          <Text style={styles.buttontext}>SIGN ME UP!</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
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
  titlestyle: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  imagestyle: {
    alignSelf: 'center',
    marginBottom: 8,
  },
  blockcontainer: {
    backgroundColor: '#cef5ff',
    marginHorizontal: 20,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 20,
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
    marginBottom: 8,
    shadowColor: '#000',
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 2,
  },
  pickerstyle: {
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingLeft: 10,
    shadowColor: '#000',
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 2,
    marginBottom: 8,
  },
  buttonstyle: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    borderRadius: 24,
  },
  buttontext: {
    color: '#72abff',
    textAlign: 'center',
    paddingVertical: 8,
    fontSize: 26,
    fontWeight: 'bold',
  },
});

export default SignUpScreen;
