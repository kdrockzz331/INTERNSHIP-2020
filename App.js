import React from 'react';
import { StyleSheet, View } from 'react-native';
import EnterDetailsScreen from './screens/EnterDetailsScreen';
import PasswordScreen from './screens/PasswordScreen';
import OTPVerificationScreen from './screens/OTPVerificationScreen';
let content = <OTPVerificationScreen phonenumber={"+919999999999"}/>;
export default function App() {
  return (
    <View style={styles.container}>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,//DO NOT CHANGE ANYTHING HERE
  },
});
