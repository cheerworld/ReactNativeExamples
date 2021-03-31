import React, { Component } from "react";
import { StyleSheet, Text, View, AppRegistry } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

const Hello = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>Hello!</Text>
  </View>
);

const Goodbye = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>Goodbye!</Text>
  </View>
);

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Byebye"
        tabBarOptions={{
          activeTintColor: "tomato",
        }}
      >
        <Tab.Screen
          name="Hello"
          component={Hello}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Byebye"
          component={Goodbye}
          options={{
            tabBarLabel: "Setting",
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="dashboard" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MyTabs;
