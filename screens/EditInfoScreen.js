import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Picker
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import avatar from "../assets/profileavatar.png";

const EditInfoScreen = props => {
  const [selectedValue, setSelectedValue] = useState("");

  const [inputData, setInputData] = useState({
    idnumber: "",
    email: ""
  });

  const { idnumber, email } = inputData;

  const handleOnChange = key => text => {
    setInputData({ ...inputData, [key]: text });
  };

  return (
    <LinearGradient style={{ flex: 1 }} colors={["#a2ecff", "#ffffff"]}>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Text style={styles.titlestyle}>EDIT PROFILE</Text>

          <Image source={avatar} style={styles.imagestyle} />

          <Text style={styles.usernametext}>JennyLinkay</Text>

          <Text style={styles.titleinfotext}>POSITION :</Text>
          <View style={styles.pickerstyle}>
            <Picker
              mode="dialog"
              selectedValue={selectedValue}
              onValueChange={itemValue => setSelectedValue(itemValue)}
            >
              <Picker.Item label="Teacher" value="teacher" color="#6b6b6b" />
              <Picker.Item label="Student" value="student" color="#6b6b6b" />
            </Picker>
          </View>

          <Text style={styles.titleinfotext}>ID NUMBER :</Text>
          <TextInput
            style={styles.inputstyle}
            value={idnumber}
            keyboardType={"number-pad"}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={handleOnChange("idnumber")}
          />

          <Text style={styles.titleinfotext}>EMAIL :</Text>
          <TextInput
            style={styles.inputstyle}
            value={email}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={handleOnChange("email")}
          />

          <TouchableOpacity style={styles.buttonstyle}>
            <Text style={styles.buttontextstyle}>CONFIRM</Text>
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
    paddingTop: 60,
    paddingBottom: 40
  },
  titlestyle: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#fff",
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
    color: "#6b6b6b",
    paddingBottom: 10,
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold"
  },
  titleinfotext: {
    alignSelf: "flex-start",
    paddingLeft: 54,
    color: "#6b6b6b",
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 10
  },
  pickerstyle: {
    shadowColor: "#000",
    shadowRadius: 4,
    paddingLeft: 10,
    paddingVertical: 2,
    marginHorizontal: 40,
    shadowOffset: {
      width: 0,
      height: 2
    },
    elevation: 2,
    borderRadius: 16,
    marginBottom: 12,
    backgroundColor: "#ffffff",
    fontSize: 16
  },
  inputstyle: {
    shadowColor: "#000",
    shadowRadius: 4,
    paddingHorizontal: 20,
    marginHorizontal: 40,
    shadowOffset: {
      width: 0,
      height: 2
    },
    elevation: 2,
    borderRadius: 16,
    paddingVertical: 12,
    marginBottom: 12,
    backgroundColor: "#ffffff",
    fontSize: 16,
    color: "#6b6b6b"
  },
  buttonstyle: {
    marginRight: 40,
    backgroundColor: "#ffe888",
    alignSelf: "flex-end",
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 20,
    marginTop: 6
  },
  buttontextstyle: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#ffb31d"
  }
});

export default EditInfoScreen;
