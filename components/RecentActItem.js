import React from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import ContentLoader from '@sarmad1995/react-native-content-loader';

const RecentActItem = ({ item, isLoading }) => {
  const date = new Date(item.createdAt).toDateString();

  return (
    <TouchableOpacity>
      <ContentLoader active title={false} loading={isLoading} avatar pRows={1}>
        <View style={styles.boxstyle}>
          <View style={{ alignItems: 'center', padding: 10 }}>
            <Text style={styles.normaltext}>{date}</Text>
          </View>
          <Text style={styles.amounttext}>{item.amount} VND</Text>
        </View>
      </ContentLoader>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  normaltext: {
    color: '#0090FE',
    fontWeight: 'bold',
    justifyContent: 'center',
    fontSize: 14
  },
  amounttext: {
    color: '#06FF16',
    fontWeight: 'bold',
    paddingHorizontal: 60,
    fontSize: 14,
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
