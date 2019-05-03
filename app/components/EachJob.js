import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  ScrollView
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { fonts } from '../config/styles/Fonts';
export default class EachJob extends Component {
  render() {
    return (
      <View style={styles.bg}>
        <View style={{ flex: 1, justifyContent: 'center', paddingLeft: 10 }}>
          <Text
            style={{
              fontFamily: fonts.fontPrimaryBold,
              fontSize: 16,
              color: 'black'
            }}
          >
            {' '}
            React native developer
          </Text>
        </View>
        <View style={{ flex: 2, flexDirection: 'row' }}>
          <View
            style={{
              flex: 1.5,

              padding: 5,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Image
              style={{ height: 50, width: 50 }}
              source={require('../assets/images/Profile.jpg')}
              resizeMethod={'resize'}
              resizeMode={'cover'}
            />
          </View>
          <View style={{ flex: 3.5, justifyContent: 'space-evenly' }}>
            <Text
              style={{
                fontFamily: fonts.fontPrimaryRegular,

                color: 'black'
              }}
            >
              {' '}
              Softwave.in
            </Text>
            <Text style={{ fontFamily: fonts.fontPrimaryRegular }}>
              {' '}
              j.p nagar,bangalore
            </Text>
          </View>
        </View>
        <View style={{ flex: 1, paddingLeft: 10, justifyContent: 'center' }}>
          <Text style={{ fontFamily: fonts.fontPrimaryRegular }}>
            {' '}
            Salary : 35000 to 45000 monthly
          </Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  bg: {
    marginTop: 10,
    width: '80%',
    height: 120,
    backgroundColor: 'white',
    zIndex: 1,
    borderRadius: 5
  },
  text: {
    fontFamily: fonts.fontPrimaryRegular,

    color: 'black'
  }
});
