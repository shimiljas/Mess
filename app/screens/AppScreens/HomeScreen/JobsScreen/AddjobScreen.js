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
import Search from '../../../../components/Search';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { fonts } from '../../../../config/styles/Fonts';
import JobHeader from '../../../../components/JobHeader';
export default class AddjobScreen extends Component {
  render() {
    return (
      <View style={styles.bg}>
        <JobHeader title={'Add job'} />
        <ScrollView style={{ paddingHorizontal: 10 }}>
          <Text style={styles.text}>Company Name</Text>
          <TextInput style={styles.input} />

          <Text style={styles.text}>Job Title</Text>
          <TextInput style={styles.input} />

          <View>
            <View style={styles.doubleBox}>
              <View style={styles.leftBox}>
                <Text style={styles.doubleText}> Industry</Text>
                <TextInput style={styles.input} />
              </View>
              <View style={styles.rightBox}>
                <Text style={styles.doubleText}> Employement Type</Text>
                <TextInput style={styles.input} />
              </View>
            </View>
          </View>
          <View>
            <View style={styles.doubleBox}>
              <View style={styles.leftBox}>
                <Text style={styles.doubleText}> Salary from</Text>
                <TextInput style={styles.input} />
              </View>
              <View style={styles.rightBox}>
                <Text style={styles.doubleText}>salary to</Text>
                <TextInput style={styles.input} />
              </View>
            </View>
          </View>
          <Text style={styles.text}>Tags</Text>
          <TextInput style={styles.input} />

          <Text style={styles.text}>Qualification</Text>
          <TextInput style={styles.input} />

          <Text style={styles.text}>Location</Text>
          <TextInput style={styles.input} />
          <Text style={styles.text}>Description</Text>
          <TextInput
            multiline={true}
            textAlignVertical={'top'}
            style={styles.Description}
          />
          <View style={styles.submitBg}>
            <View style={styles.submit}>
              <Text style={styles.submitText}> SUBMIT</Text>
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

  text: {
    marginTop: 10,
    fontFamily: fonts.fontPrimaryRegular,

    color: 'black'
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: 'rgb(245,245,245)',
    paddingLeft: 10,
    marginTop: 5,
    borderRadius: 5
  },
  Description: {
    width: '100%',
    minHeight: 90,
    backgroundColor: 'rgb(245,245,245)',
    paddingLeft: 10,
    marginTop: 5,
    borderRadius: 5
  },
  doubleBox: {
    width: '100%',
    height: 65,
    flexDirection: 'row',
    marginTop: 5
  },
  leftBox: {
    flex: 1,
    paddingRight: 10,
    justifyContent: 'space-between'
  },
  rightBox: {
    flex: 1,
    justifyContent: 'space-between',
    paddingLeft: 10
  },
  doubleText: {
    fontFamily: fonts.fontPrimaryRegular,
    color: 'black'
  },
  submitBg: {
    width: '100%',
    height: 80,
    alignItems: 'center',
    justifyContent: 'center'
  },
  submit: {
    height: 50,
    width: 110,
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
