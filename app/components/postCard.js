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
import FollowCard from './FollowCard';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

export default class PostCard extends Component {
  render() {
    return (
      <View style={styles.outerBox}>
        <FollowCard />
        <View
          style={{
            width: '100%',
            maxHeight: 60,
            marginVertical: 5,
            paddingHorizontal: 10
          }}
        >
          <Text style={{ color: 'black' }}>Nila Cafe</Text>
          <Text> This is the best juice you can drink from any shop</Text>
        </View>
        <Image
          resizeMethod={'resize'}
          resizeMode={'stretch'}
          style={{ width: '100%', maxHeight: 300, marginTop: 10 }}
          source={require('../assets/images/imagethree.jpg')}
        />
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            height: 60,
            backgroundColor: 'white',
            alignItems: 'center'
          }}
        >
          <EvilIcons name={'heart'} size={36} style={{ paddingLeft: 20 }} />
          <EvilIcons name={'comment'} size={36} style={{ paddingLeft: 20 }} />
          <EvilIcons
            name={'share-google'}
            size={36}
            style={{ paddingLeft: 20 }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  outerBox: {
    margin: 10,
    paddingHorizontal: 10,
    flex: 1,
    maxHeight: 480,
    backgroundColor: 'white'
  }
});
