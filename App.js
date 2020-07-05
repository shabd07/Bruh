import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import ReadScreen from './screens/ReadScreen';
import WriteScreen from './screens/WriteScreen';
import LoginScreen from './screens/loginScreen';
export default class App extends React.Component{
  render(){
    return(
      <AppContainer/>
    )
  }
}
const TabNavigator = createBottomTabNavigator({
Reading:{screen:ReadScreen},
Writing:{screen:WriteScreen},
login:{screen:LoginScreen},
});
const AppContainer = createAppContainer(TabNavigator);