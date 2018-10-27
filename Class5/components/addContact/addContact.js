import React from 'react';
import {Dimensions, StyleSheet, TextInput, Button, View, AsyncStorage} from 'react-native';
import Colors from '../../constants/colors';
const uuidv1 = require('uuid/v1');

export default class AddContact extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      email: '',
      contacts: []
    }
  }
  static navigationOptions = {
    header: null,
  };

  componentDidMount(){
    this.generateId();
    this.getContacts();
  }

  generateId(){
    let id = uuidv1();
    this.setState({id});
  }

  getContacts(){
    AsyncStorage.getItem('contacts').then((value) => {
      if(value != undefined){
        this.setState({contacts: JSON.parse(value)});
      }
    });
  }

  onNameChange(value) {
    console.log(value);
    this.setState({name: value});
    console.log(this.state.name);
  }

  onEmailChange(value) {
    this.setState({email: value});
  }

  onSubmit(){
    let contacts = this.state.contacts;

    contacts.push({
      id: this.state.id,
      name: this.state.name,
      email: this.state.email,
    })
    console.log('submit');
    console.log(contacts);

    AsyncStorage.setItem('contacts', JSON.stringify(contacts)).then(() => {
      this.props.navigation.navigate('Home');
    });
  }

  render() {
    return (
      <View style={styles.background}>
        <TextInput
          value={this.state.name}
          placeholder="Name"
          onChangeText={(value) => this.onNameChange(value)}
          style={styles.textInput}
        />
        <TextInput
          value={this.state.email}
          placeholder="Email"
          onChangeText={(value) => this.onEmailChange(value)}
          style={styles.textInput}
        />
        <Button
          onPress={this.onSubmit.bind(this)}
          title="Add Contact"
          color={Colors.buttonColor}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    height: Dimensions.get('window').height,
    backgroundColor: Colors.steelBlue,
  },
  textInput: {
    backgroundColor: Colors.softWhite,
    fontWeight: 'bold',
    fontSize: 20,
    color: Colors.text,
  }
});