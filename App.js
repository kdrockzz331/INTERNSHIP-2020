import React from 'react';
import { StyleSheet, View } from 'react-native';
import EnterDetailsScreen from './screens/EnterDetailsScreen';
import Password from './screens/Password';
let content = <Password/>;
export default function App() {
  return (
    <View style={styles.container}>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%'
  },
});
