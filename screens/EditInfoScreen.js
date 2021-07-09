import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Picker,
  ToastAndroid,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { Context as UserContext } from '../context/userContext';

import LoadingComponent from '../components/LoadingComponent';
import trimData from '../utils/trimData';
import { useEffect } from 'react/cjs/react.development';

const EditInfoScreen = (props) => {
  const { userId } = props.route.params;

  const {
    updateMe,
    setAppLoading,
    user,
    error,
    clearError,
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
    updateMe({ userId, ...cleanData, position });
  };

  useEffect(() => {
    if (error !== '' && error) {
      ToastAndroid.show(error, ToastAndroid.SHORT, ToastAndroid.BOTTOM);
      clearError();
    }
  }, [error])

  return (
    <LinearGradient style={{ flex: 1 }} colors={['#a2ecff', '#ffffff']}>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          {appLoading && <LoadingComponent />}

          <Text style={styles.titlestyle}>EDIT PROFILE</Text>

          <Text style={styles.titleinfotext}>USERNAME</Text>
          <TextInput
            style={styles.inputstyle}
            value={username}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={handleOnChange('username')}
          />

          <Text style={styles.titleinfotext}>POSITION</Text>
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

          <Text style={styles.titleinfotext}>ID NUMBER</Text>
          <TextInput
            style={styles.inputstyle}
            value={ID}
            keyboardType={'number-pad'}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={handleOnChange('ID')}
          />

          <Text style={styles.titleinfotext}>EMAIL</Text>
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
    paddingTop: '40%',
    paddingBottom: 40,
  },
  titlestyle: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 16,
  },
  imagestyle: {
    alignSelf: 'center'
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
    fontSize: 16,
    color: '#ffb31d',
  },
});

export default EditInfoScreen;
