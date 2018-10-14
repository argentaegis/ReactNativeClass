import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import Colors from '../../constants/colors';

export default class AddContact extends React.Component {

  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.background}>
        <Text>AddContact Working</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    height: Dimensions.get('window').height,
    backgroundColor: Colors.steelBlue,
  },
});