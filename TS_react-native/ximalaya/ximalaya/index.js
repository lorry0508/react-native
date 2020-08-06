/**
 * @format
 */

import { AppRegistry } from 'react-native';
import 'react-native-gesture-handler';
import App from './src';
// import App from './App';
import { name as appName } from './app.json';

/* 关闭黄色警告，需要关闭的就加入数组 */
console.ignoredYellowBox = ['source.uri should not be an empty string', 'Non-serializable values were found in the navigation state'];
console.disableYellowBox = true //关闭黄色警告

AppRegistry.registerComponent(appName, () => App);