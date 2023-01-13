import { USER_LOGGED_IN, USER_LOGGED_OUT } from './actionTypes';

export function userLoggedIn(name, email, token, role) {
  const action = {
    type: USER_LOGGED_IN,
    payload: {
      name,
      email,
      token,
      role,
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
