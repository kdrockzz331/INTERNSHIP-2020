import React, { useState } from 'react';
import {
    Text,
    TextInput,
    StyleSheet,
    View,
    KeyboardAvoidingView,
    SafeAreaView,
    TouchableOpacity,
    Alert,
    Image,
} from 'react-native';
import Input from '../components/Input';
import MainButton from '../components/MainButton';
import validator from 'validator'
const LoginSignUpScreen = props => {
    const [pas, setPas] = useState({ password: '', confirmpassword: '' });
    const [nem, setNem] = useState('');
    const [cone, setCone] = useState(false);
    const passwo = (val) => {
        setPas((v) => { return { password: val, confirmpassword: v.confirmpassword } });
    }
    const nEM = (enteredText) => {
        setNem(enteredText);
    }
    const mobilevalidate = (number) => {
        const isValidPhoneNumber = validator.isMobilePhone(number)
        return (isValidPhoneNumber)
    }
    return (
        <View style={styles.screen}>
            <Image source={require('../assets/back.jpeg')} style={styles.img} />
            <KeyboardAvoidingView style={styles.screen1}>
                <View style={styles.text1Container}>
                    <Input style={styles.input1} placeholder={"Phone/Email"} onChangeText={nEM} value={nem} />
                </View>
                <View style={styles.content}>
                    <TextInput
                        placeholder='Password'
                        style={{
                            width: "90%",
                            fontSize: 18,
                        }}
                        secureTextEntry={!cone}
                        onChangeText={passwo}
                        value={pas.password}
                    />
                    <TouchableOpacity onPress={() => { cone ? setCone(false) : setCone(true) }}>
                        <Image
                            source={cone ? require('../assets/interface.png') : require('../assets/diagonal.png')}
                            style={styles.img1}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.innerText}>
                    <TouchableOpacity onPress={() => {
                        console.log(nem);
                        if (mobilevalidate(nem)) {
                            props.navigation.navigate({ routeName: 'OTPScreen' });
                        }
                        else {
                            Alert.alert(
                                "Invalid Phone-Numer",
                                "The Phone Number is either invalid or empty!!!",
                                [{
                                    text: "Cancel",
                                    onPress: () => { setNem("") }
                                }],
                                { cancelable: false }
                            );
                        }
                    }}><Text>{"Login using phone"}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonContainer}>
                    <MainButton>{"Login"}</MainButton>
                    <MainButton onPress={() => {
                        props.navigation.navigate({ routeName: 'EnterDScreen' });
                    }}>{"Sign Up"}</MainButton>
                </View>
            </KeyboardAvoidingView>
        </View>
    )
};
const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    screen1: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginVertical: "2%"
    },
    input1: {
        width: "98%",
        borderBottomWidth: 3,
        borderBottomColor: "#A7331A",
        fontSize: 18,

    },
    innerText: {
        width: "100%",
        marginLeft: "100%"
    },
    text1Container: {
        alignItems: 'flex-start',
        padding: 20,
        width: "100%",
    },
    content: {
        width: '85%',
        borderBottomWidth: 3,
        borderBottomColor: "#A7331A",
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'space-between'
    },
    buttonContainer: {
        flexDirection: 'row',
        width: "100%",
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    img: {
        width: "100%",
        height: "50%",
    },

    img1: {
        width: 20,
        height: 20,
        right: 0,
        marginRight: 10,
        //zIndex:3,
        // position:'absolute'
    },
});
export default LoginSignUpScreen;