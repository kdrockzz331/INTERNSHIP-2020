import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/tick-icon.png')} />
      <Text style={styles.paragraph}>COMPLETED</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    backgroundColor: 'white',
  },

  logo: {
    height: 128,
    width: 128,
  },
  paragraph: {
    marginTop: 20,
    fontSize: 18,
    textAlign: 'center',
  },
});
