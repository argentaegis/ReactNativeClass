import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Colors from '../../constants/colors';
import {withNavigation} from "react-navigation";

class PhotoButton extends React.Component {

  constructor(props) {
    super(props);
  }

  buttonPressed() {
    console.log('Button Pressed');
    this.props.navigation.navigate('CameraScreen', {email: this.props.email});
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

export default withNavigation(PhotoButton);