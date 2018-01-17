/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import LoginScreen from './Screens/LoginScreen';
import HomeScreen from './Screens/HomeScreen';



export default class App extends Component<{}> {
  render() {
    return (
       <AppNavigator/>
      
     
    );
  }
}



const AppNavigator = StackNavigator({
  LoginScreen:{screen:LoginScreen},
  HomeScreen:{screen:HomeScreen}
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  
});
