import React from 'react';
import { StyleSheet, View } from 'react-native';

import EnterDetailsScreen from './screens/EnterDetailsScreen';
import PasswordScreen from './screens/PasswordScreen';
import OTPVerificationScreen from './screens/OTPVerificationScreen';
import SetAPriceScreen from './screens/SetAPriceScreen';
import PropertyTypeScreen from './screens/PropertyTypeScreen';

let content = <SetAPriceScreen/>;
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
