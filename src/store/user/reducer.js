import * as actions from './actionTypes';

const userInitialState = {
  isAuth: false,
  name: '',
  email: '',
  token: '',
  role: '',
};
// eslint-disable-next-line default-param-last
export default function userReducer(state = userInitialState, action) {
  if (action.type === actions.USER_LOGGED_IN) {
    const user = {
      isAuth: false,
      name: action.payload.name,
      email: action.payload.email,
      token: action.payload.token,
      role: action.payload.role,
    };
    return user;
  }
  if (action.type === actions.USER_LOGGED_OUT) {
    return userInitialState;
  }

  return state;
}
