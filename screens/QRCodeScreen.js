import React, { useContext, useEffect, useState, useRef } from 'react';
import {
  Text,
  Image,
  View,
  StyleSheet,
  ScrollView,
  Dimensions
} from 'react-native';

import Constants from 'expo-constants'
import{ LinearGradient } from 'expo-linear-gradient';
import * as Notifications from 'expo-notifications'

import QRCode from 'react-native-qrcode-svg';

import socket from '../socketIo'

import { Context as UserContext } from '../context/userContext';

import { convertToDate, convertToTime } from '../utils/formatDateTime'

import qrcodebar from '../assets/qrcodebar.png';
import hereqr from '../assets/hereqr.png';

const box_width = Dimensions.get('window').width / 2;

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

const QRCodeScreen = () => {

  const {
    user, ticketList, setUser, setTickets
  } = useContext(UserContext);
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    socket.on("updateApp", updateApp)

    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  const handleNotifications = async () => {
    await schedulePushNotification();
  }

  const updateApp = (user, ticketList) => {
    setUser(user)
    setTickets(ticketList)

    if (user.parkingStatus) {
      handleNotifications().then((response) =>{
        console.log(response)
      }).catch((error) => {
        console.log(error)
      })
    }
  }

  useEffect(() => {
    if (!user) {
      getMe(userId);
    }

    if (ticketList.length == 0) {
      getAllTickets(userId)
    }
  }, [user, ticketList]);

  // useEffect(() => {
  //   console.log('Status: ', user.parkingStatus)

  //   if (user.parkingStatus) {
  //     handleNotifications()
  //   }
  // }, [user.parkingStatus])

  async function schedulePushNotification() {
    const date = convertToDate(ticketList[0].createdAt)
    const time = convertToTime(ticketList[0].createdAt)
  
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Check-in notification 📬",
        body: `It's seem that you have entered on ${date} at ${time}`,
        data: { data: 'goes here' },
      },
      trigger: { seconds: 2 },
    });
  }

  async function registerForPushNotificationsAsync() {
    let token;
    if (Constants.isDevice) {
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!');
        return;
      }
      token = (await Notifications.getExpoPushTokenAsync()).data;
      console.log(token);
    } else {
      alert('Must use physical device for Push Notifications');
    }
  
    if (Platform.OS === 'android') {
      Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      });
    }
  
    return token;
  }
  
  return (
    <LinearGradient style={{ flex: 1 }} colors={['#FFEEA4', '#ffffff']}>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <Image style={{ alignSelf: 'flex-end' }} source={qrcodebar} />

        <View style={styles.container}>
          <Text style={styles.titlestyle}>QR CODE</Text>
          <Text style={styles.subtext}>YOUR OWN OR CODE!HOW COOL IS THIS!</Text>

          <View style={styles.qrbackground}>
            <QRCode
              value={`${user.plate}-${user.ID}`}
              size={(Dimensions.get('window').width / 5) * 3}
            />
          </View>

          <Text style={styles.note}>
            Scan this on the device before you enter the parking lot.
          </Text>

          <Image source={hereqr} />
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
    paddingBottom: 40,
  },
  titlestyle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FF8F8F',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtext: {
    color: '#FF8F8F',
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 10,
  },
  qrbackground: {
    backgroundColor: '#fff',
    padding: 30,
    marginBottom: 10,
  },
  note: {
    fontSize: 14,
    width: box_width,
    textAlign: 'center',
    paddingBottom: 10,
  },
});

export default QRCodeScreen;
