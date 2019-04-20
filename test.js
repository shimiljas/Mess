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
      />
    );
  }
}

export default Test;
