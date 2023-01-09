import axios from 'axios';
import jwt from 'jwt-decode';

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
export const getToken = () => localStorage.getItem('token');
export const getUser = () => localStorage.getItem('name');
export const decodeToken = (token) => {
  console.log('we got token to decode:', token);
  const data = jwt(token);
  // const data = Buffer.from(token.split('.')[1], 'base64');
  return data;
};
