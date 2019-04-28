import React, { Component } from 'react';
import { View, Text } from 'react-native';
export default class MessageScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'red', paddingHorizontal: 10 }}>
        <View style={{ width: '100%', height: 50, backgroundColor: 'grey' }} />
      </View>
    );
  }
}
