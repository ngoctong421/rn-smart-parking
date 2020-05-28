import React , {useState} from "react";
import {
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
    TextInput,
    Image,
    Picker
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import bikes from "../assets/bikes.png";
import credit from "../assets/credit-card.png";

const AddMoneysourceScreen = props => {
    const [inputData, setInputData] = useState({
        cardNumber: "",
        bankName: "",
        issueDate: ""
    });
    
    const { cardNumber, bankName, issueDate } = inputData;
    
    const handleOnChange = key => text => {
        setInputData({ ...inputData, [key]: text });
    };
    
    const [selectedValue, setSelectedValue] = useState("");
    return(
        <LinearGradient style={{flex: 1}} colors={["#a2ecff", "#ffffff"]}>
            <ScrollView style={{flex :1}} showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <Text style={styles.titlestyle}>MONEY SOURCE</Text>
                    <Image source={credit}/>
                    <Text style={styles.normaltextStyle}>Card Number :</Text>
                    <TextInput
                    style={styles.inputstyle}
                    value={cardNumber}
                    autoCapitalize="none"
                    keyboardType={"number-pad"}
                    autoCorrect={false}
                    onChangeText={handleOnChange("cardNumber")}/>

                    <Text style={styles.normaltextStyle}>Bank :</Text>
                    <View style={styles.pickerstyle}>
                        <Picker
                        mode="dialog"
                        selectedValue={selectedValue}
                        onValueChange={itemValue => setSelectedValue(itemValue)}
                        >
                        <Picker.Item label="Vietcombank" value="Vietcombank" color="#0090fe" />
                        <Picker.Item label="VPbank" value="VPbank" color="#0090fe" />
                        </Picker>
                    </View>
                    <Text style={styles.normaltextStyle}>Issue date : </Text>
                    <TextInput
                    style={styles.inputstyle}
                    value={issueDate}
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={handleOnChange("issueDate")}/>

                    <TouchableOpacity style={styles.buttonstyle} 
                        onPress={() => {
                        props.navigation.navigate("ActivedPayment");
                    }}>
                        <Text style={styles.buttontext}>ADD MONEY SOURCE</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:"center",
        paddingTop: 60,
        paddingBottom: 40
    },
    titlestyle: {
        fontSize: 26,
        fontWeight: "bold",
        color: "#FFFFFF",
        textAlign: "center",
        marginBottom: 10, 
        paddingTop :10
    },
    subtext: {
        color: "#0090FE",
        fontWeight: "bold",
        fontSize: 14,
        marginBottom: 15,
    },
    blockcontainer:{
        alignSelf:"stretch",
        borderRadius: 16,
        backgroundColor: "#ffffff",
        alignItems: "center",
        marginHorizontal : 30,
        paddingVertical : 20,
        marginBottom : 10,
        shadowColor: "#000000",
        shadowRadius: 5,
        shadowOpacity: 0.3
    },
    normaltextStyle:{
        color: "#0090FE",
        fontWeight: "bold",
        fontSize: 20,
        paddingBottom: 10,
        marginLeft: 50,
        alignSelf : "flex-start",
    },
    inputstyle:{
        alignSelf: "stretch",
        shadowColor: "#000",
        shadowRadius: 4,
        paddingHorizontal: 20,
        marginHorizontal: 40,
        shadowOffset: {
          width: 0,
          height: 2
        },
        elevation: 2,
        borderRadius: 20,
        paddingVertical: 10,
        marginBottom: 12,
        color: "#6b6b6b",
        backgroundColor: "#ffffff",
        fontSize: 20
    },
    buttonstyle: {
        backgroundColor: "#ffe888",
        borderRadius: 16,
        alignSelf: "stretch",
        marginHorizontal: 35,
        shadowColor: "#000000",
        shadowRadius: 5,
        shadowOpacity: 0.3
    },
    buttontext: {
        color: "#ffb31d",
        paddingVertical: 12,
        textAlign: "center",
        fontSize: 18,
        fontWeight: "bold",
        paddingHorizontal : 20
    },
    pickerstyle: {
        backgroundColor: "#fff",
        borderRadius: 16,
        paddingLeft: 10,
        shadowColor: "#000",
        shadowRadius: 4,
        shadowOffset: {
          width: 0,
          height: 2
        },
        alignSelf: "stretch",
        elevation: 2,
        marginBottom: 10,
        marginHorizontal : 40,
      }
});

export default AddMoneysourceScreen;