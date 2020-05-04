import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import { navigate, navigateReplace } from '../utils/navigationRef';

import mainlogo from '../assets/mainlogo.png';

const button_width = (Dimensions.get('window').width / 3) * 2;

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={mainlogo} style={styles.iconstyle} />

      <Text style={styles.subtext}>WANNA PARK YOUR BIKE THE SMART WAY?</Text>

      <Text style={styles.maintext}>JUST JOIN US!</Text>

      <TouchableOpacity
        style={styles.buttonstyle}
        onPress={() => {
          navigate('SignUp');
        }}
      >
        <Text style={styles.buttontext}>REGISTER</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonstyle}
        onPress={() => {
          navigate('Login');
        }}
      >
        <Text style={styles.buttontext}>SIGN IN</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9bebff',
  },
  iconstyle: {},
  subtext: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  maintext: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 26,
  },
  buttonstyle: {
    backgroundColor: '#fff',
    width: button_width,
    borderRadius: 24,
    marginVertical: 4,
  },
  buttontext: {
    color: '#9bc3ff',
    fontWeight: 'bold',
    fontSize: 26,
    textAlign: 'center',
    paddingVertical: 8,
  },
});

export default WelcomeScreen;
