import React from 'react';
import {ScrollView, View, Text, Image} from 'react-native';
import {Card, ListItem, Button} from 'react-native-elements'

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getFeedResults} from '../actions/feed.actions';

import PetCard from './PetCard';

let counter = 0;

class Feed extends React.Component {


  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate:", nextProps.user.zipcode != this.props.user.zipcode);
    if (nextProps.user.zipcode != this.props.user.zipcode) {
      console.log("UPDATING FEED...");
      this.props.getFeedResults(nextProps.user.zipcode)
    }
    return true;
  }

  // myFunc = () => {
  //   if (!this.props.feed[0]) {
  //     if (this.props.user.zipcode) {
  //       this.props.getFeedResults(this.props.user.zipcode);
  //     }
  //   }
  // }
  //
  // myFunc();


  render() {
    console.log("RENDERED")
    counter = counter + 1;
    console.log(`this.props.feed ${counter}:`, this.props.feed)
    let petList = this.props.feed.map((pet, index) => <PetCard key={index} pet={pet} navigation={this.props.navigation}/>);

    if (!this.props.feed[0]) {
      if (this.props.user.zipcode) {
        this.props.getFeedResults(this.props.user.zipcode);
      }
    }

    return (
      <ScrollView>
        <View>
          <Text>
            This is your feed, {this.props.user.firstName}
          </Text>
          {petList}
        </View>
      </ScrollView>)
  }
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
