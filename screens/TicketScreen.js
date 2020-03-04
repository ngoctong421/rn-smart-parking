import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TicketScreen = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text>QR Code</Text>
      </View>

      <View>
        <Text>Infor</Text>
      </View>

      <View>
        <Text>Recent</Text>
      </View>
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

export default TicketScreen;
