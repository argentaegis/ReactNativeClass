import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../../constants/colors';

export default class Contact extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.contact}>
        <Text style={styles.name}>Andrew Jones</Text>
        <Text>
          <Text style={styles.emailTitle}>Email:</Text>
          <Text style={styles.email}>argentaegis@gmail.com</Text>
        </Text>
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
