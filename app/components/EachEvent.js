import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import { fonts } from '../config/styles/Fonts';
export default class EachEvent extends Component {
  render() {
    return (
      <View style={styles.bg}>
        <Image
          resizeMethod={'resize'}
          resizeMode={'stretch'}
          style={{ width: '100%', maxHeight: 300, borderRadius: 5 }}
          source={require('../assets/images/Events.jpg')}
        />
        <View
          style={{
            width: '100%',
            height: 90,
            flexDirection: 'row'
          }}
        >
          <View
            style={{
              flex: 0.3,
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Text style={styles.text}> May</Text>
            <Text style={{ color: 'red' }}> 5</Text>
            <Text style={styles.text}> Sun</Text>
          </View>
          <View style={{ flex: 0.7, justifyContent: 'center' }}>
            <Text style={{ fontFamily: fonts.fontPrimaryBold, color: 'black' }}>
              {' '}
              Malayalis fest
            </Text>
            <Text style={styles.text}> Hsr bangalore</Text>
            <Text style={styles.text}> 250 onwards</Text>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  bg: {
    marginTop: 20,
    width: '100%',
    height: 390,
    backgroundColor: 'white',
    zIndex: 1,
    borderRadius: 5
  },
  text: {
    fontFamily: fonts.fontPrimaryRegular,

    color: 'black'
  }
});
