import React, { Component } from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { PersistGate } from 'redux-persist/integration/react';
import { ActivityIndicator, AsyncStorage, View, Image } from 'react-native';
import HomeStack from './config/routes/HomeStack';
import LoginStack from './config/routes/LoginStack';

const RootStack = createSwitchNavigator(
  {
    AuthScreen: {
      screen: LoginStack,
      navigationOptions: { header: null }
    },
    HomeStack: {
      screen: HomeStack,
      navigationOptions: { header: null }
    }
  },
  {
    // headerMode: 'none',
    initialRouteName: 'AuthScreen'
  }
);
const RootStackAppContainer = createAppContainer(RootStack);

class App extends Component {
  render() {
    return <RootStackAppContainer />;
  }
}
export default App;
