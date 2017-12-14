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

const MainTab = TabNavigator({
  Feed: {
    screen: Feed,
    navigationOptions: {
      headerTitle: 'Feed'
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
      headerTitle: 'Login',
      headerLeft: null
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
