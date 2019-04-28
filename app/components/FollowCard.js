import React, { Component } from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  ScrollView,
  Image
} from 'react-native';
import { scale, verticalScale, moderateScale } from '../utilities/Responsive';

export default class FollowCard extends Component {
  render() {
    return (
      <View style={styles.outerBox}>
        <View
          style={{ flex: 0.2, alignItems: 'center', justifyContent: 'center' }}
        >
          <View
            style={{
              width: 50,
              height: 50,
              borderRadius: 100,
              backgroundColor: 'red',
              overflow: 'hidden',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Image
              resizeMethod={'resize'}
              resizeMode={'contain'}
              borderRadius={100}
              source={require('../assets/images/Profile.jpg')}
              style={styles.roundImage}
            />
          </View>
        </View>
        <View
          style={{
            flex: 0.5,

            justifyContent: 'center'
          }}
        >
          <Text style={{ color: 'black' }}> Johny Depp</Text>
          <Text> Posted in Food</Text>
        </View>
        <View
          style={{ flex: 0.3, alignItems: 'center', justifyContent: 'center' }}
        >
          <View>
            <View
              style={{
                width: 80,
                height: 30,
                backgroundColor: 'rgb(50,205,50)',
                borderRadius: 40,
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Text style={{ color: 'white' }}> Follow</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  outerBox: {
    width: '100%',
    height: 60,
    backgroundColor: 'white',
    flexDirection: 'row'
  },
  roundImage: {
    flex: 1,

    borderRadius: scale(100)
  }
});
