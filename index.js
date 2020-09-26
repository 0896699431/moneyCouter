/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import DrawerNavigation from './src/navigators/DrawerNavigation';

AppRegistry.registerComponent(appName, () => DrawerNavigation);
