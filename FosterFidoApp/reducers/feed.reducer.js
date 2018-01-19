import {GET_FEED_RESULTS_PENDING, GET_FEED_RESULTS_SUCCESS} from '../actions/feed.actions';

export default(state = [], action) => {
  switch (action.type) {
    case GET_FEED_RESULTS_PENDING:
      return state;

    case GET_FEED_RESULTS_SUCCESS:
      return [...action.payload];

    default:
      return state;
  }
}
