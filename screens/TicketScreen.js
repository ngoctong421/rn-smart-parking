import React, { useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import HistoryTicketItem from '../components/HistoryTicketItem';

import { Context as UserContext } from '../context/userContext'

import qrcodeticket from '../assets/QRcodeticket.png';
import ticketinfo from '../assets/ticket.png';
import LoadingComponent from '../components/LoadingComponent';
import { convertToDate, convertToTime } from '../utils/formatDateTime';

const TicketScreen = (props) => {
  const { user, ticketList, appLoading } = useContext(UserContext)

  const getOutdatedTicket = (tickets) => {
    let outdatedTicket = [...tickets]
    outdatedTicket = outdatedTicket.slice(1)
    return outdatedTicket
  }

  return (
    <LinearGradient style={{ flex: 1 }} colors={['#a2ecff', '#ffffff']}>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          { appLoading && <LoadingComponent />}

          <Text style={styles.titlestyle}>TICKET</Text>

          <View style={styles.blockcontainer}>
            <Text style={styles.qrheader}>QR CODE TICKET</Text>
            <TouchableOpacity
              style={styles.detailstyle}
              disabled={!user?.parkingStatus}
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
              {
                user?.parkingStatus ? (
                  <View>
                    <Text style={styles.tickettext}>Ticket Id: { ticketList && `****${ticketList[0]?._id.slice(-4)}`}</Text>
                    <Text style={styles.tickettext}>Date: { ticketList && convertToDate(ticketList[0]?.createdAt)}</Text>
                    <Text style={styles.tickettext}>Arrival time: { ticketList && convertToTime(ticketList[0]?.createdAt)}</Text>
                    <Text style={styles.tickettext}>Vehicle plate: { ticketList && ticketList[0]?.plate}</Text>
                  </View>
                ) : (
                  <View>
                    <Text style={styles.tickettext}>No ticket for you</Text>
                  </View>
                )
              }
            </TouchableOpacity>
          </View>

          <View style={styles.historycontainer}>
            <Text style={styles.historyheader}>RECENT HISTORY</Text>
            {
              getOutdatedTicket(ticketList).length > 0 ? (
                <FlatList
                  style={styles.flatstyle}
                  data={getOutdatedTicket(ticketList)}
                  keyExtractor={(data) => data._id.toString()}
                  showsHorizontalScrollIndicator={false}
                  horizontal
                  scrollEnabled={true}
                  nestedScrollEnabled={true}
                  renderItem={({ item }) => {
                    return <HistoryTicketItem item={item} user={user} />;
                  }}
                />
              ) : (
                <View style={styles.nohistorylist}>
                    <Text style={styles.tickettext}>No last tickets</Text>
                </View>
              )
            }
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
    paddingTop: '25%',
    paddingBottom: 40,
  },
  titlestyle: {
    fontSize: 23,
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
    elevation: 1,
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
    fontSize: 16,
    color: '#f8a500',
    paddingVertical: 8,
  },
  detailstyle: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 14,
  },
  nohistorylist: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 30,
  },
  imagestyle: {
    width: 50,
    height: 50,
    marginRight: 14,
  },
  qrtext: {
    color: '#f8a500',
    fontWeight: 'bold',
    fontSize: 14,
  },
  ticketheader: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#2cd4ff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    color: '#0090fe',
    paddingVertical: 8,
  },
  tickettext: {
    color: '#0090fe',
    fontWeight: 'bold',
    fontSize: 14,
  },
  historycontainer: {
    shadowOpacity: 0.5,
    shadowRadius: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    elevation: 1,
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
    fontSize: 16,
    color: '#18b247',
    paddingVertical: 8,
  },
  flatstyle: {
    paddingVertical: 6,
  },
});

export default TicketScreen;
