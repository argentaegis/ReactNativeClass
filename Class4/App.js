import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Home from './components/home/home';
import AddContact from "./components/addContact/addContact";

const RootStack = createStackNavigator(
  {
    Home: { screen: Home },
    AddContact: { screen: AddContact },
  },
  {
    initialRoute: 'Home'
  }
);

export default class App extends React.Component {
  render() {
    return (
      <RootStack/>
    );
  }
}

const styles = StyleSheet.create({
});
