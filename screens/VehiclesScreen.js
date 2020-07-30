import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import bikes from '../assets/bikes.png';
const VehiclesScreen = (props) => {
  return (
    <LinearGradient style={{ flex: 1 }} colors={['#a2ecff', '#ffffff']}>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Text style={styles.titlestyle}>VEHICLES</Text>
          <Text style={styles.subtext}>MANAGING ALL OF YOUR VEHICLES</Text>
          <View style={styles.blockcontainer}>
            <Image source={bikes} />
            <Text style={styles.platetextstyle}>29-Z1 208.74</Text>
          </View>
          <View style={styles.blockcontainer}>
            <Image source={bikes} />
            <Text style={styles.platetextstyle}>21-Z2 225.99</Text>
          </View>
          <TouchableOpacity
            style={styles.buttonstyle}
            onPress={() => {
              props.navigation.navigate('AddVehicle');
            }}
          >
            <Text style={styles.buttontext}>ADD MORE</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 40,
  },
  titlestyle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtext: {
    color: '#0090FE',
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 15,
  },
  blockcontainer: {
    alignSelf: 'stretch',
    borderRadius: 16,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginHorizontal: 30,
    marginBottom: 10,
    padding: 20,
    shadowColor: '#000000',
    shadowRadius: 5,
    shadowOpacity: 0.3,
  },
  platetextstyle: {
    color: '#0090FE',
    fontWeight: 'bold',
    fontSize: 20,
  },
  buttonstyle: {
    backgroundColor: '#ffe888',
    borderRadius: 16,
    alignSelf: 'stretch',
    marginHorizontal: 30,
    shadowColor: '#000000',
    shadowRadius: 5,
    shadowOpacity: 0.3,
  },
  buttontext: {
    color: '#ffb31d',
    paddingVertical: 12,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 20,
  },
});

export default VehiclesScreen;
