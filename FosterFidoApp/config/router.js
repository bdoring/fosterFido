import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import Login from '../components/Login';
// import MainTab from '../components/MainTab';
import Feed from '../components/Feed';
import Profile from '../components/Profile';
import Register from '../components/Register';
import PetDetail from '../components/PetDetail';
import {
  Button,
  Icon
} from 'react-native-elements';

import { connect } from 'react-redux';
import { userLogout } from '../actions/users.actions';
import { bindActionCreators } from 'redux';

const MainTab = TabNavigator({
  Feed: {
    screen: Feed,
    navigationOptions: {
      headerTitle: 'Feed',
      headerTintColor: '#555555',
      headerStyle: {
        backgroundColor: '#D9E3F0'
      },
      tabBarIcon: ({ tintColor }) => (<Icon
          name='feed'
          type='font-awesome'
          size={25}
          color={ tintColor }
        />)
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      headerTitle: 'Profile',
      headerTintColor: '#555555',
      headerStyle: {
        backgroundColor: '#D9E3F0'
      },
      tabBarIcon: ({ tintColor }) => (<Icon
          name='ios-person'
          type='ionicon'
          size={25}
          color={ tintColor }
        />)
    }
  }
})

const RootNavigator = StackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      headerLeft: null,
      headerTintColor: '#555555',
      headerStyle: {
        backgroundColor: '#C4DEF6',
        borderBottomWidth: 0,
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
      headerTitle: 'Pet Detail',
      headerTintColor: '#555555',
      headerStyle: {
        backgroundColor: '#D9E3F0'
      }
    }
  }
})

export default RootNavigator;
