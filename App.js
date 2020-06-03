import React from 'react';
import { StyleSheet, View } from 'react-native';

import EnterDetailsScreen from './screens/EnterDetailsScreen';
import PasswordScreen from './screens/PasswordScreen';
import OTPVerificationScreen from './screens/OTPVerificationScreen';
import SetAPriceScreen from './screens/SetAPriceScreen';
import PropertyTypeScreen from './screens/PropertyTypeScreen';
import LoginSignUpScreen from './screens/LoginSignUpScreen';
import AppNavigator from './AppNavigator/AppNavigator';
//let content = <LoginSignUpScreen/>;
export default function App() {
  return (
    <AppNavigator/>
    //<View style={styles.container}>
    //  {content}
    //</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,//DO NOT CHANGE ANYTHING HERE
  },
});
