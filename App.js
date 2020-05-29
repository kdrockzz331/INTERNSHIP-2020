import React from "react";
import { StyleSheet, View } from "react-native";

import EnterDetailsScreen from "./screens/EnterDetailsScreen";
import PasswordScreen from "./screens/PasswordScreen";
import OTPVerificationScreen from "./screens/OTPVerificationScreen";
import PropertyTypeScreen_10_11_12 from "./screens/PropertyTypeScreen_10_11_12";
import SetAPriceScreen from "./screens/SetAPriceScreen";
import PropertyTypeScreen from "./screens/PropertyTypeScreen";

let content = <PropertyTypeScreen_10_11_12 />;
export default function App() {
  return <View style={styles.container}>{content}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //DO NOT CHANGE ANYTHING HERE
  },
});
