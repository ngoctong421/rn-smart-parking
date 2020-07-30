import React from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';

const RecentActItem = ({ item }) => {
  return (
    <TouchableOpacity>
      <View style={styles.boxstyle}>
        <View style={{ alignItems: 'center', padding: 10 }}>
          <Text style={styles.normaltext}>DATE:</Text>
          <Text style={styles.normaltext}>{item.createdAt}</Text>
        </View>
        <Text style={styles.amounttext}>{item.amount} VND</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  normaltext: {
    color: '#0090FE',
    fontWeight: 'bold',
    justifyContent: 'center',
  },
  amounttext: {
    color: '#06FF16',
    fontWeight: 'bold',
    paddingHorizontal: 60,
    fontSize: 18,
  },
  boxstyle: {
    flexDirection: 'row',
    borderRadius: 16,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    marginVertical: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    shadowColor: '#000000',
    shadowRadius: 5,
    shadowOpacity: 0.3,
  },
});

export default RecentActItem;
