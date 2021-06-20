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

import avatar from '../assets/profileavatar.png';
import bikepic from '../assets/bikeprofile.png';
import qrcodepic from '../assets/qrcode.png';
import infopic from '../assets/yourpro.png';
import logoutpic from '../assets/logout.png';

const box_width = Dimensions.get('window').width / 3;
const box_height = (box_width * 4) / 3;

const ProfileScreen = (props) => {
  const { userId } = props.route.params;

  const {
    signOut,
    clearError,
    setLoading,
    isSignIn,
    token,
    error,
    loading,
  } = useContext(AuthContext);

  const { getMe, getAllTickets, setAppLoading, clearUser, user, ticketList, appLoading } = useContext(
    UserContext
  );

  useEffect(() => {
    if (!user) {
      getMe(userId);
    }

    if (ticketList.length == 0) {
      getAllTickets(userId)
    }
  }, [user, ticketList]);

  return (
    <LinearGradient style={{ flex: 1 }} colors={['#a2ecff', '#ffffff']}>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Text style={styles.titlestyle}>MY PROFILE</Text>

          <Image source={avatar} style={styles.imagestyle} />

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
  blockcontainer: {
    flex: 1,
    borderRadius: 20,
    backgroundColor: '#fff',
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.4,
    shadowColor: '#000',
    elevation: 8,
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
    shadowRadius: 4,
    borderRadius: 20,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowColor: '#000',
    justifyContent: 'center',
    elevation: 2,
  },
  iconstyle: {
    marginBottom: 6,
  },
  textstyle: {
    fontSize: 16,
    color: '#0090fe',
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
