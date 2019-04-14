import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { createStackNavigator, createAppContainer, createDrawerNavigator, createBottomTabNavigator } from 'react-navigation';
// import {ScreenA} from './Screen1';
// import {ScreenB} from './Screen2';
import { NumsPage } from './NumsPage';
import { ArrayScreen } from './ArrayScreen';


export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const RootStack = createStackNavigator({
  NumsPage: NumsPage,
  ArrayScreen: ArrayScreen,
}, {
    headerMode: 'none',
  });

const AppContainer = createAppContainer(RootStack);
AppRegistry.registerComponent('App', () => App)
