/* eslint-disable react/prefer-stateless-function */
/* eslint no-use-before-define: 0 */ // --> OFF
/* eslint-disable */
import React from 'react';
import { View, TextInput } from 'react-native';
import { GooglePlacesAutocomplete } from './app/components/react-native-google-places-autocomplete';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import Qs from 'qs';
class Test extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,

          justifyContent: 'center'
        }}
      >
        <MapView
          // remove if not using Google Maps
          style={{ flex: 1 }}
          onPress={mkr => console.warn(mkr.nativeEvent.coordinate)}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121
          }}
        >
          <GooglePlacesAutocomplete
            placeholder="Search"
            minLength={2}
            autoFocus={true}
            returnKeyType={'search'}
            listViewDisplayed={false}
            fetchDetails={true}
            onPress={(data, details = null) => {
              console.log(details.geometry.location);
              // 'details' is provided when fetchDetails = true
            }}
            query={{
              key: 'AIzaSyA5m8U4SYKBhV4IldQs409Jv28L3avWYtM',
              language: 'en'
            }}
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={200}
            styles={{
              textInputContainer: {
                backgroundColor: 'rgba(0,0,0,0)',
                borderTopWidth: 0,
                borderBottomWidth: 0
              },
              textInput: {
                marginLeft: 10,
                marginRight: 10,

                height: 60,
                backgroundColor: 'white',
                color: '#5d5d5d',
                fontSize: 16
              },
              predefinedPlacesDescription: {
                color: '#1faadb'
              }
            }}
          />
        </MapView>
        <View
          style={{
            width: '100%',
            height: 120,
            position: 'absolute',
            backgroundColor: 'red',
            bottom: 0
          }}
        />
      </View>
    );
  }
}

export default Test;
