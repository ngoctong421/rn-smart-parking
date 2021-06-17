import React, { useContext, useEffect, useState } from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { Context as AuthContext } from '../context/authContext';
import { Context as UserContext } from '../context/userContext';

import LoadingComponent from '../components/LoadingComponent';
import apiHelper from '../utils/apiHelper';
import { navigate, navigateReplace } from '../utils/navigationRef';

import RecentActItem from '../components/RecentActItem';

import topup from '../assets/topup.png';
import withdraw from '../assets/wd.png';

const screenwidth = Dimensions.get('window').width;

const ActivedPaymentScreen = (props) => {
  const dataTemp = [
    {
      id: 1,
      date: 'Mar 29, 2020',
      amount: '+50.000 ',
    },
    {
      id: 2,
      date: 'Mar 5, 2020',
      amount: '-50.000 ',
    },
  ];

  const {
    getMe,
    getMoneySource,
    getHistory,
    setAppLoading,
    clearUser,
    user,
    history,
    appLoading,
  } = useContext(UserContext);

  const userId = user._id;

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const { data } = await apiHelper.get(`/users/history/${userId}`);
    setItems(data.transaction);
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    fetchData();
  }, []);

  return (
    <LinearGradient style={{ flex: 1 }} colors={['#a2ecff', '#ffffff']}>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Text style={styles.titlestyle}>PAYMENT</Text>
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

          <LinearGradient
            style={styles.paymentboxstyle}
            colors={['#FFED78', '#ffffff']}
            start={{ x: 0, y: 0.75 }}
            end={{ x: 1, y: 0.25 }}
          >
            <View>
              <Text style={styles.subtext}>YOUR BILL:</Text>
              <Text style={styles.balance}>3000 VNĐ</Text>
            </View>
          </LinearGradient>

          <TouchableOpacity
            style={styles.buttonstyle}
            onPress={() => {
              navigate('AddMoney');
            }}
          >
            <Text style={styles.buttontext}>ADD MONEY SOURCE</Text>
          </TouchableOpacity>

          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
              style={styles.blockcontainer}
              onPress={() => {
                navigate('ChooseTopUp');
              }}
            >
              <Text style={styles.actiontext}>TOP UP</Text>
              <Image source={topup} />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.blockcontainer}
              onPress={() => {
                navigate('ChooseWithDraw');
              }}
            >
              <Text style={styles.actiontext}>WITHDRAW</Text>
              <Image source={withdraw} />
            </TouchableOpacity>
          </View>

          <Text style={styles.recentext}>Recent activities</Text>

          {/* <FlatList
            style={styles.flatstyle}
            data={items}
            keyExtractor={(item) => item._id}
            initialNumToRender={3}
            showsHorizontalScrollIndicator={false}
            horizontal={false}
            scrollEnabled={false}
            nestedScrollEnabled={false}
            renderItem={({ item }) => {
              return <RecentActItem item={item} isLoading={isLoading} />;
            }}
          /> */}
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
  blockcontainer: {
    width: screenwidth / 2 - 50,
    borderRadius: 16,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    paddingVertical: 20,
    marginVertical: 10,
    marginHorizontal: 10,
    shadowColor: '#000000',
    shadowRadius: 5,
    shadowOpacity: 0.3,
  },
  normaltextStyle: {
    color: '#0090FE',
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: 10,
    marginLeft: 50,
    alignSelf: 'flex-start',
  },
  buttonstyle: {
    backgroundColor: '#6ADFFF',
    borderRadius: 16,
    alignSelf: 'stretch',
    marginHorizontal: 35,
    shadowColor: '#000000',
    shadowRadius: 5,
    shadowOpacity: 0.3,
  },
  buttontext: {
    color: '#ffffff',
    paddingVertical: 12,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 20,
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
  actiontext: {
    color: '#FF4B4B',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  flatstyle: {
    alignSelf: 'stretch',
    marginHorizontal: 45,
  },
  recentext: {
    alignSelf: 'flex-start',
    fontWeight: 'bold',
    marginHorizontal: 50,
    color: '#6B6B6B',
    fontSize: 18,
    paddingBottom: 5,
  },
});

export default ActivedPaymentScreen;
