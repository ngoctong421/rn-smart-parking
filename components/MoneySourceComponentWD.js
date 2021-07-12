import React, { useState, useEffect, useContext } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import { Context as UserContext } from '../context/userContext';

import BankItem from '../components/BankItemWD';

import apiHelper from '../utils/apiHelper';

const MoneySourceComponent = (props) => {
  const {
    moneySource
  } = useContext(UserContext);

  return (
    <FlatList
      style={styles.flatstyle}
      data={moneySource}
      keyExtractor={(item) => item._id}
      showsHorizontalScrollIndicator={false}
      horizontal={false}
      scrollEnabled={false}
      nestedScrollEnabled={false}
      renderItem={({ item }) => {
        return <BankItem item={item} />;
      }}
    />
  );
};

const styles = StyleSheet.create({
  flatstyle: {
    alignSelf: 'stretch',
    marginHorizontal: 45,
    borderRadius: 10,
  },
});

export default MoneySourceComponent;
