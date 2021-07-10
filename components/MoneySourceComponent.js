import React, { useState, useEffect, useContext } from 'react';
import {
  Text,
  FlatList,
  StyleSheet
} from 'react-native';

import { Context as UserContext } from '../context/userContext';

import BankItem from '../components/BankItem';

const MoneySourceComponent = (props) => {
  const {
    moneySource
  } = useContext(UserContext);

  const getPadding = () => {
    return <Text>{''}</Text>;
  };

  return (
    <FlatList
      style={styles.flatstyle}
      data={moneySource}
      keyExtractor={(item) => item._id}
      showsHorizontalScrollIndicator={false}
      scrollEnabled={true}
      nestedScrollEnabled={false}
      renderItem={({ item }) => {
        return <BankItem item={item} />;
      }}
      ListHeaderComponent={getPadding}
      ListFooterComponent={getPadding}
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
