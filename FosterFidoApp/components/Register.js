import React from 'react';
import {
  FormLabel,
  FormInput,
  Button
} from 'react-native-elements';
import {
  View
} from 'react-native';
import { connect } from 'react-redux';
import { userRegister } from '../actions/users.actions';
import { bindActionCreators } from 'redux';


class Register extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    zipcode: "",
    email: "",
    password: ""
  }

  render() {
    console.log("REGISTER STATE:", this.state);
    return (
      <View>
        <FormLabel>First Name</FormLabel>
        <FormInput
          onChangeText={(fName) => this.setState({ firstName: fName })}
          value={this.state.firstName}/>
        <FormLabel>Last Name</FormLabel>
        <FormInput
          onChangeText={(lName) => this.setState({ lastName: lName })}
          value={this.state.lastName}/>
        <FormLabel>Zipcode</FormLabel>
        <FormInput
          onChangeText={(zipcode) => this.setState({ zipcode: zipcode })}
          value={this.state.zipcode}/>
        <FormLabel>Email Address</FormLabel>
        <FormInput
          onChangeText={(email) => this.setState({ email: email })}
          value={this.state.email}/>
        <FormLabel>Password</FormLabel>
        <FormInput
          onChangeText={(password) => this.setState({ password: password })}
          value={this.state.password}/>
        <Button
          title='Register'
          onPress={() => this.props.userRegister(this.state, this.props.navigation)}
        />
      </View>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    userRegister: userRegister
  }, dispatch)
}

export default connect(null, mapDispatchToProps) (Register);
