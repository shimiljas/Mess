import React from 'react';
import { Image, Text, View, Platform, StyleSheet } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createDrawerNavigator,
  createMaterialTopTabNavigator,
  createAppContainer
} from 'react-navigation';
import { connect } from 'react-redux';

import AccountScreen from '../../screens/AppScreens/AccountScreen/AccountScreen';
import MessageScreen from '../../screens/AppScreens/MessageScreen/MessageScreen';
import HomeScreen from '../../screens/AppScreens/HomeScreen/HomeScreen';
import Notification from '../../screens/AppScreens/Notification/Notification';
import DrawerScreen from '../../screens/DrawerSceens/DrawerScreen';
import AddPage from '../../screens/AppScreens/AddPage/AddPage';

import RestaurantDetailScreen from '../../screens/AppScreens/HomeScreen/FoodScreen/RestaurantDetailScreen';
import JobDetailScreen from '../../screens/AppScreens/HomeScreen/JobsScreen/JobDetailScreen';
import EventScreen from '../../screens/AppScreens/HomeScreen/EventScreen/EventScreen';
import HelpScreen from '../../screens/AppScreens/HomeScreen/HelpScreen/HelpScreen';

function getTabBar(text) {
  return {
    tabBarLabel: () => (
      <React.Fragment>
        <Text style={styles.tabbarlabel}>{text}</Text>
      </React.Fragment>
    )
  };
}

const TabNavigatorConfig = {
  tabBarOptions: {
    activeTintColor: 'green',
    inactiveTintColor: 'black',
    upperCaseLabel: false,

    labelStyle: {
      fontSize: 16
    },
    tabStyle: {
      backgroundColor: 'green',
      height: Platform.OS === 'ios' ? 60 : 70
    },
    style: {
      backgroundColor: '#15a5ed'
    },
    indicatorStyle: {
      backgroundColor: 'transparent'
    }
  },
  lazy: true,
  tabBarLabel: 'dsfsdfsdf',
  animationEnabled: true
};

const HomeBotttomTabStack = createBottomTabNavigator(
  {
    Home: {
      title: 'Home',
      headerTitle: 'Home',
      screen: HomeScreen,

      navigationOptions: ({ screenProps, navigation }) => ({
        tabBarIcon: ({ focused }) => {
          return (
            <Image
              source={require('../../assets/icons/home.png')}
              style={{ width: 25, height: 25 }}
            />
          );
        }
      })
    },
    Message: {
      title: 'Message',
      headerTitle: 'Message',
      screen: MessageScreen,
      navigationOptions: ({ screenProps, navigation }) => ({
        tabBarIcon: ({ focused }) => {
          return (
            <Image
              source={require('../../assets/icons/message.png')}
              style={{ width: 30, height: 25 }}
            />
          );
        }
      })
    },
    AddPage: {
      title: 'AddPage',
      headerTitle: 'AddPage',
      screen: AddPage,
      navigationOptions: ({ screenProps, navigation }) => ({
        tabBarIcon: ({ focused }) => {
          return (
            <Image
              source={require('../../assets/icons/menu.png')}
              style={{ width: 50, height: 50, marginTop: 5 }}
            />
          );
        }
      })
    },
    Notification: {
      title: 'Notification',
      headerTitle: 'Notification',
      screen: Notification,
      navigationOptions: ({ screenProps, navigation }) => ({
        tabBarIcon: ({ focused }) => {
          return (
            <Image
              source={require('../../assets/icons/notification.png')}
              style={{ width: 22, height: 25 }}
            />
          );
        }
      })
    },

    AccountScreen: {
      title: 'AccountScreen',
      headerTitle: 'AccountScreen',
      screen: AccountScreen,

      navigationOptions: ({ screenProps, navigation }) => ({
        tabBarIcon: ({ focused }) => {
          return (
            <Image
              source={require('../../assets/icons/account.png')}
              style={{ width: 19, height: 25 }}
            />
          );
        }
      })
    }
  },
  {
    tabBarOptions: {
      showLabel: false
    },
    // eslint-disable-next-line no-unused-vars
    navigationOptions: ({ navigation }) => {
      // const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        header: null
      };
    }
  }
);

const HomeStackNavigation = createStackNavigator(
  {
    HomeStack: HomeBotttomTabStack,
    JobDetailScreen: {
      screen: JobDetailScreen,
      navigationOptions: {
        header: null
      }
    },
    RestaurantDetailScreen: {
      screen: RestaurantDetailScreen,
      navigationOptions: {
        header: null
      }
    },
    EventScreen: {
      screen: EventScreen,
      navigationOptions: {
        header: null
      }
    },
    HelpScreen: {
      screen: HelpScreen,
      navigationOptions: {
        header: null
      }
    }
  },

  {
    // initialRouteName: 'ProfileScreen',
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

const HomeStack = createDrawerNavigator(
  {
    Home: {
      screen: HomeStackNavigation
    },
    LogOut: {
      screen: HomeStackNavigation
    }
  },
  { contentComponent: DrawerScreen, drawerPosition: 'right' }
);

export default HomeStack;
