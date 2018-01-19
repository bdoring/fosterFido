import React from 'react';
import {
  View
} from 'react-native';
import {
  FormLabel,
  FormInput,
  Button,
  Icon,
  Text
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
      <View style={{ backgroundColor: '#bbdefb', flex: 1}}>
        <View style={{display: 'flex', justifyContent: 'center', height: 150, flexDirection: 'column', backgroundColor: "white"}}>
          <Icon
            name='ios-person'
            type='ionicon'
            size={50}
            color='#84c7e8'
            />
            <Text h4 style={{ fontFamily: 'Futura', textAlign: 'center', color: '#555555'}}>
              Your Account Details
            </Text>
        </View>

        <FormLabel
          labelStyle={{color: '#555555'}}
          >First Name</FormLabel>
        <FormInput
          inputStyle={{color: '#555555'}}
          containerStyle={{borderBottomColor: '#697689', width: 300}}
          onChangeText={(fName) => this.setState({ firstName: fName })}
          value={this.state.firstName}/>
        <FormLabel labelStyle={{color: '#555555'}}>Last Name</FormLabel>
        <FormInput
          inputStyle={{color: '#555555'}}
          containerStyle={{borderBottomColor: '#697689', width: 300}}
          onChangeText={(lName) => this.setState({ lastName: lName })}
          value={this.state.lastName}/>
        <FormLabel labelStyle={{color: '#555555'}}>Zipcode</FormLabel>
        <FormInput
          inputStyle={{color: '#555555'}}
          containerStyle={{borderBottomColor: '#697689', width: 300}}
          onChangeText={(zipcode) => this.setState({ zipcode: zipcode })}
          value={this.state.zipcode}/>
        <FormLabel labelStyle={{color: '#555555'}}>Email Address</FormLabel>
        <FormInput
          inputStyle={{color: '#555555'}}
          containerStyle={{borderBottomColor: '#697689', width: 300}}
          onChangeText={(email) => this.setState({ email: email })}
          value={this.state.email}/>
        <Button
          raised
          title='Update Profile'
          backgroundColor="#4CAF50"
          containerViewStyle={{margin: 10}}
          onPress={() => this.props.userUpdate(this.state, this.props.navigation)}
        />
        <Button
          raised
          title='Delete Profile'
          backgroundColor="#F47373"
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
