import React, { useState, useContext, useEffect, useRef } from 'react';
import {
  Text,
  Image,
  StyleSheet,
  ScrollView,
  View,
  Dimensions
} from 'react-native';

import Constants from 'expo-constants'
import{ LinearGradient } from 'expo-linear-gradient'
import * as Notifications from 'expo-notifications'

import Dialog from "react-native-dialog";

import { Context as UserContext } from '../context/userContext'

import socket from '../socketIo'

import apiHelper from '../utils/apiHelper';

import { convertToDate, convertToTime } from '../utils/formatDateTime'

import ticket from '../assets/packin.png';
import heretk from '../assets/here.png';
import QRCode from 'react-native-qrcode-svg';

const box_width = Dimensions.get('window').width / 2;

const QRTicketScreen = () => {
  const { user, error, clearError, ticketList, setUser, setTickets } = useContext(UserContext)
  const [dialog, setDialog] = useState(false)
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  const openDialog = () => {
    setDialog(true)
  }

  const closeDialog = () => {
    setDialog(false)
    clearError()
  }

  const updateApp = (user, ticketList) => {
    setUser(user)
    setTickets(ticketList)

    // if (user.parkingStatus) {
    //   handleNotifications().then((response) =>{
    //     console.log(response)
    //   }).catch((error) => {
    //     console.log(error)
    //   })
    // }
  }

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
  }, [])

  const handleNotifications = async () => {
    await schedulePushNotification();
  }

  useEffect(() => {
    const run = async () => {
      const { data } = await apiHelper.get(`tickets/${user._id}/gettickets`)
      const tickets = data.tickets

      if (!user?.parkingStatus && tickets[0].createdAt !== tickets[0].updatedAt) {
        handleNotifications().then((response) =>{
          console.log(response)
        }).catch((error) => {
          console.log(error)
        })
      }
    }

    run()
  }, [user.parkingStatus])

  useEffect(() => {
    if (error !== '' && error) {
      openDialog()
    }
  }, [error])

  async function schedulePushNotification() {

    const { data } = await apiHelper.get(`tickets/${user._id}/gettickets`)
    const tickets = data.tickets
    const date = convertToDate(tickets[0].updatedAt)
    const time = convertToTime(tickets[0].updatedAt)
  
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Check-out notification 📬",
        body: `It's seem that you have just left on ${date} at ${time}`,
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
    <LinearGradient style={{ flex: 1 }} colors={['#FFEE97', '#ffffff']}>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <Image style={styles.imagestyle} source={ticket} />
        <View style={styles.container}>
          <Text style={styles.titlestyle}>HERE IS YOUR TICKET</Text>
          <Text style={styles.subtext}>YOUR OWN OR CODE!HOW COOL IS THIS!</Text>
          <View style={styles.qrbackground}>
            <QRCode
              value={`${ticketList[0].plate}-${user.ID}-${ticketList[0].randomCheck}`}
              size={(Dimensions.get('window').width / 5) * 3}
            />
          </View>
          <Text style={styles.note}>
            Scan this as a ticket on the device at the checkout.
          </Text>
          <Image source={heretk} />

          <Dialog.Container visible={dialog}>
          <Dialog.Title>Payment Notification</Dialog.Title>
          <Dialog.Description>
            {error}
          </Dialog.Description>
          <Dialog.Button label="OK" onPress={closeDialog} />
        </Dialog.Container>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 40,
  },
  imagestyle: {
    alignSelf: 'flex-end',
    marginTop: 10,
    marginRight: 10,
  },
  titlestyle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FFAD33',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtext: {
    color: '#FFC65F',
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 10,
  },
  note: {
    fontSize: 14,
    width: box_width,
    textAlign: 'center',
    paddingBottom: 10,
  },
});

export default QRTicketScreen;
