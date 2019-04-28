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

import CalendarScreen from '../../screens/AppScreens/CalendarScreen/CalendarScreen';
import FoodListScreen from '../../screens/AppScreens/FoodListScreen/FoodListScreen';
import PlanScreen from '../../screens/AppScreens/PlanScreen/PlanScreen';
import Restaurant from '../../screens/AppScreens/Restaurant/Restaurant';
import DrawerScreen from '../../screens/DrawerSceens/DrawerScreen';

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
    Plan: {
      title: 'Plan',
      headerTitle: 'Plan',
      screen: PlanScreen,

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
    Food: {
      title: 'Food',
      headerTitle: 'Food',
      screen: FoodListScreen,
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
    Restaurant: {
      title: 'Restaurant',
      headerTitle: 'Restaurant',
      screen: Restaurant,
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

    Calendar: {
      title: 'Calendar',
      headerTitle: 'Calendar',
      screen: CalendarScreen,

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
    HomeStack: HomeBotttomTabStack
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
