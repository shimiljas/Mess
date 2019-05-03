import React, { Component } from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  ScrollView,
  Image
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { fonts } from '../config/styles/Fonts';

export default class EachRestaurant extends Component {
  render() {
    return (
      <View style={styles.bg}>
        <View style={styles.firstOuter}>
          <View
            style={{ flex: 0.7, justifyContent: 'center', paddingLeft: 10 }}
          >
            <Text style={styles.text}> Kuttanad Restaurant</Text>
          </View>
          <View
            style={{
              flex: 0.3,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Text
              style={{
                fontFamily: fonts.fontPrimaryRegular,
                fontSize: 16,
                color: 'black'
              }}
            >
              9 km{' '}
            </Text>
            <Ionicons
              name="ios-navigate"
              size={30}
              style={{ color: 'green' }}
            />
          </View>
        </View>
        <Image
          resizeMethod={'resize'}
          resizeMode={'stretch'}
          style={{ width: '100%', maxHeight: 300, marginTop: 10 }}
          source={require('../assets/images/imagethree.jpg')}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  bg: {
    marginTop: 5,
    width: '100%',
    maxHeight: 370,
    backgroundColor: 'white',
    zIndex: 1,
    borderRadius: 5,
    alignItems: 'center'
  },
  firstOuter: {
    width: '100%',
    height: 50,
    flexDirection: 'row'
  }
});
