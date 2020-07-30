import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
  VirtualizedList,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import HistoryTicketItem from '../components/HistoryTicketItem';

import qrcodeticket from '../assets/QRcodeticket.png';
import ticketinfo from '../assets/ticket.png';

const dataTemp = [
  {
    id: 1,
    arrival: '2:55 PM',
    date: 'Mar 29, 2020',
  },
  {
    id: 2,
    arrival: '3:29 PM',
    date: 'Mar 5, 2020',
  },
  {
    id: 3,
    arrival: '2:10 PM',
    date: 'Feb 21, 2020',
  },
  {
    id: 4,
    arrival: '9:03 AM',
    date: 'Feb 10, 2020',
  },
];

const TicketScreen = (props) => {
  return (
    <LinearGradient style={{ flex: 1 }} colors={['#a2ecff', '#ffffff']}>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Text style={styles.titlestyle}>TICKET</Text>

          <View style={styles.blockcontainer}>
            <Text style={styles.qrheader}>QR CODE TICKET</Text>
            <TouchableOpacity
              style={styles.detailstyle}
              onPress={() => {
                props.navigation.navigate('QRTicket');
              }}
            >
              <Image source={qrcodeticket} style={styles.imagestyle} />
              <Text style={styles.qrtext}>Show your QR ticket</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.blockcontainer}>
            <Text style={styles.ticketheader}>TICKET INFOMATION</Text>
            <TouchableOpacity style={styles.detailstyle}>
              <Image source={ticketinfo} style={styles.imagestyle} />
              <View>
                <Text style={styles.tickettext}>Ticket number: 101</Text>
                <Text style={styles.tickettext}>Date: Mar 29, 2020</Text>
                <Text style={styles.tickettext}>Arrival time: 1:13 PM</Text>
                <Text style={styles.tickettext}>Vehicle plate:</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.historycontainer}>
            <Text style={styles.historyheader}>RECENT HISTORY</Text>
            <FlatList
              style={styles.flatstyle}
              data={dataTemp}
              keyExtractor={(data) => data.id.toString()}
              showsHorizontalScrollIndicator={false}
              horizontal
              scrollEnabled={true}
              nestedScrollEnabled={true}
              renderItem={({ item }) => {
                return <HistoryTicketItem item={item} />;
              }}
            />
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
    marginBottom: 6,
  },
  blockcontainer: {
    flex: 1,
    shadowRadius: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    elevation: 4,
    backgroundColor: '#fff',
    borderRadius: 20,
    marginVertical: 10,
    marginHorizontal: 24,
  },
  qrheader: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#fff29c',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#f8a500',
    paddingVertical: 8,
  },
  detailstyle: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 14,
  },
  imagestyle: {
    width: 60,
    height: 60,
    marginRight: 14,
  },
  qrtext: {
    color: '#f8a500',
    fontWeight: 'bold',
    fontSize: 16,
  },
  ticketheader: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#2cd4ff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#0090fe',
    paddingVertical: 8,
  },
  tickettext: {
    color: '#0090fe',
    fontWeight: 'bold',
    fontSize: 16,
  },
  historycontainer: {
    shadowOpacity: 0.5,
    shadowRadius: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    elevation: 4,
    backgroundColor: '#fff',
    borderRadius: 20,
    marginTop: 10,
    marginHorizontal: 24,
  },
  historyheader: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#9cffba',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#18b247',
    paddingVertical: 8,
  },
  flatstyle: {
    paddingVertical: 6,
  },
});

export default TicketScreen;
