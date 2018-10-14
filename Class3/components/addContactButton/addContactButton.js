import React from 'react';
import { StyleSheet, Button, View } from 'react-native';
import Colors from '../../constants/colors';
import { withNavigation } from 'react-navigation';

class AddContactButton extends React.Component {

  constructor(props) {
    super(props);
  }

  buttonPressed() {
    console.log('Add Contact Pressed');
    this.props.navigation.navigate('AddContact');
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


export default withNavigation(AddContactButton);