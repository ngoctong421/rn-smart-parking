import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import avatar from "../assets/profileavatar.png";

const MyInfoScreen = props => {
  return (
    <LinearGradient style={{ flex: 1 }} colors={["#a2ecff", "#ffffff"]}>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Text style={styles.titlestyle}>MY INFORMATION</Text>

          <Image source={avatar} style={styles.imagestyle} />

          <Text style={styles.usernametext}>JennyLinkay</Text>

          <LinearGradient
            style={styles.infoboxstyle}
            colors={["#a2ecff", "#ffffff"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <Text style={styles.infoitemtextstyle}>POSITION :</Text>
            <Text style={styles.infotext}>STUDENT</Text>
          </LinearGradient>

          <LinearGradient
            style={styles.infoboxstyle}
            colors={["#a2ecff", "#ffffff"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <Text style={styles.infoitemtextstyle}>ID NUMBER :</Text>
            <Text style={styles.infotext}>17520000</Text>
          </LinearGradient>

          <LinearGradient
            style={styles.infoboxstyle}
            colors={["#a2ecff", "#ffffff"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <Text style={styles.infoitemtextstyle}>PASSWORD :</Text>
            <Text style={styles.infotext}>********</Text>
          </LinearGradient>

          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate("ChangePassword");
            }}
            style={{ alignSelf: "flex-end" }}
          >
            <Text
              style={{
                color: "#0090fe",
                paddingRight: 34,
                fontWeight: "bold",
                fontSize: 16,
                paddingBottom: 16
              }}
            >
              Change password
            </Text>
          </TouchableOpacity>

          <LinearGradient
            style={styles.infoboxstyle}
            colors={["#a2ecff", "#ffffff"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <Text style={styles.infoitemtextstyle}>EMAIL :</Text>
            <Text style={styles.infotext}>17520000@gm.uit.edu.vn</Text>
          </LinearGradient>

          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate("EditInfo");
            }}
            style={styles.buttonstyle}
          >
            <Text style={styles.buttontextstyle}>EDIT</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingVertical: 60
  },
  titlestyle: {
    fontSize: 26,
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
  usernametext: {
    paddingTop: 10,
    alignSelf: "center",
    color: "#0090fe",
    paddingBottom: 10,
    fontSize: 22,
    fontWeight: "bold"
  },
  infoboxstyle: {
    shadowColor: "#000",
    shadowRadius: 4,
    paddingHorizontal: 10,
    marginHorizontal: 34,
    shadowOffset: {
      width: 0,
      height: 2
    },
    elevation: 2,
    borderRadius: 20,
    marginBottom: 16
  },
  infoitemtextstyle: {
    paddingTop: 6,
    color: "#0090fe",
    fontSize: 14,
    paddingLeft: 10,
    fontWeight: "bold"
  },
  infotext: {
    color: "#0090fe",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    paddingBottom: 10
  },
  buttonstyle: {
    marginRight: 34,
    backgroundColor: "#ffe888",
    alignSelf: "flex-end",
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 20
  },
  buttontextstyle: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#ffb31d"
  }
});

export default MyInfoScreen;
