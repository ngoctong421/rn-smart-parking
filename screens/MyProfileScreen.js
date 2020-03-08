import React from "react";
import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import mainbackground from '../assets/mainbackground.png'
import profileframe from '../assets/profileavatar.png'
const MyProfileScreen = () => {
    return (
        <ImageBackground source={mainbackground} style={styles.backgroundstyle}>
            <View>

            </View>
        </ImageBackground>
    );
};

const  styles = StyleSheet.create({
    backgroundstyle :{
        resizeMode :'cover',
        flex: 1
    }
});
export default MyProfileScreen;