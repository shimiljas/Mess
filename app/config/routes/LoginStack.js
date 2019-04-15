import { createStackNavigator, createAppContainer } from 'react-navigation';
import { connect } from 'react-redux';
import LoginScreen from '../../screens/AuthScreens/LoginScreen/LoginScreen';
import SignupScreen from '../../screens/AuthScreens/SignupScreen/SignupScreen';
import OTPScreen from '../../screens/AuthScreens/OTPScreen/OTPScreen';
import ForgotPassword from '../../screens/AuthScreens/ForgotPassword/ForgotPassword';

const option = { header: null };

const LoginStack = createStackNavigator(
  {
    LoginScreen: { screen: LoginScreen, navigationOptions: option }
  },
  {
    initialRouteName: 'LoginScreen',
    swipeEnabled: false,
    animationEnabled: false,
    lazy: true,
    transitionConfig: () => ({
      transitionSpec: {
        duration: 0
      }
    })
  }
);

export default LoginStack;
