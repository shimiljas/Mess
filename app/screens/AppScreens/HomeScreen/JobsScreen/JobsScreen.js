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
import EachJob from '../../../../components/EachJob';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.bg}>
        <View style={styles.searchBg}>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Ionicons
              name="ios-arrow-back"
              style={{ color: 'white' }}
              size={22}
            />
          </View>
          <View style={{ flex: 7 }}>
            <Search />
          </View>
          <View
            style={{
              flex: 1,

              alignItems: 'center'
            }}
          >
            <AntDesign name="bars" style={{ color: 'white' }} size={24} />
          </View>
        </View>
        <ScrollView
          style={{
            width: '100%',
            paddingHorizontal: 10,
            backgroundColor: 'rgb(230,230,230)'
          }}
        >
          <EachJob />
          <EachJob />
          <EachJob />
          <EachJob />
          <EachJob />
          <EachJob />
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  bg: {
    flex: 1
  },
  searchBg: {
    width: '100%',
    height: 70,
    flexDirection: 'row',
    backgroundColor: 'green',
    alignItems: 'center',
    paddingRight: 10
  }
});
