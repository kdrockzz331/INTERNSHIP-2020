import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LoginSignUpScreen from '../screens/LoginSignUpScreen';
import OTPVerificationScreen from '../screens/OTPVerificationScreen';
import EnterDetailsScreen from '../screens/EnterDetailsScreen';
const AppNavigator = createStackNavigator({
    LoginScreen: LoginSignUpScreen,
    EnterDScreen: EnterDetailsScreen,
    OTPScreen: OTPVerificationScreen,
});
export default createAppContainer(AppNavigator);