import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList
} from "react-native";

import HistoryTicketItem from "../components/HistoryTicketItem";

import qrcodeticket from "../assets/QRcodeticket.png";
import ticketinfo from "../assets/ticket.png";

const dataTemp = [
  {
    id: 1,
    arrival: "2:55 PM",
    date: "Mar 29, 2020"
  },
  {
    id: 2,
    arrival: "3:29 PM",
    date: "Mar 5, 2020"
  },
  {
    id: 3,
    arrival: "2:10 PM",
    date: "Feb 21, 2020"
  },
  {
    id: 4,
    arrival: "9:03 AM",
    date: "Feb 10, 2020"
  }
];

const TicketScreen = props => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.titlestyle}>TICKET</Text>

      <View style={styles.blockcontainer}>
        <Text style={styles.qrheader}>QR CODE TICKET</Text>
        <TouchableOpacity style={styles.detailstyle}>
          <Image source={qrcodeticket} style={styles.imagestyle} />
          <Text style={styles.qrtext}>Click here to show your QR ticket</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.blockcontainer}>
        <Text style={styles.ticketheader}>TICKET INFOMATION</Text>
        <TouchableOpacity style={styles.detailstyle}>
          <Image source={ticketinfo} style={styles.imagestyle} />
          <View>
            <Text style={styles.tickettext}>Ticket number:</Text>
            <Text style={styles.tickettext}>Date:</Text>
            <Text style={styles.tickettext}>Arrival time:</Text>
            <Text style={styles.tickettext}>Vehicle plate:</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.historycontainer}>
        <Text style={styles.historyheader}>RECENT HISTORY</Text>
        <FlatList
          style={styles.flatstyle}
          data={dataTemp}
          keyExtractor={data => data.id.toString()}
          showsVerticalScrollIndicator={false}
          scrollEnabled={false}
          renderItem={({ item }) => {
            return <HistoryTicketItem item={item} />;
          }}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#a2ecff"
  },
  titlestyle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: "#000",
    elevation: 2,
    textAlign: "center",
    marginTop: 32,
    marginBottom: 16
  },
  blockcontainer: {
    shadowRadius: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    elevation: 4,
    backgroundColor: "#fff",
    borderRadius: 20,
    marginVertical: 10,
    marginHorizontal: 20
  },
  qrheader: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "#FFF29C",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    color: "#F8A500",
    paddingVertical: 8
  },
  detailstyle: {
    flexDirection: "row",
    alignItems: "center",
    margin: 16
  },
  imagestyle: {
    width: 70,
    height: 70,
    marginRight: 20
  },
  qrtext: {
    color: "#F8A500",
    fontWeight: "bold",
    fontSize: 16
  },
  ticketheader: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "#2CD4FF",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    color: "#0090FE",
    paddingVertical: 8
  },
  tickettext: {
    color: "#0090FE",
    fontWeight: "bold",
    fontSize: 16
  },
  historycontainer: {
    shadowOpacity: 0.5,
    shadowRadius: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    elevation: 4,
    backgroundColor: "#fff",
    borderRadius: 20,
    marginTop: 10,
    marginBottom: 32,
    marginHorizontal: 20
  },
  historyheader: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "#9CFFBA",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    color: "#18B247",
    paddingVertical: 8
  },
  flatstyle: {
    paddingVertical: 6
  }
});

export default TicketScreen;
