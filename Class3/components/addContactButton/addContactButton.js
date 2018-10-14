import React from 'react';
import { StyleSheet, Button, View } from 'react-native';
import Colors from '../../constants/colors';

export default class AddContactButton extends React.Component {

  constructor(props) {
    super(props);
  }

  buttonPressed() {
    console.log('Add Contact Pressed');
  }

  render() {
    return (
      <View>
        <Button
          onPress={this.buttonPressed.bind(this)}
          title="Add Contact"
          color={Colors.buttonColor}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
});
