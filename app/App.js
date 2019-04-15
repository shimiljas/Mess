/* eslint-disable no-return-assign */
import React, { Component } from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { PersistGate } from 'redux-persist/integration/react';
import { Root } from 'native-base';
import { Provider } from 'react-redux';
import NotificationPopup from 'react-native-push-notification-popup';
import { ActivityIndicator, View } from 'react-native';
import HomeStack from './config/routes/HomeStack';
import LoginStack from './config/routes/LoginStack';

import NavigationService from './config/routes/NavigationService';
import configureStore from './config/store/configureStore';

export const store = configureStore({});

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
    initialRouteName: 'HomeStack'
  }
);
const RootStackAppContainer = createAppContainer(RootStack);

class App extends Component {
  render() {
    console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];
    console.disableYellowBox = true;
    return (
      <Provider store={store.store}>
        <PersistGate
          loading={<ActivityIndicator color="green" />}
          persistor={store.persistor}
        >
          <Root>
            <View style={{ flex: 1 }}>
              <NotificationPopup ref={ref => (this.popup = ref)} />
              <RootStackAppContainer
                ref={navigatorRef => {
                  NavigationService.setTopLevelNavigator(navigatorRef);
                }}
              />
            </View>
          </Root>
        </PersistGate>
      </Provider>
    );
  }
}
export default App;
