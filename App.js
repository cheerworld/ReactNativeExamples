import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  AppRegistry,
  TouchableOpacity,
  Animated,
} from "react-native";

export default class App extends React.Component {
  state = {
    opacity: new Animated.Value(0),
    width: new Animated.Value(0),
    height: new Animated.Value(0),
  };

  componentDidMount() {
    const { opacity, width, height } = this.state;
    Animated.timing(opacity, { toValue: 1, duration: 1000 }).start();
    Animated.spring(width, { toValue: 300, speed: 5 }).start();
    Animated.spring(height, { toValue: 300, speed: 5 }).start();
  }
  render() {
    const { opacity, width, height } = this.state;
    return (
      <View style={styles.container}>
        <Animated.Image
          style={[styles.img, { opacity, height, width }]}
          source={{
            uri:
              "https://pbs.twimg.com/profile_images/452111932548726784/EOKCqhMK_400x400.jpeg",
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: 200,
    height: 200,
  },
});
