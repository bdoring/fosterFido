import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import {
  FormLabel,
  FormInput,
  Button,
  FormValidationMessage,
  Icon,
  Divider,
  Text as AppName
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
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Image
            style={{width: 200, height: 200}}
            source={require('./images/fosterFido.png')}
          />

        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <AppName h1 style={{ fontFamily: 'Futura-CondensedExtraBold'}}>FosterFido</AppName>
        </View>

        <View style={{flexDirection: "row", padding: 10, margin: 10}}>
          <Icon
            name='ios-person-outline'
            type='ionicon'
            color="#697689"/>
          <FormInput
            inputStyle={{color: '#555555'}}
            containerStyle={{borderBottomColor: '#697689', width: 300}}
            placeholder="Username"
            onChangeText={(email) => this.setState({ email: email})}
            value={this.state.email}/>
        </View>

        <View style={{flexDirection: "row", padding: 10, margin: 10, marginBottom: 5}}>
          <Icon
            name='ios-lock-outline'
            type='ionicon'
            color="#697689"/>
          <FormInput
            inputStyle={{color: '#555555'}}
            containerStyle={{borderBottomColor: '#697689', width: 300}}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(password) => this.setState({ password: password})}
          value={this.state.password}
          />
        </View>

        {this.props.user.errorMessage && <FormValidationMessage
          labelStyle={{ color:'#F44336', fontWeight: 'bold'}}
          containerStyle={{ justifyContent: 'center', flexDirection: "row", marginBottom: 10}}>

          {this.props.user.errorMessage}
        </FormValidationMessage>}
        <Button
          raised
          backgroundColor="#4CAF50"
          title='Login'
          onPress={()=> this.props.userLogin(this.state, this.props.navigation)}
        />
        <Divider
          style={{ margin: 20, backgroundColor: 'white'}} />
        <Text style={{ marginBottom: 10, color: "#697689", justifyContent: 'center', textAlign: 'center', flexDirection: 'row'}}>Don't have an account?</Text>
        <View style={{flexDirection: 'row', justifyContent:'center'}}>
          <Button
            raised
            backgroundColor="#FF8A65"
            title='Create an Account'
            containerViewStyle={{width: 200}}
            onPress={() => this.props.navigation.navigate('Register')}
          />
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C4DEF6',
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
