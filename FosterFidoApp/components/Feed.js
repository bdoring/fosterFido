import React from 'react';
import {ScrollView, View, Text, Image} from 'react-native';
import {Card, ListItem, Button} from 'react-native-elements'

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getFeedResults} from '../actions/feed.actions';

import PetCard from './PetCard';

const Feed = (props) => {
  let petList = props.feed.map((pet, index) => <PetCard key={index} pet={pet} navigation={props.navigation}/>)

  console.log("Feed props:", props);
  console.log("PetList:", petList);
  if (!props.feed[0]) {
    if (props.user.zipcode) {
      props.getFeedResults(props.user.zipcode);
    }
  }

  return (<ScrollView>
    <View>
      <Text>
        This is your feed, {props.user.firstName}
      </Text>
      {petList}
    </View>
  </ScrollView>)
}

const mapStateToProps = (state, props) => {
  return {user: state.users, feed: state.feed}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getFeedResults: getFeedResults
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
