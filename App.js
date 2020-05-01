import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

import RootStackNavigator from './navigation/RootStackNavigator';
import { Provider as AuthProvider } from './context/authContext';

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <RootStackNavigator></RootStackNavigator>
      </NavigationContainer>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
