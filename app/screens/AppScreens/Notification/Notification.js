import React, { Component } from 'react';
import { View, Text, FlatList, ActivityIndicator, Image } from 'react-native';

import { TextInput } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { fonts } from '../../../config/styles/Fonts';

class Notification extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      page: 1,
      seed: 1,
      error: null,
      refreshing: false
    };
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    const { page, seed } = this.state;
    const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;
    this.setState({ loading: true });

    fetch(url)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        this.setState({
          data: page === 1 ? res.results : [...this.state.data, ...res.results],
          error: res.error || null,
          loading: false,
          refreshing: false
        });
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  };

  handleRefresh = () => {
    this.setState(
      {
        page: 1,
        seed: this.state.seed + 1,
        refreshing: true
      },
      () => {
        this.makeRemoteRequest();
      }
    );
  };

  handleLoadMore = () => {
    this.setState(
      {
        page: this.state.page + 1
      },
      () => {
        this.makeRemoteRequest();
      }
    );
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '86%',
          backgroundColor: 'rgb(50,205,50)',
          marginLeft: '14%'
        }}
      />
    );
  };

  renderHeader = () => {
    return (
      <View
        style={{
          width: '100%',
          height: 70,
          justifyContent: 'center',

          borderBottomWidth: 1,
          borderBottomColor: 'rgb(50,205,50)'
        }}
      >
        <Text
          style={{
            fontFamily: fonts.fontPrimaryRegular,
            fontSize: 18,
            color: 'black'
          }}
        >
          {' '}
          Notification
        </Text>
      </View>
    );
  };

  renderFooter = () => {
    if (!this.state.loading) return null;

    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: '#CED0CE'
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    );
  };

  render() {
    return (
      <View
        style={{ flex: 1, paddingHorizontal: 10, backgroundColor: 'white' }}
      >
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <View
              style={{
                width: '100%',
                height: 70,
                flexDirection: 'row',
                marginTop: 10
              }}
            >
              <Image
                source={{ uri: item.picture.thumbnail }}
                style={{ width: 45, height: 45, borderRadius: 25 }}
              />
              <View style={{ paddingLeft: 10 }}>
                <Text
                  style={{
                    fontFamily: fonts.fontPrimaryRegular,
                    fontSize: 16,
                    color: 'black'
                  }}
                >{`${item.name.first} ${item.name.last}`}</Text>
                <Text>{item.email}</Text>
              </View>
            </View>
          )}
          keyExtractor={item => item.email}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
          ListFooterComponent={this.renderFooter}
          onRefresh={this.handleRefresh}
          refreshing={this.state.refreshing}
          onEndReached={this.handleLoadMore}
          onEndReachedThreshold={50}
        />
      </View>
    );
  }
}

export default Notification;
