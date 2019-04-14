import React, { Component } from 'react';
import { Text, View, StyleSheet, SafeAreaView, Button, StatusBar, Platform } from 'react-native';


const isAndroid = Platform.OS === 'android';


export class ScreenA extends React.Component {
    render() {
      return (
        <View style={[styles.container, { backgroundColor: '#04444b' }]}>
          <StatusBar
            barStyle="light-content"
            backgroundColor="blue"
          />
          <Text style={[styles.paragraph, { color: '#04444b' }]}>
            Light Screen
          </Text>
          <Button
            title="Next"
            onPress={() => this.props.navigation.navigate('ScreenMul')}
            color={isAndroid ? "blue" : "#04444b"}
          />
        </View>
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