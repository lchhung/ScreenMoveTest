// Second screen which we will use to get the data
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text } from 'react-native';
//import all the components we are going to use.

export class SecondPage extends React.Component {
  static navigationOptions = {
    //Setting the header of the screen
    title: 'Second Page',
  };
  render() {
    
    return (
      //View to hold our multiple components
      <View style={styles.container}>
        <Text>
          Passed value from screen 1 to screen is
        </Text>
        {/*Using the navigation prop we can get the value passed from the first Screen*/}
        <Text style={styles.TextStyle}>
          {this.props.navigation.state.params.passedUser}
        </Text>
        <Text style={{ marginTop: 16 }}>Check condition</Text>
        {/*If you want to check the value is passed or not, you can use conditional operator.*/}
        <Text style={styles.TextStyle}>
          {this.props.navigation.state.params.passedUser
            ? this.props.navigation.state.params.passedUser
            : 'No thing has passed'}
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextStyle: {
    fontSize: 23,
    textAlign: 'center',
    color: 'red',
  },
});