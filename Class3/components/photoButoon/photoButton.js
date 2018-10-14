import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Colors from '../../constants/colors';

export default class PhotoButton extends React.Component {

  constructor(props) {
    super(props);
  }

  buttonPressed() {
    console.log('Button Pressed');
  }

  render() {
    return (
      <View>
        <Button
          onPress={this.buttonPressed.bind(this)}
          title="Photo"
          color={Colors.buttonColor}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
});
