import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

import ProfileScreen from '../screens/ProfileScreen';
import TicketScreen from '../screens/TicketScreen';
import PaymentScreen from '../screens/PaymentScreen';
import MyInfoScreen from '../screens/MyInfoScreen';
import EditInfoScreen from '../screens/EditInfoScreen';
import ChangePasswordScreen from '../screens/ChangePasswordScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import SignUpScreen from '../screens/SignUpScreen';
import LoginScreen from '../screens/LoginScreen';
import ForgetPasswordScreen from '../screens/ForgetPasswordScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';
import QRCodeScreen from '../screens/QRCodeScreen';
import QRTicketScreen from '../screens/QRTicketScreen';
import VehiclesScreen from '../screens/VehiclesScreen';
import ChangeVehicleScreen from '../screens/ChangeVehicleScreen';
import AddMoneySourceScreen from '../screens/AddMoneysourceScreen';
import ActivedPaymentScreen from '../screens/ActivedPaymentScreen';
import ChooseTopUp from '../screens/ChooseTopUp';
import TopUpScreen from '../screens/TopUpScreen';
import WithdDrawScreen from '../screens/WithdrawScreen';
import ChooseWithDraw from '../screens/ChooseWithDraw';

const Tab = createMaterialBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Profile"
      activeColor="#0090fe"
      shifting={true}
      barStyle={{ backgroundColor: '#fff' }}
    >
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Ticket"
        component={TicketScreen}
        options={{
          tabBarLabel: 'Ticket',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="ticket" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Payment"
        component={ActivedPaymentScreen}
        options={{
          tabBarLabel: 'Payment',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="wallet" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

export default function RootStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerTitle: null,
        headerTintColor: '#fff',
        headerTransparent: true,
      }}
    >
      <Stack.Screen name="Tab" component={BottomTabNavigator} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Ticket" component={TicketScreen} />
      <Stack.Screen name="Payment" component={PaymentScreen} />
      <Stack.Screen name="MyInfo" component={MyInfoScreen} />
      <Stack.Screen name="EditInfo" component={EditInfoScreen} />
      <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} />
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="ForgetPassword" component={ForgetPasswordScreen} />
      <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
      <Stack.Screen name="QRInden" component={QRCodeScreen} />
      <Stack.Screen name="QRTicket" component={QRTicketScreen} />
      <Stack.Screen name="Vehicle" component={VehiclesScreen} />
      <Stack.Screen name="ChangeVehicle" component={ChangeVehicleScreen} />
      <Stack.Screen name="AddMoney" component={AddMoneySourceScreen} />
      <Stack.Screen name="ActivedPayment" component={ActivedPaymentScreen} />
      <Stack.Screen name="ChooseTopUp" component={ChooseTopUp} />
      <Stack.Screen name="ChooseWithDraw" component={ChooseWithDraw} />
      <Stack.Screen name="TopUp" component={TopUpScreen} />
      <Stack.Screen name="WithDraw" component={WithdDrawScreen} />
    </Stack.Navigator>
  );
}
