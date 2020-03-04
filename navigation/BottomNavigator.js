import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import ProfileScreen from "../screens/ProfileScreen";
import TicketScreen from "../screens/TicketScreen";
import PaymentScreen from "../screens/PaymentScreen";

const ProfileStack = createStackNavigator();
const TicketStack = createStackNavigator();
const PaymentStack = createStackNavigator();

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="ProfileScreen" component={ProfileScreen} />
    </ProfileStack.Navigator>
  );
}

function TicketStackScreen() {
  return (
    <TicketStack.Navigator>
      <TicketStack.Screen name="TicketScreen" component={TicketScreen} />
    </TicketStack.Navigator>
  );
}

function PaymentStackScreen() {
  return (
    <PaymentStack.Navigator>
      <PaymentStack.Screen name="PaymentScreen" component={PaymentScreen} />
    </PaymentStack.Navigator>
  );
}

const Tab = createMaterialBottomTabNavigator();

export default function BottomNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Profile" component={ProfileStackScreen} />
      <Tab.Screen name="Ticket" component={TicketStackScreen} />
      <Tab.Screen name="Payment" component={PaymentStackScreen} />
    </Tab.Navigator>
  );
}
