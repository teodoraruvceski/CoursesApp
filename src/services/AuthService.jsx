import axios from 'axios';
import jwt from 'jwt-decode';
import { store } from '../store/index';

export const getToken = () => localStorage.getItem('token');
export const getUser = () => store.getState().users;
export const decodeToken = (token) => {
  const data = jwt(token);
  return data;
};
const api = 'http://localhost:4000';

export const register = (name, email, password) => axios.post(`${api}/register`, {
  name,
  email,
  password,
});

export const login = async (email, password) => {
  try {
    const data = await axios.post(`${api}/login`, {
      name: '',
      email,
      password,
    });
    return data;
  } catch (e) {
    return e;
  }
};
export const logout = async () => {
  const headers = {
    'Content-type': 'application/json',
    Authorization: getToken(),
  };
  const config = {
    headers,
  };
  const data = await axios.delete(`${api}/logout`, config);
  return data;
};
export const me = async (token) => {
  const headers = {
    'Content-type': 'application/json',
    Authorization: token,
  };
  const config = {
    headers,
  };
  const data = await axios.get(`${api}/users/me`, config);
  return data;
};
