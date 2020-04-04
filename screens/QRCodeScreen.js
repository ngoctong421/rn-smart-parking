import React from 'react';
import {
    Text, 
    Image,
    View,
    StyleSheet,
    ScrollView,
    Dimensions
} from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

import qrcodebar from "../assets/qrcodebar.png"
import qrcodeimg from "../assets/yourqrcode.png"
import hereqr from "../assets/hereqr.png"

const box_width = Dimensions.get("window").width / 2;
const QRCodeScreen = props => {
    return(
        <LinearGradient style={{flex :1}} colors={["#FFEEA4", "#ffffff"]}>
            <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
                <Image style={ {alignSelf : "flex-end"}} source={qrcodebar}/>
                <View style={styles.container}>
                    <Text style={styles.titlestyle}>QR CODE</Text>
                    <Text style={styles.subtext}>YOUR OWN OR CODE!HOW COOL IS THIS!</Text>
                    <Image source={qrcodeimg} style={{marginBottom: 10}}/>
                    <Text style={styles.note}>Scan this on the device before you enter the parking lot.</Text>
                    <Image source={hereqr}/>
                </View>
            </ScrollView>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 40
      },
    titlestyle: {
        fontSize: 26,
        fontWeight: "bold",
        color: "#FF8F8F",
        textAlign: "center",
        marginBottom: 10
      },
    subtext: {
        color: "#FF8F8F",
        fontWeight: "bold",
        fontSize: 14,
        marginBottom: 10,
      },
    note:{
        fontSize: 14,
        width: box_width,
        textAlign : "center",
        paddingBottom : 10
    }
});

export default QRCodeScreen;


