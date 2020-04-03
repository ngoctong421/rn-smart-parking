import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput
} from "react-native";

import passwordlogo from "../assets/resetpasslogo.png";

const ResetPasswordScreen = props => {
  const [inputData, setInputData] = useState({
    newPassword: "",
    confirmPassword: "",
    verifyCode: ""
  });

  const { newPassword, confirmPassword, verifyCode } = inputData;

  const handleOnChange = key => text => {
    setInputData({ ...inputData, [key]: text });
  };

  return (
    <View style={styles.container}>
      <Image source={passwordlogo} style={styles.imagestyle} />

      <Text style={styles.titlestyle}>Reset Password</Text>

      <Text style={styles.textinfo}>New Password :</Text>
      <TextInput
        style={styles.inputstyle}
        value={newPassword}
        autoCapitalize="none"
        secureTextEntry={true}
        autoCorrect={false}
        onChangeText={handleOnChange("newPassword")}
      />

      <Text style={styles.textinfo}>Re-enter New Password :</Text>
      <TextInput
        style={styles.inputstyle}
        value={confirmPassword}
        autoCapitalize="none"
        secureTextEntry={true}
        autoCorrect={false}
        onChangeText={handleOnChange("confirmPassword")}
      />

      <Text style={styles.textinfo}>Verification Code :</Text>
      <TextInput
        style={styles.inputstyle}
        value={verifyCode}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={handleOnChange("verifyCode")}
      />

      <TouchableOpacity style={styles.buttonstyle}>
        <Text style={styles.buttontext}>CONFIRM</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#a2ecff"
  },
  imagestyle: {
    alignSelf: "center",
    marginBottom: 16
  },
  titlestyle: {
    color: "#6b6b6b",
    textAlign: "center",
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 16
  },
  textinfo: {
    color: "#6b6b6b",
    fontSize: 16,
    marginLeft: 50,
    marginBottom: 4
  },
  inputstyle: {
    backgroundColor: "#fff",
    borderRadius: 16,
    marginHorizontal: 36,
    paddingVertical: 12,
    paddingHorizontal: 20,
    fontSize: 16,
    marginBottom: 10,
    shadowColor: "#000",
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2
    },
    elevation: 2
  },
  buttonstyle: {
    backgroundColor: "#ffe888",
    marginHorizontal: 36,
    borderRadius: 16,
    marginTop: 16
  },
  buttontext: {
    color: "#ffb31d",
    paddingVertical: 12,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold"
  }
});

export default ResetPasswordScreen;
