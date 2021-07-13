import React, { useContext, useEffect, useState, useRef } from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
  SafeAreaView,
  Animated
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import NumberFormat from 'react-number-format';

import { Context as UserContext } from '../context/userContext';

import apiHelper from '../utils/apiHelper';
import { navigate } from '../utils/navigationRef';

import RecentActItem from '../components/RecentActItem';

import topup from '../assets/topup.png';
import withdraw from '../assets/wd.png';
import LoadingComponent from '../components/LoadingComponent';

const screenwidth = Dimensions.get('window').width;

const ActivedPaymentScreen = () => {
  const {
    user,
    getMoneySource,
    moneySource
  } = useContext(UserContext);

  const userId = user?._id;

  const anim = useRef(new Animated.Value(0)).current;
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    console.log('GET TRANSACTION')
    const { data } = await apiHelper.get(`/users/history/${userId}`);
    setItems(data.transaction);
    setIsLoading(false);
  };

  const getPadding = () => {
    return <Text>{''}</Text>;
  };

  useEffect(() => {
    setIsLoading(true);
    fetchData();
    getMoneySource(user?._id)
  }, []);

  return (
    <LinearGradient style={{ flex: 1 }} colors={['#a2ecff', '#ffffff']}>
        <View style={styles.container}>
          <Text style={styles.titlestyle}>PAYMENT</Text>
          <LinearGradient
            style={styles.paymentboxstyle}
            colors={['#FFED78', '#ffffff']}
            start={{ x: 0, y: 0.75 }}
            end={{ x: 1, y: 0.25 }}
          >
            {
              moneySource.length === 0 ? (
                <View>
                  <Text style={styles.subtext}>YOU HAVE NO MONEY SOURCE</Text>
                </View>
              ) : (
                <View>
                  <Text style={styles.subtext}>YOUR BALANCE</Text>
                  <NumberFormat value={user?.balance} displayType={'text'} thousandSeparator={true} prefix={''} renderText={(value, props) => <Text style={styles.balance}>{value} VND</Text>} />
                </View>
              )
            }
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
              disabled={moneySource.length === 0}
              style={styles.blockcontainer}
              onPress={() => {
                navigate('ChooseTopUp');
              }}
            >
              <Text style={styles.actiontext}>TOP UP</Text>
              <Image source={topup} />
            </TouchableOpacity>

            <TouchableOpacity
              disabled={moneySource.length === 0}
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
          <SafeAreaView style={{flex: 1}}>
            {
              isLoading ? <LoadingComponent /> : (
                <FlatList
                  style={styles.flatstyle}
                  data={items}
                  keyExtractor={(item) => item._id}
                  initialNumToRender={3}
                  showsHorizontalScrollIndicator={false}
                  scrollEnabled={true}
                  renderItem={({ item }) => {
                    return <RecentActItem item={item}/>;
                  }}
                  ListHeaderComponent={getPadding}
                  ListFooterComponent={getPadding}
                />
              )
            }
          </SafeAreaView>
        </View>
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
    fontSize: 23,
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
    fontSize: 17,
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
    elevation: 1,
    marginBottom: 10,
  },
  balance: {
    fontSize: 22,
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
