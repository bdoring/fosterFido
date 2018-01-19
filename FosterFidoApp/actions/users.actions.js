import axios from 'axios';

export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_REJECTED = "USER_LOGIN_REJECTED";
export const USER_REGISTER = "USER_REGISTER";
export const USER_UPDATE = "USER_UPDATE";
export const USER_DELETE = "USER_DELETE";
export const USER_LOGOUT = "USER_LOGOUT";

export const userLogin = (thisUser, navigation) => {
  return async (dispatch) => {
    console.log("userLogin - thisUser:", thisUser);
    console.log("USER SERVER RESPONSE:", user);
    let user = await axios.post("http://localhost:8000/users/login", thisUser);
    console.log("USER SERVER RESPONSE:", user);

    if (user.data === "Account Not Found") {
      dispatch({
        type: USER_LOGIN_REJECTED
      })
    } else {
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: user.data,
        navigation: navigation
      })
    }
  }
}

export const userRegister = (thisUser, navigation) => {
  return async (dispatch) => {
    let user = await axios.post("http://localhost:8000/users/register", thisUser);
    dispatch({
      type: USER_REGISTER,
      payload: user.data,
      navigation: navigation
    })
  }
}

export const userUpdate = (thisUser, navigation) => {
  return async (dispatch) => {
    let user = await axios.patch("http://localhost:8000/users/update", thisUser);

    dispatch({
      type: USER_UPDATE,
      payload: user.data,
      navigation: navigation
    })
  }
}

export const userDelete = (thisUser, navigation) => {
  return async (dispatch) => {
    console.log("USER DELETE:", thisUser)
    let user = await axios.delete(`http://localhost:8000/users/delete/${thisUser}`);

    dispatch({
      type: USER_DELETE,
      navigation: navigation
    })
  }
}

export const userLogout = (thisUser) => {
  return async (dispatch) => {
    console.log("USER LOGGING OUT...");

    dispatch({
      type: USER_LOGOUT
    })
  }
}
