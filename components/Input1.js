import React from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';

const Input = props => {
      return  <TextInput {...props} style={{...styles.input, ...props.style}} />
};

const styles=StyleSheet.create({
    input:{
        borderBottomColor:'#B71C1C',
        borderBottomWidth:2,
        marginVertical:10,
    },

});

export default Input;