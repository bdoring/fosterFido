import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import Login from '../components/Login';
// import MainTab from '../components/MainTab';
import Feed from '../components/Feed';
import Profile from '../components/Profile';
import Register from '../components/Register';
import PetDetail from '../components/PetDetail';
import {
  Button
} from 'react-native-elements';

import { connect } from 'react-redux';
import { userLogout } from '../actions/users.actions';
import { bindActionCreators } from 'redux';

const MainTab = TabNavigator({
  Feed: {
    screen: Feed,
    navigationOptions: {
      headerTitle: 'Feed',
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      headerTitle: 'Profile'
    }
  }
})

const RootNavigator = StackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      // headerTitle: 'Login',
      headerLeft: null,
      headerTintColor: '#555555',
      headerStyle: {
        backgroundColor: '#84c7e8',
        borderBottomWidth: 0,
        // backgroundColor: '#D9E3F0',
      }
    }
  },
  MainTab: {
    screen: MainTab,
    navigationOptions: ({navigation}) => ({
      headerLeft: null,
      headerRight: <Button
                      backgroundColor="transparent"
                      color="blue"
                      title="Logout"
                      onPress={() => navigation.navigate('Login')}
                    />,
    })
  },
  Register: {
    screen: Register,
    navigationOptions: {
      headerTitle: 'Register'
    }
  },
  PetDetail: {
    screen: PetDetail,
    navigationOptions: {
      headerTitle: 'Pet Detail'
    }
  }
})

export default RootNavigator;
