import React, { Component } from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  ScrollView,
  Image
} from 'react-native';
import { fonts } from '../../../../config/styles/Fonts';

import JobHeader from '../../../../components/JobHeader';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.bg}>
        <JobHeader title={'Hello'} />
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
              <Text style={styles.Text}>Company name</Text>
              <Text> Location</Text>
            </View>
          </View>
          <Text style={styles.DescribeText}> Job Title: SOftware Engineer</Text>
          <Text style={styles.DescribeText}>
            {' '}
            minimum required Experience: 2 years
          </Text>

          <Text style={styles.DescribeText}>
            {' '}
            Qualification: Mtech,Btech,Bsc
          </Text>
          <Text style={styles.DescribeText}> Salary : 35000 to 50000</Text>
          <Text style={styles.DescribeText}> Employement Type: Full Time</Text>

          <View
            style={{
              minHeight: 80,
              width: '100%',
              padding: 10,
              backgroundColor: 'rgb(245,245,245)',
              marginTop: 20
            }}
          >
            <Text>
              {' '}
              This is just a test to know if it really works This is just a test
              to know if it really works This is just a test to know if it
              really works This is just a test to know if it really works This
              is just a test to know if it really works
            </Text>
          </View>

          <View style={styles.submitBg}>
            <View style={styles.submit}>
              <Text style={styles.submitText}> Upload Resume</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  bg: {
    flex: 1
  },
  Text: {
    fontFamily: fonts.fontPrimaryRegular,
    color: 'black'
  },
  DescribeText: { marginTop: 20, fontFamily: fonts.fontPrimaryRegular },
  submitBg: {
    width: '100%',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  submit: {
    height: 50,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(50,205,50)',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'green'
  },
  submitText: {
    fontFamily: fonts.fontPrimaryBold,

    color: 'white'
  }
});
