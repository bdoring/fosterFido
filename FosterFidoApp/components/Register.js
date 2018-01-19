import React from 'react';
import {
  FormLabel,
  FormInput,
  Button,
  Icon,
  Text
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
      <View style={{ backgroundColor: '#bbdefb', flex: 1}}>
        <View style={{display: 'flex', justifyContent: 'center', height: 150, flexDirection: 'column', backgroundColor: "white"}}>
          <Icon
            name='pencil'
            type='entypo'
            size={50}
            color='#84c7e8'
            />
            <Text h4 style={{ fontFamily: 'Futura', textAlign: 'center', color: '#555555'}}>
              Create Your Account
            </Text>
        </View>
        <FormLabel labelStyle={{color: '#555555'}}>First Name</FormLabel>
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
        <FormLabel labelStyle={{color: '#555555'}}>Password</FormLabel>
        <FormInput
          inputStyle={{color: '#555555'}}
          containerStyle={{borderBottomColor: '#697689', width: 300}}
          secureTextEntry={true}
          onChangeText={(password) => this.setState({ password: password })}
          value={this.state.password}/>
        <Button
          raised
          title='Register'
          backgroundColor="#4CAF50"
          containerViewStyle={{margin: 20}}
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
