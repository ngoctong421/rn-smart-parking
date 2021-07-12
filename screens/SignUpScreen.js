import React, { useState, useContext, useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Picker,
  ToastAndroid,
} from 'react-native';

import Tooltip from 'rn-tooltip'

import { Context as AuthContext } from '../context/authContext';

import LoadingComponent from '../components/LoadingComponent';
import trimData from '../utils/trimData';
import { navigateReplace } from '../utils/navigationRef';

const SignUpScreen = () => {
  const tooltipRef = useRef(null);

  const [inputData, setInputData] = useState({
    username: '',
    password: '',
    ID: '',
    email: '',
    plate: ''
  });

  const { username, password, ID, email, plate } = inputData;

  const handleOnChange = (key) => (text) => {
    setInputData({ ...inputData, [key]: text });
  };

  const [position, setPosition] = useState('student');

  const {
    signUp,
    clearError,
    setLoading,
    authError,
    loading,
  } = useContext(AuthContext);

  const handleOnSubmit = () => {
    const cleanData = trimData(inputData);
    setInputData(cleanData);
    clearError();
    setLoading();
    signUp({ ...cleanData, position });
  };

  useEffect(() => {
    if (authError !== '' && authError) {
      ToastAndroid.show(authError, ToastAndroid.SHORT, ToastAndroid.BOTTOM);
      clearError();
    }
  }, [authError])

  return (
    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        {loading && <LoadingComponent />}

        <Text style={styles.titlestyle}>LET'S GET STARTED!</Text>

        <View style={styles.blockcontainer}>
          <Text style={styles.textinfo}>Username</Text>
          <TextInput
            style={styles.inputstyle}
            value={username}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={handleOnChange('username')}
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

          <Text style={styles.textinfo}>You are a</Text>
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

          <Text style={styles.textinfo}>Your ID number</Text>
          <TextInput
            style={styles.inputstyle}
            value={ID}
            keyboardType={'number-pad'}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={handleOnChange('ID')}
          />

          <Text style={styles.textinfo}>Email</Text>
          <TextInput
            style={styles.inputstyle}
            value={email}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={handleOnChange('email')}
          />

          <Text style={styles.textinfo}>Plate</Text>
          <Tooltip ref={tooltipRef} width={200} height={50} popover={<Text>Please enter your license number with following format: 63B4 12345</Text>}>
            <TextInput
              style={styles.inputstyle}
              value={plate}
              autoCapitalize="none"
              autoCorrect={false}
              onFocus={() => tooltipRef.current.toggleTooltip()}
              onChangeText={handleOnChange('plate')}
            />
          </Tooltip>
        </View>

        <TouchableOpacity style={styles.buttonstyle} onPress={handleOnSubmit}>
          <Text style={styles.buttontext}>SIGN ME UP!</Text>
        </TouchableOpacity>

        <View style={styles.logincontainer}>
          <Text>Already have an account?</Text>
          <TouchableOpacity
            onPress={() => {
              navigateReplace('Login');
            }}
          >
            <Text style={styles.loginbutton}>Login here!</Text>
          </TouchableOpacity>
        </View>
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
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
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
  logincontainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  loginbutton: {
    color: '#0090fe',
    marginLeft: 5,
  },
});

export default SignUpScreen;
