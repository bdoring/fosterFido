import React from 'react';
import {ScrollView, View, Text, Image} from 'react-native';
import {Card, ListItem, Button, Text as WelcomeMessage, Icon} from 'react-native-elements'

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getFeedResults} from '../actions/feed.actions';

import PetCard from './PetCard';

class Feed extends React.Component {

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate:", nextProps.user.zipcode != this.props.user.zipcode);
    if (nextProps.user.zipcode != this.props.user.zipcode) {
      console.log("UPDATING FEED...");
      this.props.getFeedResults(nextProps.user.zipcode)
    }
    return true;
  }

  render() {
    let petList = this.props.feed.map((pet, index) => <PetCard key={index} pet={pet} navigation={this.props.navigation}/>);

    if (!this.props.feed[0]) {
      if (this.props.user.zipcode) {
        this.props.getFeedResults(this.props.user.zipcode);
      }
    }

    return (
      <ScrollView style={{ backgroundColor: '#84c7e8', flex:1 }}>
        <View>
          <View style={{display: 'flex', justifyContent: 'center', height: 150, flexDirection: 'column', backgroundColor: "white"}}>
            <Icon
              name='paw'
              type='foundation'
              size={50}
              color='#84c7e8'
              />
              <WelcomeMessage h4 style={{ fontFamily: 'Futura', textAlign: 'center', color: '#555555'}}>
                Hi, {this.props.user.firstName}!
              </WelcomeMessage>
              <WelcomeMessage h5 style={{ fontFamily: 'Futura', textAlign: 'center', color: '#555555'}}>
                These are your results based on your location:
              </WelcomeMessage>
          </View>


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
