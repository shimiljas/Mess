import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import HelpCard from '../../../../components/HelpCard';

export default class HelpScreen extends Component {
  render() {
    return (
      <View style={styles.bg}>
        <ScrollView style={{ paddingHorizontal: 10 }}>
          <HelpCard />
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  bg: {
    flex: 1,
    backgroundColor: 'grey'
  }
});
