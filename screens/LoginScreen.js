import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput
} from "react-native";

import banner from "../assets/welcomebanner.png";

const LoginScreen = props => {
  const [inputData, setInputData] = useState({
    username: "",
    password: ""
  });

  const { username, password } = inputData;

  const handleOnChange = key => text => {
    setInputData({ ...inputData, [key]: text });
  };

  return (
    <View style={styles.container}>
      <Image source={banner} style={styles.imagestyle} />

      <View style={styles.blockcontainer}>
        <Text style={styles.maintitle}>WELCOME BACK!</Text>

        <Text style={styles.subtitle}>LONG TIME NO SEE!</Text>

        <Text style={styles.textinfo}>Username :</Text>
        <TextInput
          style={styles.inputstyle}
          value={username}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={handleOnChange("username")}
        />

        <Text style={styles.textinfo}>Password :</Text>
        <TextInput
          style={styles.inputstyle}
          value={password}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          onChangeText={handleOnChange("password")}
        />

        <TouchableOpacity
          style={styles.buttonstyle}
          onPress={() => {
            props.navigation.navigate("Tab");
          }}
        >
          <Text style={styles.buttontext}>LOG IN</Text>
        </TouchableOpacity>

        <Text style={styles.subtext}>Do not remember your password?</Text>

        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("ForgetPassword");
          }}
        >
          <Text style={styles.maintext}>CLICK HERE!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: 34,
    paddingBottom: 40,
    backgroundColor: "#9bebff"
  },
  imagestyle: {
    alignSelf: "center",
    marginBottom: 44
  },
  blockcontainer: {
    backgroundColor: "#cef5ff",
    borderRadius: 16,
    marginHorizontal: 20,
    paddingHorizontal: 20,
    paddingVertical: 12
  },
  maintitle: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10
  },
  subtitle: {
    color: "#0090fe",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 10
  },
  textinfo: {
    color: "#0090fe",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
    marginBottom: 4
  },
  inputstyle: {
    backgroundColor: "#fff",
    color: "#0090fe",
    borderRadius: 16,
    paddingHorizontal: 20,
    paddingVertical: 12,
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
    backgroundColor: "#49cbec",
    borderRadius: 16,
    marginBottom: 10,
    marginTop: 6
  },
  buttontext: {
    color: "#fff",
    textAlign: "center",
    paddingVertical: 8,
    fontSize: 26,
    fontWeight: "bold"
  },
  subtext: {
    color: "#0090fe",
    textAlign: "center"
  },
  maintext: {
    color: "#ff6d6d",
    textAlign: "center"
  }
});

export default LoginScreen;
