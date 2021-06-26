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

import { Context as UserContext } from '../context/userContext';
import { useContext } from 'react';

const VehiclesScreen = (props) => {
  const { userId } = props.route.params

  const { user } = useContext(UserContext)

  return (
    <LinearGradient style={{ flex: 1 }} colors={['#a2ecff', '#ffffff']}>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Text style={styles.titlestyle}>VEHICLES</Text>
          <Text style={styles.subtext}>MANAGING YOUR VEHICLES</Text>
          <View style={styles.blockcontainer}>
            <Image source={bikes} />
            <Text style={styles.platetextstyle}>{user.plate}</Text>
          </View>
          <TouchableOpacity
            style={styles.buttonstyle}
            onPress={() => {
              props.navigation.navigate('ChangeVehicle', { userId });
            }}
          >
            <Text style={styles.buttontext}>CHANGE</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 600
  },
  titlestyle: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtext: {
    color: '#0090FE',
    fontWeight: 'bold',
    fontSize: 13,
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
    height: 150,
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
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 20,
  },
});

export default VehiclesScreen;
