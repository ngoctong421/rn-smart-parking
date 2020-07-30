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

import BankItem from '../components/BankItemWD';

import apiHelper from '../utils/apiHelper';
import { navigate, navigateReplace } from '../utils/navigationRef';

const MoneySourceComponent = (props) => {
  const {
    getMe,
    createMoneySource,
    clearError,
    setAppLoading,
    user,
    error,
    appLoading,
  } = useContext(UserContext);

  const userId = user._id;

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const { data } = await apiHelper.get(`/users/moneysource/${userId}`);
    setItems(data.moneySource);
    setIsLoading(false);
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
      horizontal={false}
      scrollEnabled={false}
      nestedScrollEnabled={false}
      renderItem={({ item }) => {
        return <BankItem item={item} isLoading={isLoading} />;
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
