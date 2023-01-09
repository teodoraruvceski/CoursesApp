import * as actions from './actionTypes';

const userInitialState = {
  isAuth: false, // default value - false. After success login - true
  name: '', // default value - empty string. After success login -name of user
  email: '', // default value - empty string. After success login -email of user
  token: '', // default value - empty string or token value from localStorage.

};
// eslint-disable-next-line default-param-last
export default function userReducer(state = userInitialState, action) {
  if (action.type === actions.USER_LOGGED_IN) {
    const user = {
      isAuth: false,
      name: action.payload.name,
      email: action.payload.email,
      token: action.payload.token,
    };
    return user;
  }
  if (action.type === actions.USER_LOGGED_OUT) {
    return userInitialState;
  }

  return state;
}
