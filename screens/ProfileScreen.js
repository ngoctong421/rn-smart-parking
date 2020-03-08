import React from "react";
import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import mainbackground from '../assets/mainbackground.png'
import { Button } from "react-native-paper";

const ProfileScreen = () => {
  return (
    <ImageBackground source={mainbackground} style={styles.backgroundstyle}>
      <View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  backgroundstyle :{
    resizeMode :'cover',
    flex: 1
  }
});

export default ProfileScreen;
