import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import avatar from "../assets/profileavatar.png";
import bikepic from "../assets/bikeprofile.png";
import qrcodepic from "../assets/qrcode.png";
import infopic from "../assets/yourpro.png";
import logoutpic from "../assets/logout.png";

const { width } = Dimensions.get("window");

const box_width = width / 3;
const box_height = box_width * 1.1;

const ProfileScreen = props => {
  return (
    <LinearGradient style={{ flex: 1 }} colors={["#a2ecff", "#ffffff"]}>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Text style={styles.titlestyle}>MY PROFILE</Text>

          <Image source={avatar} style={styles.imagestyle} />

          <View style={styles.blockcontainer}>
            <View style={styles.verticalstyle}>
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate("MyInfo");
                }}
                style={styles.blockstyle}
              >
                <Image source={infopic} style={styles.iconstyle} />
                <Text style={styles.textstyle}>YOUR</Text>
                <Text style={styles.textstyle}>INFOMATION</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.blockstyle}>
                <Image source={qrcodepic} style={styles.iconstyle} />
                <Text style={styles.textstyle}>YOUR</Text>
                <Text style={styles.textstyle}>QR CODE</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.verticalstyle}>
              <TouchableOpacity style={styles.blockstyle}>
                <Image source={bikepic} style={styles.iconstyle} />
                <Text style={styles.textstyle}>ABOUT YOUR</Text>
                <Text style={styles.textstyle}>VEHICLES</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.blockstyle}>
                <Image source={logoutpic} style={styles.iconstyle} />
                <Text style={styles.textstyle}>LOG OUT</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingVertical: 60,
    paddingHorizontal: 8
  },
  titlestyle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    shadowRadius: 6,
    shadowColor: "#000",
    textAlign: "center",
    marginBottom: 16
  },
  imagestyle: {
    //width: 120,
    //height: 120,
    alignSelf: "center"
    //borderRadius: 100,
    //marginVertical: 8
  },
  blockcontainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 20,
    backgroundColor: "#fff",
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 6
    },
    shadowOpacity: 0.4,
    shadowColor: "#000",
    elevation: 8,
    marginHorizontal: 16,
    paddingHorizontal: 20,
    paddingVertical: 20
  },
  verticalstyle: {
    alignItems: "center"
  },
  blockstyle: {
    alignItems: "center",
    height: box_height,
    width: box_width,
    marginVertical: 10,
    marginHorizontal: 10,
    padding: 10,
    backgroundColor: "#fff",
    shadowRadius: 4,
    borderRadius: 20,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowColor: "#000",
    justifyContent: "center",
    elevation: 2
  },
  iconstyle: {
    marginBottom: 5
  },
  textstyle: {
    fontSize: 15,
    color: "#0090fe",
    fontWeight: "bold"
  }
});

export default ProfileScreen;
