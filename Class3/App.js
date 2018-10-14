import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';

import Home from './components/home/home';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Home/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
});
