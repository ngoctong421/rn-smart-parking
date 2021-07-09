import React, { useState, useContext, useEffect } from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
  ToastAndroid
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import LoadingComponent from '../components/LoadingComponent';

import { Context as UserContext } from '../context/userContext';

import bikes from '../assets/bikes.png';
import trimData from '../utils/trimData';

const AddVehicleScreen = (props) => {
  const { userId } = props.route.params

  const {
    setAppLoading,
    user,
    error,
    clearError,
    appLoading,
    changePlate
  } = useContext(UserContext);

  const [inputData, setInputData] = useState({
    plateNumber: user.plate,
  });

  const { plateNumber } = inputData;

  const handleOnChange = (key) => (text) => {
    setInputData({ ...inputData, [key]: text });
  };

  const handleOnSubmit = () => {
    const cleanData = trimData(inputData)
    setInputData(cleanData)
    clearError()
    setAppLoading()
    changePlate({ userId, plate: plateNumber });
  }

  useEffect(() => {
    if (error !== '' && error) {
      ToastAndroid.show(error, ToastAndroid.SHORT, ToastAndroid.BOTTOM);
      clearError();
    }
  }, [error])

  return (
    <LinearGradient style={{ flex: 1 }} colors={['#a2ecff', '#ffffff']}>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        {appLoading && <LoadingComponent />}
        
        <View style={styles.container}>
          <Text style={styles.titlestyle}>ADD VEHICLE</Text>
          <Text style={styles.subtext}>
            HELP US MANAGE YOUR VEHICLES BETTER!
          </Text>
          <View style={styles.blockcontainer}>
            <Image source={bikes} />
          </View>
          <Text style={styles.normaltextStyle}>
            VEHICLE REGISTRATION NUMBER
          </Text>
          <TextInput
            style={styles.inputstyle}
            value={plateNumber}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={handleOnChange('plateNumber')}
          />

          <TouchableOpacity style={styles.buttonstyle} onPress={handleOnSubmit}>
            <Text style={styles.buttontext}>CHANGE</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 40,
  },
  titlestyle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtext: {
    color: '#0090FE',
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 15,
  },
  blockcontainer: {
    alignSelf: 'stretch',
    borderRadius: 16,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    marginHorizontal: 30,
    paddingVertical: 20,
    marginBottom: 10,
    shadowColor: '#000000',
    shadowRadius: 5,
    shadowOpacity: 0.3,
  },
  normaltextStyle: {
    color: '#0090FE',
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: 10,
  },
  inputstyle: {
    alignSelf: 'stretch',
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
    backgroundColor: '#ffe888',
    borderRadius: 16,
    alignSelf: 'stretch',
    marginHorizontal: 30,
    shadowColor: '#000000',
    shadowRadius: 5,
    shadowOpacity: 0.3,
  },
  buttontext: {
    color: '#ffb31d',
    paddingVertical: 12,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 20,
  },
});

export default AddVehicleScreen;
