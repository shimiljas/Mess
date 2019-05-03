import React, { Component } from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  ScrollView,
  Image
} from 'react-native';
import Search from '../../../../components/Search';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EachEvent from '../../../../components/EachEvent';
export default class EventScreen extends Component {
  render() {
    return (
      <View style={styles.bg}>
        <View style={styles.searchBg}>
          <View style={styles.iconBox}>
            <Ionicons
              name="ios-arrow-back"
              style={{ color: 'white' }}
              size={22}
            />
          </View>
          <View style={{ flex: 9 }}>
            <Search />
          </View>
        </View>
        <ScrollView style={{ padding: 10 }}>
          <EachEvent />
          <EachEvent />
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  bg: {
    flex: 1,
    backgroundColor: 'rgb(230,230,230)'
  },
  searchBg: {
    width: '100%',
    height: 70,
    flexDirection: 'row',
    backgroundColor: 'green',
    alignItems: 'center',
    paddingRight: 10
  },
  iconBox: { flex: 1, justifyContent: 'center', alignItems: 'center' }
});
