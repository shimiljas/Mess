import axios from 'axios';
import Connection from './Connection';

const axiosApi = axios.create({
  baseURL: Connection.getBaseUrl(),
  Accept: 'application/json'
});

export const setAuthHeader = async userToken => {
  axiosApi.defaults.headers.common.Authorization = `Bearer ${userToken}`;
};

export default axiosApi;
