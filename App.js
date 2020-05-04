import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import RootStackNavigator from './navigation/RootStackNavigator';
import { navigationRef } from './utils/navigationRef';
import { Provider as AuthProvider } from './context/authContext';

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer ref={navigationRef}>
        <RootStackNavigator></RootStackNavigator>
      </NavigationContainer>
    </AuthProvider>
  );
}
