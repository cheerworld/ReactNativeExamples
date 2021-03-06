import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  AppRegistry,
  TouchableOpacity,
  Animated,
  Image
} from "react-native";
import * as ImagePicker from 'expo-image-picker';
import ImageEditor from "@react-native-community/image-editor";

export default class App extends React.Component {
  state = {
    image: null,
  }

  pickImage = async () => {
    try {
      const picker = await ImagePicker.launchImageLibraryAsync({
        allowEditing: true,
        aspect: [2,1]
      });
      console.log(picker);
      if (!picker.cancelled) {

        this.setState(() => ({ image: picker.uri}))
      }
    } catch (error) {
      console.error(error)
    }

  }

  render() {
    const { image } = this.state;
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.pickImage}>
          <Text>Open Camera Roll</Text>
        </TouchableOpacity>
        {image && (
          <Image style={styles.img} source={{uri: image}} />
        )}
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
    width: 150,
    height: 150,
    resizeMode: "contain",
    backgroundColor: "black",
  },
});
