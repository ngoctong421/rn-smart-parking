import React from "react";
import { View, Text, Image, StyleSheet, TouchableHighlight } from "react-native";
import vp from "../assets/vp.png"

const BankItem = ({item}) =>{
    return (
        <TouchableHighlight>
             <View style={styles.boxstyle}>
                <View style={{alignItems: "center", padding : 10}}>
                    <Image source={vp}/>
                </View>
                <Text style={styles.numbertext}>{item.cardnumber}</Text>
            </View>
        </TouchableHighlight>
    );
};
const styles = StyleSheet.create({
    numbertext : {
        color: "#0090FE",
        fontWeight :"bold",
        paddingHorizontal: 60,
        fontSize: 18
    },
    boxstyle : {
        flexDirection : "row",
        borderRadius: 16,
        backgroundColor: "#ffffff",
        alignItems: "center",
        marginVertical : 5,
        paddingVertical : 10,
        paddingHorizontal : 20,
        shadowColor: "#000000",
        shadowRadius: 5,
        shadowOpacity: 0.3,
    }
});

export default BankItem;