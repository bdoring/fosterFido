import { combineReducers } from 'redux'
import users from './users.reducer'
import feed from './feed.reducer'

export default combineReducers({
  users,
  feed
})
