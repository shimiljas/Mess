import React, { Component } from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity
} from 'react-native';
import {
  scale,
  verticalScale,
  moderateScale
} from '../../../utilities/Responsive';
import PostCard from '../../../components/postCard';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'rgb(245,245,245)' }}>
        <ScrollView>
          <View style={styles.topBar}>
            <Text style={styles.topText}> Hey, Mallu</Text>
          </View>
          <View style={styles.catHead}>
            <View style={styles.i} />
            <View style={styles.head}>
              <Text style={styles.headText}> Explore</Text>
            </View>
          </View>
          <View style={styles.categories}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('JobDetailScreen')}
              style={styles.categoryBox}
            >
              <View style={styles.iconBox}>
                <Image
                  style={{ width: 40, height: 60 }}
                  source={require('../../../assets/icons/jobs.png')}
                />
              </View>
              <View style={styles.catTextBox}>
                <Text style={styles.catText}> Jobs</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.categoryBox}>
              <View style={styles.iconBox}>
                <Image
                  style={{ width: 70, height: 35 }}
                  source={require('../../../assets/icons/bed.png')}
                />
              </View>
              <View style={styles.catTextBox}>
                <Text style={styles.catText}> Rooms</Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('RestaurantDetailScreen')
              }
              style={styles.categoryBox}
            >
              <View style={styles.iconBox}>
                <Image
                  style={{ width: 50, height: 50 }}
                  resizeMethod={'resize'}
                  resizeMode={'contain'}
                  source={require('../../../assets/icons/dish.png')}
                />
              </View>
              <View style={styles.catTextBox}>
                <Text style={styles.catText}> Food</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.categories}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('EventScreen')}
              style={styles.categoryBox}
            >
              <View style={styles.iconBox}>
                <Image
                  style={{ width: 47, height: 50 }}
                  source={require('../../../assets/icons/events.png')}
                />
              </View>
              <View style={styles.catTextBox}>
                <Text style={styles.catText}> Events</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.categoryBox}>
              <View style={styles.iconBox}>
                <Image
                  style={{ width: 50, height: 54 }}
                  source={require('../../../assets/icons/group.png')}
                />
              </View>
              <View style={styles.catTextBox}>
                <Text style={styles.catText}> Group</Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('HelpScreen')}
              style={styles.categoryBox}
            >
              <View style={styles.iconBox}>
                <Image
                  style={{ width: 70, height: 35 }}
                  source={require('../../../assets/icons/bed.png')}
                />
              </View>
              <View style={styles.catTextBox}>
                <Text style={styles.catText}> Help</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.catHead}>
            <View style={styles.i} />
            <View style={styles.head}>
              <Text style={styles.headText}> Feeds</Text>
            </View>
          </View>

          <PostCard />
          <PostCard />
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  topBar: {
    width: '100%',
    height: verticalScale(200),
    backgroundColor: '	rgb(0,100,0)',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: 'flex-end',
    paddingBottom: 30,
    padding: 10
  },
  topText: { color: 'white', fontSize: 26 },
  catHead: {
    marginTop: verticalScale(20),
    width: '100%',
    height: verticalScale(40),
    flexDirection: 'row'
  },
  i: {
    width: scale(5),
    height: verticalScale(40),
    backgroundColor: 'rgb(34,139,34)'
  },
  head: {
    paddingLeft: scale(10),
    justifyContent: 'center'
  },
  headText: { color: 'black', fontSize: 22 },
  categories: {
    width: '100%',
    height: verticalScale(110),

    marginTop: verticalScale(5),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },

  categoryBox: {
    width: scale(90),
    height: verticalScale(100),
    backgroundColor: 'white',
    borderRadius: 5
  },
  iconBox: { flex: 3.5, alignItems: 'center', justifyContent: 'center' },
  catTextBox: { flex: 1.5, justifyContent: 'flex-start', alignItems: 'center' },
  catText: {
    color: 'black'
  }
});
