import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import RootStackNavigator from './navigation/RootStackNavigator';
import { navigationRef } from './utils/navigationRef';
import { Provider as AuthProvider } from './context/authContext';
import { Provider as UserProvider } from './context/userContext';
import { SafeAreaView } from 'react-native';

export default function App() {
  return (
    <AuthProvider>
      <UserProvider>
        <NavigationContainer ref={navigationRef}>
            <RootStackNavigator></RootStackNavigator>
        </NavigationContainer>
      </UserProvider>
    </AuthProvider>
  );
}
