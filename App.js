import React, { Component } from "react";
import { StyleSheet, Text, View, AppRegistry } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

const Hello = () => (
  <View style={{ paddingTop: 50 }}>
    <Text>Hello!</Text>
  </View>
);

const Goodbye = () => (
  <View style={{ paddingTop: 50 }}>
    <Text>Goodbye!</Text>
  </View>
);

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === "Hello") {
              iconName = "home";
            } else if (route.name === "Byebye") {
              iconName = "dashboard";
            }
            return <FontAwesome name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="Hello" component={Hello} />
        <Tab.Screen name="Byebye" component={Goodbye} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MyTabs;
