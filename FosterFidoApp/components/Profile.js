import React from 'react';
import {
  View,
  Text
} from 'react-native';
import {
  FormLabel,
  FormInput,
  Button
} from 'react-native-elements';

import { connect } from 'react-redux';
import { userUpdate, userDelete } from '../actions/users.actions';
import { bindActionCreators } from 'redux';

class Profile extends React.Component {
  state = {
    id: this.props.user.id,
    firstName: this.props.user.firstName,
    lastName: this.props.user.lastName,
    zipcode: this.props.user.zipcode,
    email: this.props.user.email,
  }

  render() {
    console.log("Profile props:", this.props)
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
        <Button
          title='Update Profile'
          onPress={() => this.props.userUpdate(this.state, this.props.navigation)}
        />
        <Button
          title='Delete Profile'
          onPress={() => this.props.userDelete(this.state.id, this.props.navigation)}
        />
      </View>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    userUpdate: userUpdate,
    userDelete: userDelete
  }, dispatch)
}

const mapStateToProps = (state, props) => {
  return {
    user: state.users
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Profile);
