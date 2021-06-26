import React from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';

import history from '../assets/tickin.png';
import { convertToDate, convertToTime } from '../utils/formatDateTime';

const HistoryTicketItem = ({ item, user }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.imagecontainer}>
        <Image source={history} style={styles.imagestyle} />
        <View>
          <Text style={styles.tickettext}>Ticket Id: {`****${item._id.slice(-4)}`}</Text>
          <Text style={styles.tickettext}>Date: {convertToDate(item.createdAt)}</Text>
          <Text style={styles.tickettext}>Arrival time: {convertToTime(item.createdAt)}</Text>
          <Text style={styles.tickettext}>Vehicle plate: {user && user?.plate}</Text>
        </View>
      </View>
      <Text style={styles.datestyle}></Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#CEF5FF',
    marginHorizontal: 16,
    marginVertical: 6,
    borderRadius: 10,
  },
  imagecontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    marginHorizontal: 16,
  },
  imagestyle: {
    width: 60,
    height: 60,
    marginRight: 14,
  },
  textstyle: {
    color: '#0090FE',
    fontWeight: 'bold',
    fontSize: 14,
  },
  datestyle: {
    textAlign: 'center',
    color: '#0090FE',
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 2,
  },
});

export default HistoryTicketItem;
