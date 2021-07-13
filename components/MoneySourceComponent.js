import React, { useState, useEffect, useContext } from 'react';
import {
  Text,
  StyleSheet,
  FlatList
} from 'react-native';

import { Context as UserContext } from '../context/userContext';

import BankItem from '../components/BankItem';

const MoneySourceComponent = () => {
  const {
    moneySource
  } = useContext(UserContext);

  useEffect(() => {
    console.log('moneySource', moneySource)
  }, [moneySource])

  return (
    <FlatList
      style={styles.flatstyle}
      data={moneySource}
      keyExtractor={(item) => item._id}
      showsHorizontalScrollIndicator={false}
      scrollEnabled={true}
      nestedScrollEnabled={false}
      renderItem={({ item }) => {
        return <BankItem item={item}/>;
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
