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

const Home = ({ navigation }) => (
  <View>
    <Text>This is the Home view</Text>
    <TouchableOpacity onPress={() => navigation.navigate("Dashboard")}>
      <Text>Press here for the Dashboard</Text>
    </TouchableOpacity>
  </View>
);

const Dashboard = () => (
  <View>
    <Text>This is the Dashboard</Text>
  </View>
);

const Stack = createStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Homie" }}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            title: "Dashboard",
            headerTintColor: "red",
            headerStyle: {
              backgroundColor: "green",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyStack;
