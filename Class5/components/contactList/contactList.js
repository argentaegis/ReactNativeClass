import React from 'react';
import { StyleSheet, FlatList, View, AsyncStorage } from 'react-native';
import Colors from '../../constants/colors';
import Contact from '../contact/contact';
import { NavigationEvents  } from 'react-navigation';

export default class ContactList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      contacts: [],
    }
  }

  onFocused() {
    console.log('onFocused');
    this.getContacts();
  }

  getContacts() {
    AsyncStorage.getItem('contacts').then((value) => {
      if(value == undefined){
        console.log('No contacts');
      } else {
        let contacts = JSON.parse(value);
        this.setState({
          contacts: contacts
        })
      }
    });
    console.log(this.state.contacts);
  }

  renderItem(contact) {
    return (
      <View>
        <Contact name={contact.item.name} email={contact.item.email}/>
      </View>
    );
  }

  keyExtractor = (item, index) => (item.id).toString();

  render() {
    return (
      <View>
        <NavigationEvents
          onWillFocus={() => this.onFocused()}
        />
        <FlatList
          data={this.state.contacts}
          extraData={this.state}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
});
