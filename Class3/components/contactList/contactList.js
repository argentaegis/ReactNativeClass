import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import Colors from '../../constants/colors';
import Contact from '../contact/contact';

export default class ContactList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      contacts: []
    }
  }

  componentWillMount() {
    this.getContacts();
  }

  getContacts() {
    const myContacts = [
      {
        name: 'Andrew Jones',
        email: 'argentaegis@gmail.com'
      },
      {
        name: 'Superman',
        email: 'ckent@dailyplanet.com'
      },
    ]

    this.setState({
      contacts: myContacts
    })
  }

  renderItem(contact) {
    return (
      <View>
        <Contact name={contact.item.name} email={contact.item.email}/>
      </View>
    );
  }

  _keyExtractor = (item, index) => (item.email).toString();

  render() {
    return (
      <View>
        <FlatList
          data={this.state.contacts}
          extraData={this.state}
          renderItem={this.renderItem}
          keyExtractor={this._keyExtractor}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
});
