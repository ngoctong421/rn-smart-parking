import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar
} from "react-native";
import { MaterialCommunityIcons } from "react-native-vector-icons";

const ProfileScreen = props => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.titlestyle}>MY PROFILE</Text>

      <Image
        style={styles.imagestyle}
        source={{ uri: "https://pbs.twimg.com/media/Dyl6aEwX4AEkyDe.jpg" }}
      />

      <View style={styles.blockcontainer}>
        <View style={styles.verticalstyle}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate("MyInfoScreen");
            }}
            style={styles.blockstyle}
          >
            <MaterialCommunityIcons
              name="folder-account-outline"
              size={90}
              color="#a2ecff"
            />
            <Text style={styles.textstyle}>YOUR</Text>
            <Text style={styles.textstyle}>INFOMATION</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.blockstyle}>
            <MaterialCommunityIcons name="qrcode" size={90} color="#a2ecff" />
            <Text style={styles.textstyle}>YOUR</Text>
            <Text style={styles.textstyle}>QR CODE</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.verticalstyle}>
          <TouchableOpacity style={styles.blockstyle}>
            <MaterialCommunityIcons
              name="motorbike"
              size={90}
              color="#a2ecff"
            />
            <Text style={styles.textstyle}>ABOUT YOUR</Text>
            <Text style={styles.textstyle}>VEHICLES</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.blockstyle}>
            <MaterialCommunityIcons name="logout" size={90} color="#a2ecff" />
            <Text style={styles.textstyle}>LOG OUT</Text>
          </TouchableOpacity>
        </View>
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
    shadowColor: "#000",
    textAlign: "center",
    marginTop: 32,
    marginBottom: 16
  },
  imagestyle: {
    width: 120,
    height: 120,
    alignSelf: "center",
    borderRadius: 100,
    marginVertical: 8
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
    marginTop: 8,
    marginHorizontal: 20,
    marginBottom: 32,
    paddingHorizontal: 20,
    paddingVertical: 20
  },
  verticalstyle: {
    alignItems: "center"
  },
  blockstyle: {
    alignItems: "center",
    marginVertical: 10,
    marginHorizontal: 10,
    padding: 10,
    backgroundColor: "#fff",
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowColor: "#000",
    elevation: 2
  },
  textstyle: {
    fontSize: 18,
    color: "#0090fe"
  }
});

export default ProfileScreen;
