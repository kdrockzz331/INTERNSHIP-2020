import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const BoxInput = props => {
    return <TextInput
        blurOnSubmit
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="number-pad"
        maxLength={1}
        {...props}
        style={{ ...styles.input}} />;
};

const styles = StyleSheet.create({
    input: {
        fontSize: 22,
        height: 50,
        width: 40,
        borderWidth: 1,
        marginVertical: 10,
        borderColor: "#A7331A",
        borderWidth: 3,
        textAlign: 'center',
    }
});

export default BoxInput;