import React from 'react';
import {
  View,
  Text
} from 'react-native';
import { connect } from 'react-redux';


const Feed = (props) => {
  return (
    <View>
      <Text>
        This is your feed, {props.user.firstName}
      </Text>

    </View>
  )
}

const mapStateToProps = (state, props) => {
  return {
    user: state.users
  }
}


export default connect(mapStateToProps, null) (Feed);
