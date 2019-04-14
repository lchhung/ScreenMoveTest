// Second screen which we will use to get the data
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text } from 'react-native';
//import all the components we are going to use.


// this will receive the value enter from screen one and then pass
// into the array
export class ArrayScreen extends React.Component {
    constructor(props){
        super(props);
        var arrayTest=[];
        const passedArrayLimit =this.props.navigation.state.params.passedArrayLimit;
        for (i=1; i<=passedArrayLimit; i++){
            //var arrayObj={key:i};
            arrayTest.push(i);
        }
        this.state={
            arrayTest:arrayTest,
        };    
    }
   
  // static navigationOptions = {
  //   //Setting the header of the screen
  //   title: 'Array Page',
  // };
  render() {
    
    return (
      //View to hold our multiple components
      <View style={styles.container}>
        <Text>
          Passed value from screen 1 to screen is
        </Text>
        <Text>{this.state.arrayTest}</Text>
        {/*Using the navigation prop we can get the value passed from the Array Screen*/}
        <Text style={styles.TextStyle}>
          {this.props.navigation.state.params.passedArrayLimit}
        </Text>
        <Text style={{ marginTop: 16 }}>Check condition</Text>
        
        <Text style={styles.TextStyle}>
          {this.props.navigation.state.params.passedArrayLimit
            ? this.props.navigation.state.params.passedArrayLimit
            : 'Nothing has passed'}
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