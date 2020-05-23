import React,{useState} from 'react';
import {Text, View, StyleSheet, Keyboard, Alert, Button,TouchableOpacity,TouchableWithoutFeedback} from 'react-native';

import Input1 from '../components/Input1';
import Header from '../components/Header';
import MainButton from '../components/MainButton.android';

const SetAPrice = props => {
    const[enteredValue, setEnteredValue] = useState('');
    const[confirmed, setConfirmed] = useState(false);
    const[selectedAmount, setSelectedAmount] = useState();
    
    const numberInputHandler = inputNumber => {
        setEnteredValue(inputNumber.replace(/[^0-9]/g, ''));
    };

    const resetInputHandler = () => {
       setEnteredValue('');
       setConfirmed(false);
    };

    const confirmPrice = () => {
        const chosenNumber = parseInt(enteredValue);
        if(isNaN(chosenNumber) || chosenNumber<=9999999){(
          Alert.alert('Invalid Amount!', 'Minimum amount should be one crore',
          [{text:'Okay', style:'destructive', onPress:resetInputHandler}])
        );
        return ;
    }
       setSelectedAmount(chosenNumber);
       setConfirmed(true);
       Keyboard.dismiss();
    };
    return (
        <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss();}}>
        <View style={styles.screen}>
          <Header title="Set A Price" />
          <View style={styles.text1Container}>
              <Text style={styles.text1}>PRICE</Text>
          </View>
          <View style={styles.numberInput}>
              <Input1 style={styles.input} 
              placeholder={'Rupees'}
              keyboardType='numeric'
              onChangeText={numberInputHandler}
              value={enteredValue}/>
              <Text style={styles.text2} >Price must have minimum value of 1Cr</Text>
          </View>
          <View style={styles.button}>
          <MainButton style={styles.buttonContainer} onPress={confirmPrice}>{"SAVE"}</MainButton>
          </View>
        </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    screen: {
       flex: 1,
    },
    text1Container:{
        flex:1,
        alignItems:'flex-start',
        justifyContent:'flex-end',
        marginLeft:'10%',
        marginBottom:'2%',
    },
    text1:{
        fontSize:24,
        fontWeight:'bold',
    },
    numberInput:{
      flex:1,
      alignItems:'center',
      justifyContent:'flex-start',
    },
    input:{
        width:'80%',
    },
    buttonContainer:{
        alignItems:'center',
        justifyContent:'flex-start',
    },
    button:{
        flex:1,
        justifyContent:'flex-start',
        marginLeft:'40%',
        marginRight:'10%',
        marginBottom:'30%',
    },
    text2:{
        textAlign:'center',
        opacity:0.4,
        fontSize:18,
    }
});

export default SetAPrice;