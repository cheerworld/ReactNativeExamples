import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  AppRegistry,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Home = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <Text>This is the Home view</Text>
    <TouchableOpacity onPress={() => navigation.openDrawer()}>
      <Text>Open Drawer</Text>
    </TouchableOpacity>
  </View>
);

const Dashboard = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <Text>This is the Dashboard</Text>
    <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
      <Text>Toggle Drawer</Text>
    </TouchableOpacity>
  </View>
);

const Drawer = createDrawerNavigator();

function MyStack() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            drawerLabel: "HOMEIE",
            drawerIcon: () => <FontAwesome name="home" size={20} color="red" />,
          }}
        />
        <Drawer.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            drawerLabel: "DASHBOARDIE",
            drawerIcon: () => (
              <FontAwesome name="dashboard" size={20} color="red" />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default MyStack;
