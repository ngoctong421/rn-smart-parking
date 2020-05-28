import React from "react";
import { View, Text, StyleSheet,Image, ScrollView, Dimensions, TouchableOpacity} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import dollarbill from "../assets/canadian-dollar.png";
const screenwidth = Dimensions.get("window").width;
const screenheight = Dimensions.get("window").height;
const PaymentScreen = props => {
  return (
    <LinearGradient style={{ flex: 1 }} colors={["#a2ecff", "#ffffff"]}>
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Image source={dollarbill}/>
          <TouchableOpacity style={styles.buttonstyle}
          onPress={() => {
            props.navigation.navigate("AddMoney");
          }}
          >
            <Text style={styles.buttontext}>ADD YOUR MONEY SOURCE</Text>
          </TouchableOpacity>
          <Text style={styles.subtext}>AND START ENJOY OUR AMAZING SERVICES TOTALLY!</Text>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container:{
    width: screenwidth,
    height : screenheight,
    alignItems : "center",
    justifyContent: "center"
  },
  buttonstyle: {
    backgroundColor: "#ffe888",
    borderRadius: 16,
    alignSelf: "stretch",
    marginHorizontal: 30,
    shadowColor: "#000000",
    shadowRadius: 5,
    shadowOpacity: 0.3,
    marginTop : 20,
    marginBottom : 10
  },
  buttontext: {
    color: "#FE5D00",
    paddingVertical: 12,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    paddingHorizontal : 20
  },
  subtext: {
    color: "#4B95A8",
    fontWeight: "bold",
    fontSize: 14,
    width: screenwidth/2,
    marginBottom: 15,
    textAlign: "center"
  }
});

export default PaymentScreen;
