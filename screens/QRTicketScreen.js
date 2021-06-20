import React, { useContext } from 'react';
import {
  Text,
  Image,
  StyleSheet,
  ScrollView,
  View,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { Context as UserContext } from '../context/userContext'

import ticket from '../assets/packin.png';
import heretk from '../assets/here.png';
import qrcodeimg from '../assets/yourqrcode.png';
import QRCode from 'react-native-qrcode-svg';

const box_width = Dimensions.get('window').width / 2;

const QRTicketScreen = (props) => {
  const { user, ticketList } = useContext(UserContext)

  return (
    <LinearGradient style={{ flex: 1 }} colors={['#FFEE97', '#ffffff']}>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <Image style={styles.imagestyle} source={ticket} />
        <View style={styles.container}>
          <Text style={styles.titlestyle}>HERE IS YOUR TICKET</Text>
          <Text style={styles.subtext}>YOUR OWN OR CODE!HOW COOL IS THIS!</Text>
          <View style={styles.qrbackground}>
            <QRCode
              value={`${user.plate}-${user.ID}-${ticketList[0].randomCheck}`}
              size={(Dimensions.get('window').width / 5) * 3}
            />
          </View>
          <Text style={styles.note}>
            Scan this as a ticket on the device at the checkout.
          </Text>
          <Image source={heretk} />
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
