/* eslint-disable */
import { NetInfo, AsyncStorage } from 'react-native';
import Connection from './Connection';
import axiosApi from './Base';
import { setAuthHeader } from './Base';
import toast from '../components/MessToast/MessToast';
import NavigationService from '../config/routes/NavigationService';
import axios from 'axios';

class RestClient {
  static post(url, body) {
    if (body.token) {
      setAuthHeader(body.token);
    }
    return new Promise(function(resolve, reject) {
      axiosApi
        .post(url, body)
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          console.log(error, 'SDfsdf');
          const isLoggedOut = error.message.toString().indexOf('40') !== -1;
          if (isLoggedOut) makeLoggedOut();
          reject({
            message: error,
            error,
            status: 400
          });
        });
    });
  }

  static get(url, params) {
    if (params.token) {
      setAuthHeader(params.token);
    }
    console.log(url, '-------------------<>');
    return new Promise(function(resolve, reject) {
      axiosApi
        .get(url)
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          console.warn(error);
          const isLoggedOut = error.message.toString().indexOf('4') !== -1;
          if (isLoggedOut) makeLoggedOut();
          reject({
            message: error,
            error,
            status: 400
          });
        });
    });
  }
  static put(url, body) {
    if (body.token) {
      setAuthHeader(body.token);
    }
    return new Promise(function(resolve, reject) {
      axiosApi
        .put(url, body)
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          console.log(error, 'SDfsdf');
          const isLoggedOut = error.message.toString().indexOf('4') !== -1;
          if (isLoggedOut) makeLoggedOut();
          reject({
            message: error,
            error,
            status: 400
          });
        });
    });
  }
  static postMultipart(url, body, token) {
    console.log(url, body, token, 'url, body, token');
    axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
    if (token) {
      setAuthHeader(token);
    }
    return new Promise(function(resolve, reject) {
      axiosApi
        .put(url, body)
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          console.log(error, 'SDfsdf');
          const isLoggedOut = error.message.toString().indexOf('4') !== -1;
          if (isLoggedOut) makeLoggedOut();
          reject({
            message: error,
            error,
            status: 400
          });
        });
    });
  }
}

function makeLoggedOut() {
  AsyncStorage.clear(() => {
    toast({
      text: 'session has been expired',
      type: 'danger'
    });
    NavigationService.navigate('LoginStack');
  });
}

export default RestClient;
