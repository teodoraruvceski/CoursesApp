import { USER_LOGGED_IN, USER_LOGGED_OUT } from './actionTypes';

export function userLoggedIn(name, email, token) {
  const action = {
    type: USER_LOGGED_IN,
    payload: {
      name,
      email,
      token,
    },
  };
  return action;
}
export function userLoggedOut() {
  const action = {
    type: USER_LOGGED_OUT,
    payload: {
    },
  };
  return action;
}
