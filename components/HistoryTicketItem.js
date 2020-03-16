import React from "react";
import { View, TouchableOpacity, Text, Image, StyleSheet } from "react-native";

import history from '../assets/tickin.png'

const HistoryTicketItem = ({ item }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.imagecontainer}>
        <Image source={history} style={styles.imagestyle} />
        <View>
          <Text style={styles.textstyle}>Ticket number: {item.id}</Text>
          <Text style={styles.textstyle}>Arrival time: {item.arrival}</Text>
          <Text style={styles.textstyle}>Vehicle plate:</Text>
        </View>
      </View>

      <Text style={styles.datestyle}>DATE: {item.date}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#CEF5FF",
    marginHorizontal: 16,
    marginVertical: 6,
    borderRadius: 20
  },
  imagecontainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
    marginHorizontal: 16
  },
  imagestyle: {
    width: 70,
    height: 70,
    marginRight: 20
  },
  textstyle: {
    color: "#0090FE",
    fontWeight: "bold",
    fontSize: 16
  },
  datestyle: {
    textAlign: "center",
    color: "#0090FE",
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 6,
    marginBottom: 14
  }
});

export default HistoryTicketItem;
