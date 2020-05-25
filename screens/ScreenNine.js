import React from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import MainButton from '../components/MainButton'

export default function ScreenNine() {
  return(
    <View style={styles.container}>
      <MainButton style={styles.button}>{"Sell"}</MainButton>
      <MainButton style={styles.button}>{"Rent/Lease"}</MainButton>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        width:'90%',
        justifyContent:'center',
        alignItems:"center"
    },
    button:{
      marginVertical:20
    }

});
