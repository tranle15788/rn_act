/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from "react";
import { View } from "react-native";
import { Image } from "native-base";
import { NativeGesture } from "react-native-gesture-handler/lib/typescript/handlers/gestures/nativeGesture";
const logo = require("../../assets/images/logo.png");

class SplashScreen extends React.Component {
  constructor(props) {
    super(props);
    setTimeout(() => {
      this.props.navigation.push("login");
    }, 1000);
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "red",
        }}
      >
        <Image source={logo} size={100} resizeMode="contain" alt="logo" />
      </View>
    );
  }
}
export default SplashScreen;
