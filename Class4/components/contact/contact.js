import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../../constants/colors';
import PhotoButton from '../photoButoon/photoButton';

export default class Contact extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.contact}>
        <View style={styles.contactDetails}>
          <Text style={styles.name}>{this.props.name}</Text>
          <Text>
            <Text style={styles.emailTitle}>Email: </Text>
            <Text style={styles.email}>{this.props.email}</Text>
          </Text>
        </View>
        <View style={styles.photoButton}>
          <PhotoButton/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contact: {
    backgroundColor: Colors.softWhite,
    margin: 4,
    padding: 3,
    borderColor: Colors.black,
    borderWidth: 2,
    color: Colors.text,
    flexDirection: 'row',
  },
  contactDetails: {
    flex: 4,
  },
  photoButton: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 20,
    color: Colors.text,
  },
  emailTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  email: {
    fontSize: 16,
  },
});
