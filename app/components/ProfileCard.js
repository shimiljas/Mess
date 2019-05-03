import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { fonts } from '../config/styles/Fonts';

export default class ProfileCard extends Component {
  render() {
    return (
      <View style={styles.bg}>
        <View style={{ paddingHorizontal: 10 }}>
          <View
            style={{
              width: '100%',
              height: 60,
              flexDirection: 'row',
              marginTop: 10
            }}
          >
            <View
              style={{
                flex: 0.2,

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
            <View style={{ flex: 0.8, justifyContent: 'center' }}>
              <Text
                style={{ fontFamily: fonts.fontPrimaryBold, color: 'black' }}
              >
                Ajith
              </Text>
              <Text> jp nagar,bangalore</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  bg: {
    flex: 1
  }
});
