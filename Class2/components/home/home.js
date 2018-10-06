import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import Contact from '../contact/contact';
import Colors from '../../constants/colors';

export default class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View  style={styles.homeBackground}>
        <Contact name="Andrew Jones" email="argentaegis@gmail.com"/>
        <Contact name="Superman" email="ckent@dailyplanet.com"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  homeBackground: {
    height: Dimensions.get('window').height,
    backgroundColor: Colors.steelBlue,
  },
});
