import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Input from '../components/Input';
import MainButton from '../components/MainButton';
const LoginScreen = props => {
    return (
        <View style={styles.screen}>
            <View style={styles.text1Container}>
                <Text style={styles.text1}>{"Enter your details"}</Text>
            </View>
            <View style={styles.text1Container}>
                <Input style={styles.input} placeholder={"Name"} />
            </View>
            <View style={styles.text1Container}>
                <Input style={styles.input} placeholder={"Place"} />
            </View>
            <View style={styles.buttonContainer}>
                <MainButton>{"Next"}</MainButton>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    screen: {
        height: "100%",
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
    text1: {
        fontSize: 26,
    },
    input: {
        width: "95%",
        borderBottomWidth: 3,
        borderBottomColor: "#A7331A",
        fontSize: 18,

    },
    text1Container: {
        alignItems: 'flex-start',
        padding: 20,
        width: "100%",
    },
    buttonContainer: {
        width: "100%",
        marginTop: "10%",
        marginRight: 30,
        alignItems: 'flex-end',
    }
});
export default LoginScreen;