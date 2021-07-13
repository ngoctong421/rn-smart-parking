import React, { useContext, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { Context as AuthContext } from '../context/authContext';
import { Context as UserContext } from '../context/userContext';

import LoadingComponent from '../components/LoadingComponent';
import { navigate, navigateReplace } from '../utils/navigationRef';

import bikepic from '../assets/bikeprofile.png';
import qrcodepic from '../assets/qrcode.png';
import infopic from '../assets/yourpro.png';
import logoutpic from '../assets/logout.png';
import mainlogo from '../assets/mainlogo.png';

import socket from '../socketIo'

const box_width = Dimensions.get('window').width / 3;
const box_height = (box_width * 4) / 3;

const ProfileScreen = (props) => {
  const { userId } = props.route.params;

  const {
    signOut
  } = useContext(AuthContext);

  const { getMe, getAllTickets, setUser, setTickets, clearUser, user, ticketList, setUserError } = useContext(
    UserContext
  );

  const updateApp = (user, ticketList) => {
    setUser(user)
    setTickets(ticketList)
  }

  const setPaymentError = (error) => {
    const payload = error
    setUserError(payload)
  }

  useEffect(() => {
    socket.on("updateApp", updateApp)
    socket.on("paymentError", setPaymentError)

    // return () => {
    //   socket.disconnect()
    //   socket.off()
    // }
  }, [])

  useEffect(() => {
    getMe(userId);
    getAllTickets(userId)
  }, []);

  return (
    <LinearGradient style={{ flex: 1 }} colors={['#a2ecff', '#ffffff']}>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Text style={styles.titlestyle}>MY PROFILE</Text>

          <Image source={mainlogo} style={styles.iconstyle} />
          
          <View style={styles.blockcontainer}>
            <View style={styles.horizontalstyle}>
              <TouchableOpacity
                onPress={() => {
                  navigate('MyInfo', { userId });
                }}
                style={styles.blockstyle}
              >
                <Image source={infopic} style={styles.iconstyle} />
                <Text style={styles.textstyle}>YOUR</Text>
                <Text style={styles.textstyle}>INFOMATION</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.blockstyle}
                onPress={() => {
                  navigate('Vehicle', { userId });
                }}
              >
                <Image source={bikepic} style={styles.iconstyle} />
                <Text style={styles.textstyle}>ABOUT YOUR</Text>
                <Text style={styles.textstyle}>VEHICLES</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.horizontalstyle}>
              <TouchableOpacity
                style={styles.blockstyle}
                disabled={user?.parkingStatus}
                onPress={() => {
                  navigate('QRInden', { userId });
                }}
              >
                <Image source={qrcodepic} style={styles.iconstyle} />
                <Text style={styles.textstyle}>YOUR</Text>
                <Text style={styles.textstyle}>QR CODE</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.blockstyle}
                onPress={() => {
                  signOut();
                  clearUser();
                }}
              >
                <Image source={logoutpic} style={styles.iconstyle} />
                <Text style={styles.textstyle}>LOG OUT</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '20%',
    paddingBottom: 40
  },
  titlestyle: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 16,
  },
  imagestyle: {
    alignSelf: 'center',
  },
  blockcontainer: {
    flex: 1,
    borderRadius: 30,
    backgroundColor: '#fff',
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.4,
    shadowColor: '#000',
    elevation: 1,
    marginHorizontal: 24,
    paddingVertical: 10,
  },
  horizontalstyle: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 8,
  },
  blockstyle: {
    alignItems: 'center',
    height: box_height,
    width: box_width,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 20,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowColor: '#000',
    justifyContent: 'center',
    elevation: 1,
  },
  iconstyle: {
    marginBottom: 6
  },
  textstyle: {
    fontSize: 13,
    color: '#0090fe',
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
