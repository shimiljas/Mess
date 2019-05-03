import React, { Component } from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  ScrollView,
  Image,
  TextInput
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { fonts } from '../config/styles/Fonts';
export default class JobHeader extends Component {
  render() {
    return (
      <View
        style={{
          width: '100%',
          height: 50,
          flexDirection: 'row',
          backgroundColor: 'rgb(50,205,50)'
        }}
      >
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <Ionicons
            name="ios-arrow-back"
            style={{ color: 'white' }}
            size={22}
          />
        </View>
        <View
          style={{ flex: 9, justifyContent: 'center', alignItems: 'center' }}
        >
          <Text style={styles.heading}> {this.props.title}</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  heading: {
    fontFamily: fonts.fontPrimaryBold,
    fontSize: 16,
    color: 'white'
  }
});
