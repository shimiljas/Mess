import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity
} from 'react-native';
const window = Dimensions.get('window');
import { fonts } from '../config/styles/Fonts';
import ProfileCard from './ProfileCard';

import Ionicons from 'react-native-vector-icons/Ionicons';
export default class HelpCard extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.bg}>
        <View style={{ flex: 0.6, bakcgroundColor: 'yellow', padding: 10 }}>
          <View style={{ alignItems: 'flex-end', paddingRight: 10 }}>
            <Ionicons
              name={'ios-notifications'}
              size={24}
              style={{ color: 'green' }}
            />
          </View>
          <Text
            style={{
              fontFamily: fonts.fontPrimaryRegular,
              color: 'black',
              fontSize: 22
            }}
          >
            {' '}
            Is there anybody who knows karate?
          </Text>
        </View>
        <View style={{ flex: 0.4, padding: 10 }}>
          <ProfileCard />
          <TouchableOpacity
            style={{
              width: '100%',
              height: 40,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'green'
            }}
          >
            <Text style={{ color: 'white', fontFamily: fonts.fontPrimaryBold }}>
              {' '}
              Answer
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  bg: {
    marginTop: 20,
    width: '100%',
    height: window.height / 2,
    backgroundColor: 'white',
    zIndex: 1,
    borderRadius: 5
  },
  text: {
    fontFamily: fonts.fontPrimaryRegular,

    color: 'black'
  }
});
