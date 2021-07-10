import React, { useState, useEffect, useContext } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import { Context as AuthContext } from '../context/authContext';
import { Context as UserContext } from '../context/userContext';

import BankItem from '../components/BankItem';

import apiHelper from '../utils/apiHelper';

const MoneySourceComponent = (props) => {
  const {
    user
  } = useContext(UserContext);

  const userId = user._id;

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const { data } = await apiHelper.get(`/users/moneysource/${userId}`);
    setItems(data.moneySource);
    setIsLoading(false);
  };

  const getPadding = () => {
    return <Text>{''}</Text>;
  };

  useEffect(() => {
    setIsLoading(true);
    fetchData();
  }, []);

  return (
    <FlatList
      style={styles.flatstyle}
      data={items}
      keyExtractor={(item) => item._id}
      showsHorizontalScrollIndicator={false}
      scrollEnabled={true}
      nestedScrollEnabled={false}
      renderItem={({ item }) => {
        return <BankItem item={item} isLoading={isLoading} />;
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
