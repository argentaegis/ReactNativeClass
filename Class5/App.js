import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Home from './components/home/home';
import AddContact from "./components/addContact/addContact";
import CameraScreen from './components/cameraScreen/cameraScreen';

const RootStack = createStackNavigator(
  {
    Home: { screen: Home },
    AddContact: { screen: AddContact },
    CameraScreen: { screen: CameraScreen },
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
