/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
export {default as HomeScreen} from './components/screens/home/HomeScreen';
export {default as MoviesScreen} from './components/screens/movies/MoviesScreen';