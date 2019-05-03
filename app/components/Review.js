import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { fonts } from '../config/styles/Fonts';
export default class Review extends Component {
  render() {
    return (
      <View style={styles.outerBox}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            height: 30,
            justifyContent: 'space-between'
          }}
        >
          <Text
            style={{
              fontFamily: fonts.fontPrimaryRegular,
              color: 'black',
              fontSize: 18
            }}
          >
            {' '}
            Ajith
          </Text>
          <Text> X X X X X</Text>
        </View>
        <View style={{ width: '100%', minHeight: 20 }}>
          <Text style={styles.Text}>
            {' '}
            this is just a demo text.This is a demo test. there is nothing like
            this and this is ajust test.Yes it is a test{' '}
          </Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  outerBox: {
    width: '100%',
    minHeight: 50,
    backgroundColor: 'white',
    borderBottomColor: 'green',
    borderBottomWidth: 1,
    padding: 10
  },
  Text: { fontFamily: fonts.fontPrimaryRegular, color: 'black' }
});
