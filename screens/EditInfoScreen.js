import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity,
  TextInput, ScrollView, Picker} from "react-native";
import {LinearGradient} from 'expo-linear-gradient';

import avatar from '../assets/profileavatar.png';

const EditInfoScreen = props => {
  const [idnumber] = React.useState('17520000');
  const [email] = React.useState('17520000@gm.uit.edu.vn');
  return (
    <LinearGradient style={{flex: 1}}colors={['#A2ECFF', '#ffffff']}>
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Text style={styles.titlestyle}>EDIT PROFILE</Text>

          <Image source={avatar}/>

          <Text style={styles.usernametext}>JennyLinkay</Text>

          <Text style={styles.titleinfotext}>POSITION :</Text>
          <Picker style={styles.inputstyle} mode="dropdown" itemStyle={{paddingLeft: 10}}>
            <Picker.Item label="Teacher" value="teacher"/>
            <Picker.Item label="Student" value="Student"/>
          </Picker>

          <Text style={styles.titleinfotext}>ID NUMBER :</Text>
          <TextInput style={styles.inputstyle}
            onChangeText={text => idnumber(text)}
            value={idnumber}/>

          <Text style={styles.titleinfotext}>EMAIL :</Text>
          <TextInput style={styles.inputstyle}
            onChangeText={text => email(text)}
            value={email}/>

          <TouchableOpacity style={styles.buttonstyle}>
            <Text style={styles.buttontextstyle}>CONFIRM</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container : {
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'center'
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
  usernametext:{
    paddingTop: 10,
    color: '#6B6B6B',
    paddingBottom: 10,
    fontSize : 25,
    fontWeight: 'bold'
  },
  titleinfotext:{
    alignSelf : 'flex-start',
    paddingLeft: 55,
    color: '#6B6B6B',
    fontSize: 15,
    fontWeight : 'bold',
    paddingBottom: 2
  },
  inputstyle:{
    alignSelf: 'stretch',
    shadowColor: '#000',
    shadowRadius: 4,
    paddingHorizontal : 20,
    marginHorizontal: 40,
    shadowOffset: {
      width: 0,
      height: 2
    },
    elevation: 2,
    borderRadius: 20,
    padding: 3,
    marginBottom: 10,
    color: '#6B6B6B',
    backgroundColor : '#ffffff',
    fontSize: 15
  },
  buttonstyle:{
    marginRight: 40,
    backgroundColor: '#FFE888',
    alignSelf :'flex-end',
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius : 20
  },
  buttontextstyle:{
    fontWeight : 'bold',
    fontSize : 20,
    color: '#FFB31D'
  }
});
export default EditInfoScreen;
