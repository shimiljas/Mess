import React, { Component } from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  ScrollView,
  Image,
  TextInput
} from 'react-native';
import { fonts } from '../../../../config/styles/Fonts';

import JobHeader from '../../../../components/JobHeader';
import Entypo from 'react-native-vector-icons/Entypo';
import Review from '../../../../components/Review';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.bg}>
        <JobHeader title={'Restaurant'} />
        <ScrollView style={{ paddingHorizontal: 10 }}>
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
                source={require('../../../../assets/images/Profile.jpg')}
                resizeMethod={'resize'}
                resizeMode={'cover'}
              />
            </View>
            <View style={{ flex: 0.8, justifyContent: 'center' }}>
              <Text
                style={{ fontFamily: fonts.fontPrimaryBold, color: 'black' }}
              >
                kuttanad restaurant
              </Text>
              <Text> jp nagar,bangalore</Text>
            </View>
          </View>
          <Image
            style={{ height: 300, width: '100%', marginVertical: 10 }}
            source={require('../../../../assets/images/imagefive.jpg')}
            resizeMethod={'resize'}
            resizeMode={'cover'}
          />
          <View style={styles.location}>
            <Entypo name={'location-pin'} size={22} />
            <Text style={styles.Text}>
              {' '}
              Annaiyah reddy layout, jp nagar 6th phase, bangalore
            </Text>
          </View>
          <View style={styles.about}>
            <Text
              style={{
                marginBottom: 5,
                fontFamily: fonts.fontPrimaryBold,
                color: 'black'
              }}
            >
              {' '}
              About
            </Text>
            <Text style={styles.Text}>
              {' '}
              This is just a test message written blindly so neglect this. If
              you are a foodie you should try this hotel.
            </Text>
          </View>
          <View
            style={{
              backgroundColor: 'rgb(245,245,245)',
              width: '100%',
              minHeight: 60,
              padding: 10,
              marginTop: 10
            }}
          >
            <Text style={styles.headingText}>Reviews</Text>
            <View style={{ width: '100%', height: 40, flexDirection: 'row' }}>
              <View
                style={{
                  flex: 0.7,

                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingLeft: 10
                }}
              >
                <Text
                  style={{
                    fontFamily: fonts.fontPrimaryRegular,
                    fontSize: 22,
                    color: 'black'
                  }}
                >
                  4.2
                </Text>
                <Text style={{ color: 'red' }}> Put star here</Text>
              </View>
              <View
                style={{
                  flex: 0.3,

                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <View
                  style={{
                    width: 70,
                    height: 30,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'green',
                    borderRadius: 5
                  }}
                >
                  <Text
                    style={{
                      fontFamily: fonts.fontPrimaryRegular,
                      color: 'white'
                    }}
                  >
                    {' '}
                    Rate
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <Review />
          <Review />
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  bg: {
    flex: 1
  },
  location: {
    flexDirection: 'row',
    width: '100%',
    minHeight: 30,
    marginTop: 5
  },
  Text: { fontFamily: fonts.fontPrimaryRegular, color: 'black' },
  about: {
    backgroundColor: 'rgb(245,245,245)',
    width: '100%',
    minHeight: 40,
    padding: 10
  },
  headingText: {
    fontFamily: fonts.fontPrimaryBold,
    color: 'black'
  }
});
