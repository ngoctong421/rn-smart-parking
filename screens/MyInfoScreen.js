import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import {LinearGradient} from 'expo-linear-gradient';

import avatar from '../assets/profileavatar.png';
const MyInfoScreen = () => {
  return (
      <LinearGradient style={{flex: 1}}colors={['#A2ECFF', '#ffffff']}>
        <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <Text style={styles.titlestyle}>MY INFORMATION</Text>
            <Image source={avatar}/>
            <Text style={styles.usernametext}>JennyLinkay</Text>
              <LinearGradient style={styles.infoboxstyle} colors={['#A2ECFF', '#ffffff']}
                start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
              <Text style={styles.infoitemtextstyle}>POSITION :</Text>
              <Text style={styles.infotext}>STUDENT</Text>
              </LinearGradient>

              <LinearGradient style={styles.infoboxstyle} colors={['#A2ECFF', '#ffffff']}
                start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
              <Text style={styles.infoitemtextstyle}>ID NUMBER :</Text>
              <Text style={styles.infotext}>17520000</Text>
              </LinearGradient>

              <LinearGradient style={styles.infoboxstyle} colors={['#A2ECFF', '#ffffff']}
                start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
              <Text style={styles.infoitemtextstyle}>PASSWORD :</Text>
              <Text style={styles.infotext}>********</Text>
              </LinearGradient>

              <Text style={{color:'#0090FE', alignSelf: 'flex-end',
                paddingRight : 40, fontWeight: 'bold', fontSize: 15,
                paddingBottom : 5}}>Change password</Text>

              <LinearGradient style={styles.infoboxstyle} colors={['#A2ECFF', '#ffffff']}
                start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
              <Text style={styles.infoitemtextstyle}>EMAIL :</Text>
              <Text style={styles.infotext}>17520000@gm.uit.edu.vn</Text>
              </LinearGradient>

              <View style={styles.buttonstyle}>
                <Text style={styles.buttontextstyle}>EDIT</Text>
              </View>
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
    color: '#0090FE',
    paddingBottom: 10,
    fontSize : 25,
    fontWeight: 'bold'
  },
  infoboxstyle:{
    alignSelf: 'stretch',
    shadowColor: '#000',
    shadowRadius: 4,
    paddingHorizontal : 10,
    marginHorizontal: 35,
    shadowOffset: {
      width: 0,
      height: 2
    },
    elevation: 2,
    borderRadius: 20,
    padding: 3,
    marginBottom: 10
  },
  infoitemtextstyle:{
    paddingTop: 5,
    color: '#0090FE',
    fontSize : 15,
    paddingLeft : 10,
    fontWeight : 'bold'
  },
  infotext:{
    color: '#0090FE',
    fontSize : 20,
    fontWeight : 'bold',
    textAlign: 'center',
    paddingBottom: 10
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
export default MyInfoScreen;
