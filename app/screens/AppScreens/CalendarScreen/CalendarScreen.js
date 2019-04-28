import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image
} from 'react-native';
const { width, height } = Dimensions.get('window');
import {
  scale,
  verticalScale,
  moderateScale
} from '../../../utilities/Responsive';

export default class CalendarScreen extends React.Component {
  render() {
    return (
      <View style={styles.Container}>
        <ScrollView>
          <View style={styles.blackBox}>
            <View style={styles.innerBlack}>
              <View
                style={{
                  width: scale(80),
                  height: verticalScale(80),
                  borderRadius: 100,
                  backgroundColor: 'black'
                }}
              />
              <Text style={styles.white}> Ajith k v</Text>
            </View>
          </View>
          <View style={styles.secondBox}>
            <TouchableOpacity style={styles.myBag}>
              <Text style={styles.black}> Followers</Text>
              <Text> 24</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.WisList}>
              <Text style={styles.black}> Following</Text>
              <Text> 23 </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: { flex: 1, backgroundColor: 'rgb(230,230,230)' },
  blackBox: {
    width: window.width,
    height: verticalScale(150),
    flexDirection: 'row',
    backgroundColor: 'green',
    marginTop: scale(0)
  },
  innerBlack: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  roundImage: {
    width: scale(70),
    height: verticalScale(70),
    borderRadius: 100
  },
  white: { color: 'white' },
  secondBox: {
    marginTop: verticalScale(10),
    marginHorizontal: scale(10),
    backgroundColor: 'white',
    borderRadius: scale(10),
    flexDirection: 'row'
  },
  myBag: {
    flex: 1,
    paddingTop: verticalScale(10),
    paddingBottom: verticalScale(10),
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  WisList: {
    flex: 1,
    paddingTop: verticalScale(10),
    paddingBottom: verticalScale(10),
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  black: { color: 'black' }
});
