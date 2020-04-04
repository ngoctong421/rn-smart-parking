import React , {useState} from "react";
import {
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
    TextInput,
    Image
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import bikes from "../assets/bikes.png";

const AddVehicleScreen = props => {
    const [inputData, setInputData] = useState({
        plateNumber: ""
      });

    const { plateNumber } = inputData;
    const handleOnChange = key => text => {
        setInputData({ ...inputData, [key]: text });
    };

    return(
        <LinearGradient style={{flex: 1}} colors={["#a2ecff", "#ffffff"]}>
            <ScrollView style={{flex :1}} showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <Text style={styles.titlestyle}>ADD VEHICLE</Text>
                    <Text style={styles.subtext}>HELP US MANAGE YOUR VEHICLES BETTER!</Text>
                    <View style={styles.blockcontainer}>
                        <Image source={bikes}/>
                    </View>
                    <Text style={styles.normaltextStyle}>VEHICLE REGISTRATION NUMBER :</Text>
                    <TextInput
                    style={styles.inputstyle}
                    value={plateNumber}
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={handleOnChange("plateNumber")}/>

                    <TouchableOpacity style={styles.buttonstyle}>
                        <Text style={styles.buttontext}>ADD</Text>
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
        marginBottom: 10
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
        paddingBottom: 10
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
        marginHorizontal: 30,
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
    }
});

export default AddVehicleScreen;