import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import ProfileScreen from "../screens/ProfileScreen";
import TicketScreen from "../screens/TicketScreen";
import PaymentScreen from "../screens/PaymentScreen";
import MyInfoScreen from "../screens/MyInfoScreen";
import EditInfoScreen from "../screens/EditInfoScreen";
import ChangePasswordScreen from "../screens/ChangePasswordScreen";

const ProfileStack = createStackNavigator();
const TicketStack = createStackNavigator();
const PaymentStack = createStackNavigator();

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="ProfileScreen" component={ProfileScreen} />
      <ProfileStack.Screen name="MyInfoScreen" component={MyInfoScreen} />
      <ProfileStack.Screen name="EditInfoScreen" component={EditInfoScreen} />
      <ProfileStack.Screen
        name="ChangePasswordScreen"
        component={ChangePasswordScreen}
      />
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
    <Tab.Navigator
      initialRouteName="ProfileTab"
      activeColor="#0090fe"
      barStyle={{ backgroundColor: "#fff" }}
    >
      <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          )
        }}
      />
      <Tab.Screen
        name="TicketTab"
        component={TicketStackScreen}
        options={{
          tabBarLabel: "Ticket",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="ticket" color={color} size={26} />
          )
        }}
      />
      <Tab.Screen
        name="PaymentTab"
        component={PaymentStackScreen}
        options={{
          tabBarLabel: "Payment",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="wallet" color={color} size={26} />
          )
        }}
      />
    </Tab.Navigator>
  );
}
