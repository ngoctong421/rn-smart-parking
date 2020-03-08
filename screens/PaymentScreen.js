import React from "react";
import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import mainbackground from '../assets/mainbackground.png'
const PaymentScreen = () => {
  return (
    <View style={styles.container}>
      <Text>PaymentScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default PaymentScreen;
