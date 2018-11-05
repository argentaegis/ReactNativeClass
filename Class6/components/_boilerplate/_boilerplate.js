import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../../constants/colors';

export default class Boilerplate extends React.Component {

  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View>
        <Text>Boilerplate Working</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
});
