import React, { Component } from 'react';
import { Text, View, StyleSheet, SafeAreaView, Button, StatusBar, Platform, TouchableOpacity } from 'react-native';
import { createStackNavigator, createAppContainer, createDrawerNavigator, createBottomTabNavigator } from 'react-navigation';

//import {styles} from './styles';
const isAndroid = Platform.OS === 'android';

export class ScreenB extends React.Component {
    render() {
      return (
        <SafeAreaView style={[styles.container, { backgroundColor: '#ecf0f1' }]}>
          <StatusBar
            barStyle="dark-content"
            backgroundColor="red"
          />
          <Text style={styles.paragraph}>
            Dark Screen
          </Text>
          <TouchableOpacity style={ {backgroundColor:'#04444b'}} onPress={() => this.props.navigation.navigate('ScreenDiv')} >
              <Text> Hello</Text>
          </TouchableOpacity>
          <Button
            title="Next screen"
            onPress={() => this.props.navigation.navigate('ScreenDiv')}
          />
        </SafeAreaView>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    paragraph: {
      fontSize: 18,
      fontWeight: 'bold',
    },
  })