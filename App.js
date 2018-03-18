import React, { Component } from 'react';
import { AppRegistry,StyleSheet, Text, TextInput, View, Image,Button  } from 'react-native';
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};


export default class PinValidator extends Component {
  constructor(props) {
    super(props);
    this.state = {text: '*********'}
    
  }
 

  render() {
    
    return (
      <View style={styles.container}>
        
        <Image
         source={require('./images/pfire.png')}
        />

        <Text style={styles.PinText}>
            Pleace Enter your Pin
        </Text>
         
        <TextInput
          underlineColorAndroid='transparent'
          style = {styles.InputField}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />

        <Button
          style = {styles.button}
          title="Submit"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />

      </View>
    );
  }
}


const styles = StyleSheet.create({
  buttonContainer: {
    margin: 20
  },
  button:{
    color:"rgb(77, 136, 255)"
  },
  container:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "rgb(179, 179, 179)",
    opacity:0.9
  },
  PinText:{
    fontSize:30,
    padding: 30
  },
  InputField: {
    
    backgroundColor:"white",
    margin:20,
    textAlign:"center",
    width: 250,
    height: 50,
    borderColor:"black",
    borderStyle:"solid",
    borderRadius:20
  }
})