import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  Image,
  StyleSheet,
  TextInput
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
export default class Search extends Component {
  render() {
    return (
      <View style={styles.outerBox}>
        <View
          style={{
            flex: 0.1,
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <FontAwesome
            name="search"
            style={{ color: 'rgb(50,205,50)' }}
            size={22}
          />
        </View>
        <View
          style={{ flex: 0.9, alignItems: 'center', justifyContent: 'center' }}
        >
          <TextInput style={{ width: '100%', height: 50 }} />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  outerBox: {
    width: '100%',
    height: 50,
    backgroundColor: 'white',

    borderRadius: 10,
    flexDirection: 'row'
  }
});
