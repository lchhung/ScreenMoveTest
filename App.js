import React, { Component } from 'react';
import { AppRegistry} from 'react-native';
import { createStackNavigator, createAppContainer, createDrawerNavigator, createBottomTabNavigator } from 'react-navigation';
// import {ScreenA} from './Screen1';
// import {ScreenB} from './Screen2';
import {NumsPage} from './NumsPage';
import {ArrayScreen} from './ArrayScreen';



export default class App extends React.Component {
  render(){
    return<AppContainer/>;
  }
}


const RootStack= createStackNavigator({
  NumsPage: NumsPage,
  ArrayScreen: ArrayScreen,
}, {
  headerMode: 'none',
});


const AppContainer =createAppContainer(RootStack); 
AppRegistry.registerComponent('App', () => App)

// Uncomment this area and comment out the other navigators to see a drawer example
//
// export default createAppContainer(createDrawerNavigator({
//   Screen1: {
//     screen: Screen1,
//   },
//   Screen2: {
//     screen: Screen2,
//   },
// }));

// Uncomment this area and comment out the other navigators to see a tab example
//
// export default createAppContainer(createBottomTabNavigator({
//   Screen1: {
//     screen: Screen1,
//     navigationOptions: {
//       tabBarOnPress: ({ previousScene, scene, jumpToIndex }) => {
//         // TODO: This doesn't handle the initial render because the second screen renders last. What to do?
//         StatusBar.setBarStyle('light-content');
//         isAndroid && StatusBar.setBackgroundColor('#6a51ae');
//         jumpToIndex(scene.index);
//       },
//     },
//   },
//   Screen2: {
//     screen: Screen2,
//     navigationOptions: {
//       tabBarOnPress: ({ previousScene, scene, jumpToIndex }) => {
//         StatusBar.setBarStyle('dark-content');
//         isAndroid && StatusBar.setBackgroundColor('#ecf0f1');
//         jumpToIndex(scene.index);
//       },
//     },
//   },
// }));

