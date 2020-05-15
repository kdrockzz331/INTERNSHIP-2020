import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import BoxInput from '../components/BoxInput';
const OTPVerificationScreen = props => {
    const [OTP1, setOTP1] = useState(-1);
    const [OTP2, setOTP2] = useState(-1);
    const [OTP3, setOTP3] = useState(-1);
    const [OTP4, setOTP4] = useState(-1);
    let OTP = "XXXX";
    if (OTP1 !== -1 && OTP2 !== -1 && OTP3 !== -1 && OTP4 !== -1) {
        OTP = OTP1+""+OTP2+""+OTP3+""+OTP4;
        if(OTP.length === 4){
            //navigate/code from here
        }
    }
    return (
        <View style={styles.screen}>
            <View style={styles.textContainer1}>
                <View><Text style={styles.text1}>Enter the code recieved</Text></View>
            </View>
            <View style={styles.textContainer2}>
                <View><Text style={styles.text2}>{"We sent a 4-digit code to " + props.phonenumber}</Text></View>
            </View>
            <View style={styles.textInputContainer1}>
                <BoxInput
                    onChangeText={(inputText) => { setOTP1(inputText.replace(/[^0-9]/g, '')) }}
                />
                <BoxInput
                    onChangeText={(inputText) => { setOTP2(inputText.replace(/[^0-9]/g, '')) }}
                />
                <BoxInput
                    onChangeText={(inputText) => { setOTP3(inputText.replace(/[^0-9]/g, '')) }}
                />
                <BoxInput
                    onChangeText={(inputText) => { setOTP4(inputText.replace(/[^0-9]/g, '')) }}
                />
            </View>
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
    }
});
export default OTPVerificationScreen;