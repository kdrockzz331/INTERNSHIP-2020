import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import BoxInput from '../components/BoxInput';
import OtpInputs from "react-native-otp-inputs";
const OTPVerificationScreen = props => {
    return (
        <View style={styles.screen}>
            <View style={styles.textContainer1}>
                <View><Text style={styles.text1}>Enter the code recieved</Text></View>
            </View>
            <View style={styles.textContainer2}>
                <View><Text style={styles.text2}>{"We sent a 4-digit code to " + props.phonenumber}</Text></View>
            </View>
            <OtpInputs
                style={styles.textInputContainer1}
                placeholder={"-"}
                inputStyles={styles.otpinput}
                handleChange={
                    code => {
                        console.log(code)
                        //navigate from here
                    }
                }
                numberOfInputs={4}
            />
            <View style={styles.textContainer3}>
                <TouchableOpacity onPress={() => { }}>
                    <View><Text style={styles.text3}>RESEND CODE BY SMS</Text></View>
                </TouchableOpacity>
            </View>
            <View style={styles.textContainer3}>
                <TouchableOpacity onPress={() => { }}>
                    <View><Text style={styles.text3}>RESEND CODE BY CALL</Text></View>
                </TouchableOpacity>
            </View>

        </View>
    );
};
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
    },
    textContainer1: {
        width: "100%",
        marginLeft: "10%"
    },
    text1: {
        fontSize: 24,
    },
    textContainer2: {
        width: "100%",
        marginHorizontal: "10%",
        marginVertical: "7%",
    },
    textContainer3: {
        width: "100%",
        marginHorizontal: "10%",
        marginVertical: "1%",
    },
    text2: {
        color: 'gray',
        fontSize: 15,
    },
    textInputContainer1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: "20%",
        marginVertical: "5%"
    },
    otpinput: {
        fontSize: 22,
        height: 50,
        width: 40,
        borderWidth: 1,
        borderColor: "#A7331A",
        borderWidth: 3,
        textAlign: 'center',
    }
});
export default OTPVerificationScreen;