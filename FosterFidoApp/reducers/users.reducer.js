import {
  USER_LOGIN_REJECTED,
  USER_LOGIN_SUCCESS,
  USER_REGISTER,
  USER_UPDATE,
  USER_DELETE,
  USER_LOGOUT
} from '../actions/users.actions';


export default (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REJECTED:
      return { errorMessage: "Incorrect Username or Password"};

    case USER_LOGIN_SUCCESS:
      action.navigation.navigate("MainTab");
      return { ...action.payload};

    case USER_REGISTER:
      action.navigation.navigate("MainTab");
      return { ...action.payload};

    case USER_UPDATE:
      action.navigation.navigate("MainTab");
      return { ...action.payload};

    case USER_DELETE:
      action.navigation.navigate("Login");
      return {};

    case USER_LOGOUT:
      return {};

    default:
      return state;
  }
}
