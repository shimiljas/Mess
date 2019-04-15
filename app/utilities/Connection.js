const staging = '18.220.76.163:3000';

const runningUrl = staging;
const httpUrl = `http://${runningUrl}`;

const socketUrl = `ws://${runningUrl}/websocket`;
const apiBaseUrl = `http://${runningUrl}/rest/v1/`;
const staticPagesUrl = `http://${runningUrl}/`;

export default class Connection {
  static getResturl() {
    return apiBaseUrl;
  }

  static getSocketResturl() {
    return socketUrl;
  }

  static getBaseUrl() {
    return httpUrl;
  }

  static getStaticPage(url) {
    return staticPagesUrl + url;
  }
}
