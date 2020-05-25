import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import AssetExample from './components/AssetExample';

import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <Card>
        <AssetExample />
      </Card>
      <Text style={styles.paragraph}>
                       You can view it in the listings...
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:20,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'white',
    padding: 0,
  },
  
  paragraph: {
    margin: 24,
    fontSize: 18,
    textAlign :"center",   
  },
});
