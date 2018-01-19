import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {
  FormLabel,
  FormInput,
  Button
} from 'react-native-elements';

import axios from 'axios';

import Login from './components/Login';

import RootNavigator from './config/router';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {


  register = async () => {

    let thisUser = {
      username: this.state.username,
      password: this.state.password
    }
    let user = await axios.post("http://10.2.81.43:8000/users/register", thisUser)
  }

  login = async () => {
    let thisUser = {
      username: this.state.username,
      password: this.state.password
    }

    let user = await axios.post("http://10.2.81.43:8000/users/login", thisUser)

  }

  render() {
    console.log(this.state)
    return (
      <RootNavigator />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
