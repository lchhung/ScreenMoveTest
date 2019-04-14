import React, { Component } from 'react';
import { StyleSheet, View, Button, TextInput } from 'react-native';

export class NumsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayLimit: '',
      passedArrayLimit:''
    };
  }
  // static navigationOptions = {
  //   //Setting the header of the screen
  //   title: 'Home',
  // };

  render() {
    const { navigate } = this.props.navigation;
    return (
      //View to hold our multiple components
      <View style={styles.container}>
        {/*Input to get the value from the user*/}
        <TextInput
          value={this.state.arrayLimit}
          onChangeText={arrayLimit => this.setState({ arrayLimit })}
          placeholder={'Enter array limit'}
          style={styles.input}
        />
        {/*Button to go to the next activity*/}
        <Button
          title="Enter"
          
          onPress={() =>
            navigate('ArrayScreen', {
              passedArrayLimit: this.state.arrayLimit,
            })
          }
          //On click of the button we will send the data as a Json from here to the Second Screen using navigation prop
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#DBDBD6',
  },
});