import React, { useState, useContext } from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
  TextInput,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { Context as AuthContext } from '../context/authContext';
import { Context as UserContext } from '../context/userContext';

import LoadingComponent from '../components/LoadingComponent';
import { navigate, navigateReplace } from '../utils/navigationRef';

import MoneySourceComponent from '../components/MoneySourceComponentWD';
import BankItem from '../components/BankItemWD';

const ChooseWithDraw = (props) => {
  const [inputData, setInputData] = useState({
    amount: '',
  });

  const { amount } = inputData;

  const handleOnChange = (key) => (text) => {
    setInputData({ ...inputData, [key]: text });
  };

  const {
    getMe,
    getMoneySource,
    setAppLoading,
    clearUser,
    user,
    moneysource,
    appLoading,
  } = useContext(UserContext);

  const dataTemp = [
    {
      id: 1,
      cardnumber: '010101010311',
    },
    {
      id: 2,
      cardnumber: '291291313131',
    },
  ];

  return (
    <LinearGradient style={{ flex: 1 }} colors={['#a2ecff', '#ffffff']}>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Text style={styles.titlestyle}>WITHDRAW</Text>

          <LinearGradient
            style={styles.paymentboxstyle}
            colors={['#FFED78', '#ffffff']}
            start={{ x: 0, y: 0.75 }}
            end={{ x: 1, y: 0.25 }}
          >
            <View>
              <Text style={styles.subtext}>YOUR BALANCE:</Text>
              <Text style={styles.balance}>{user.balance} VNĐ</Text>
            </View>
          </LinearGradient>

          <Text style={styles.recentext}>Choose your money source:</Text>
          <MoneySourceComponent />
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
    paddingTop: 10,
  },
  subtext: {
    marginLeft: 20,
    color: '#DFA33A',
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 5,
  },
  paymentboxstyle: {
    alignSelf: 'stretch',
    marginHorizontal: 30,
    borderRadius: 20,
    paddingVertical: 15,
    shadowRadius: 3,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.2,
    shadowColor: '#000',
    elevation: 2,
    marginBottom: 10,
  },
  balance: {
    fontSize: 25,
    color: '#FE5D00',
    fontWeight: 'bold',
    alignSelf: 'center',
    paddingBottom: 5,
  },
  buttonstyle: {
    backgroundColor: '#6ADFFF',
    borderRadius: 16,
    alignSelf: 'stretch',
    marginHorizontal: 45,
    shadowColor: '#000000',
    shadowRadius: 5,
    shadowOpacity: 0.3,
    marginTop: 5,
  },
  buttontext: {
    color: '#ffffff',
    paddingVertical: 12,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 20,
  },
  recentext: {
    alignSelf: 'flex-start',
    fontWeight: 'bold',
    marginHorizontal: 50,
    color: '#6B6B6B',
    fontSize: 18,
    paddingBottom: 5,
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
  flatstyle: {
    alignSelf: 'stretch',
    marginHorizontal: 45,
    borderRadius: 10,
  },
});

export default ChooseWithDraw;
