import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import Contact from '../contact/contact';
import Colors from '../../constants/colors';
import ContactList from "../contactList/contactList";
import AddContactButton from '../addContactButton/addContactButton';

export default class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View  style={styles.homeBackground}>
        <AddContactButton/>
        <ContactList/>
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
