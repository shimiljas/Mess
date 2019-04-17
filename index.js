/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './app/App';
import { name as appName } from './app.json';
import Test from './test';

AppRegistry.registerComponent(appName, () => Test);
