import React, { useState, useContext, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { Context as AuthContext } from '../context/authContext';
import { Context as UserContext } from '../context/userContext';

import LoadingComponent from '../components/LoadingComponent';
import trimData from '../utils/trimData';
import { navigate, navigateReplace } from '../utils/navigationRef';

import passwordlogo from '../assets/resetpasslogo.png';

const ChangePasswordScreen = (props) => {
  const { userId } = props.route.params;

  const {
    updatePassword,
    clearError,
    setLoading,
    isSignIn,
    token,
    authError,
    loading,
  } = useContext(AuthContext);

  const { getMe, setAppLoading, clearUser, user, appLoading } = useContext(
    UserContext
  );

  const [inputData, setInputData] = useState({
    oldpass: '',
    newpass: '',
    reenterpass: '',
  });

  const { oldpass, newpass, reenterpass } = inputData;

  const handleOnChange = (key) => (text) => {
    setInputData({ ...inputData, [key]: text });
  };

  const handleOnSubmit = () => {
    const cleanData = trimData(inputData);
    setInputData(cleanData);
    clearError();
    setLoading();
    updatePassword({ userId, oldpass, newpass, reenterpass });
  };

  if (authError !== '' && authError) {
    ToastAndroid.show(authError, ToastAndroid.SHORT, ToastAndroid.BOTTOM);
    clearError();
  }

  return (
    <LinearGradient style={{ flex: 1 }} colors={['#a2ecff', '#ffffff']}>
      <View style={{ flex: 1 }}>
        {loading && <LoadingComponent />}

        <View style={styles.container}>
          <Image source={passwordlogo} style={styles.imagestyle} />

          <Text style={styles.titlestyle}>Change Password</Text>

          <Text style={styles.titleinfotext}>Current Password</Text>
          <TextInput
            style={styles.inputstyle}
            value={oldpass}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
            onChangeText={handleOnChange('oldpass')}
          />

          <Text style={styles.titleinfotext}>New Password</Text>
          <TextInput
            style={styles.inputstyle}
            value={newpass}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
            onChangeText={handleOnChange('newpass')}
          />

          <Text style={styles.titleinfotext}>Re-enter New Password</Text>
          <TextInput
            style={styles.inputstyle}
            value={reenterpass}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
            onChangeText={handleOnChange('reenterpass')}
          />

          <TouchableOpacity style={styles.buttonstyle} onPress={handleOnSubmit}>
            <Text style={styles.buttontextstyle}>CHANGE</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 60,
    paddingBottom: 40,
  },
  imagestyle: {
    //width: 120,
    //height: 120,
    alignSelf: 'center',
    //borderRadius: 100,
    marginTop: 40,
    marginBottom: 20,
  },
  titlestyle: {
    textAlign: 'center',
    fontSize: 26,
    color: '#b53333',
    marginBottom: 14,
  },
  titleinfotext: {
    fontSize: 16,
    color: '#b53333',
    marginLeft: 50,
    marginBottom: 6,
  },
  inputstyle: {
    shadowColor: '#000',
    shadowRadius: 4,
    paddingHorizontal: 20,
    marginHorizontal: 40,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 2,
    borderRadius: 20,
    paddingVertical: 10,
    marginBottom: 12,
    color: '#6b6b6b',
    backgroundColor: '#ffffff',
    fontSize: 20,
  },
  buttonstyle: {
    marginRight: 40,
    backgroundColor: '#ffe888',
    alignSelf: 'flex-end',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 20,
    marginTop: 6,
  },
  buttontextstyle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#ffb31d',
  },
});

export default ChangePasswordScreen;
