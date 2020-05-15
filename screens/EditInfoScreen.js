import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Picker,
  ToastAndroid,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { Context as AuthContext } from '../context/authContext';
import { Context as UserContext } from '../context/userContext';

import LoadingComponent from '../components/LoadingComponent';
import trimData from '../utils/trimData';
import { navigate, navigateReplace } from '../utils/navigationRef';

import avatar from '../assets/profileavatar.png';

const EditInfoScreen = (props) => {
  const { userId } = props.route.params;

  const {
    clearError,
    setLoading,
    isSignIn,
    token,
    error,
    loading,
  } = useContext(AuthContext);

  const {
    getMe,
    updateMe,
    setAppLoading,
    clearUser,
    user,
    appLoading,
  } = useContext(UserContext);

  const [position, setPosition] = useState(user.position);

  const [inputData, setInputData] = useState({
    username: user.username,
    ID: user.ID,
    email: user.email,
  });

  const { username, ID, email } = inputData;

  const handleOnChange = (key) => (text) => {
    setInputData({ ...inputData, [key]: text });
  };

  const handleOnSubmit = () => {
    const cleanData = trimData(inputData);
    setInputData(cleanData);
    clearError();
    setAppLoading();
    updateMe({ userId, username, position, ID, email });
  };

  if (error !== '' && error) {
    ToastAndroid.show(error, ToastAndroid.SHORT, ToastAndroid.BOTTOM);
    clearError();
  }

  return (
    <LinearGradient style={{ flex: 1 }} colors={['#a2ecff', '#ffffff']}>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          {appLoading && <LoadingComponent />}

          <Text style={styles.titlestyle}>EDIT PROFILE</Text>

          <Image source={avatar} style={styles.imagestyle} />

          <Text style={styles.titleinfotext}>USERNAME :</Text>
          <TextInput
            style={styles.inputstyle}
            value={username}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={handleOnChange('username')}
          />

          <Text style={styles.titleinfotext}>POSITION :</Text>
          <View style={styles.pickerstyle}>
            <Picker
              mode="dialog"
              selectedValue={position}
              onValueChange={(itemValue) => setPosition(itemValue)}
            >
              <Picker.Item label="Teacher" value="teacher" color="#6b6b6b" />
              <Picker.Item label="Student" value="student" color="#6b6b6b" />
            </Picker>
          </View>

          <Text style={styles.titleinfotext}>ID NUMBER :</Text>
          <TextInput
            style={styles.inputstyle}
            value={ID}
            keyboardType={'number-pad'}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={handleOnChange('ID')}
          />

          <Text style={styles.titleinfotext}>EMAIL :</Text>
          <TextInput
            style={styles.inputstyle}
            value={email}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={handleOnChange('email')}
          />

          <TouchableOpacity style={styles.buttonstyle} onPress={handleOnSubmit}>
            <Text style={styles.buttontextstyle}>CONFIRM</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
  titlestyle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 16,
  },
  imagestyle: {
    //width: 120,
    //height: 120,
    alignSelf: 'center',
    //borderRadius: 100,
    //marginVertical: 8
  },
  titleinfotext: {
    alignSelf: 'flex-start',
    paddingLeft: 54,
    color: '#6b6b6b',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  pickerstyle: {
    shadowColor: '#000',
    shadowRadius: 4,
    paddingLeft: 10,
    paddingVertical: 2,
    marginHorizontal: 40,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 2,
    borderRadius: 16,
    marginBottom: 12,
    backgroundColor: '#ffffff',
    fontSize: 16,
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
    borderRadius: 16,
    paddingVertical: 12,
    marginBottom: 12,
    backgroundColor: '#ffffff',
    fontSize: 16,
    color: '#6b6b6b',
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
    fontSize: 18,
    color: '#ffb31d',
  },
});

export default EditInfoScreen;
