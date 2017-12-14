import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {
  FormLabel,
  FormInput,
  Button,
  FormValidationMessage
} from 'react-native-elements';
import { connect } from 'react-redux';
import { userLogin } from '../actions/users.actions';
import { bindActionCreators } from 'redux';

class Login extends React.Component {
  state = {
    email: "B@bs.com",
    password: "123"
  }

  render() {
    console.log("Login Props:", this.props)
    return (
      <View style={styles.container}>
        <FormLabel>USERNAME</FormLabel>
        <FormInput
          onChangeText={(email) => this.setState({ email: email})}
          value={this.state.email}/>
        <FormLabel>PASSWORD</FormLabel>
        <FormInput
          onChangeText={(password) => this.setState({ password: password})}
        value={this.state.password}
        />
        {this.props.user.errorMessage && <FormValidationMessage>
          {this.props.user.errorMessage}
        </FormValidationMessage>}
        <Button
          title='Login'
          onPress={()=> this.props.userLogin(this.state, this.props.navigation)}
        />
        <Text>or</Text>
        <Button
          title='Create an Account'
          onPress={() => this.props.navigation.navigate('Register')}
        />
      </View>
    )
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

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    userLogin: userLogin,
  }, dispatch)
}

const mapStateToProps = (state, props) => {
  return {
    user: state.users
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Login);
